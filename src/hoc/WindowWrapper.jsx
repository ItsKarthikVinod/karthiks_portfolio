import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import useWindowStore from "#store/window";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";

const HOME_MINIMIZE_DISTANCE = 70;
const HOME_CLOSE_DISTANCE = 170;

const WindowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { windows, focusWindow, minimizeWindow, closeWindow } =
      useWindowStore();
    const { isOpen, isMinimized, zIndex } = windows[windowKey];

    const [isMobile, setIsMobile] = useState(false);
    const [hint, setHint] = useState("Swipe up to minimize");
    const ref = useRef(null);
    const gestureRef = useRef({
      startY: 0,
      endY: 0,
      isSwiping: false,
    });

    useEffect(() => {
      if (typeof window === "undefined") return;
      const updateMobile = () => setIsMobile(window.innerWidth <= 768);
      updateMobile();
      window.addEventListener("resize", updateMobile);
      return () => window.removeEventListener("resize", updateMobile);
    }, []);

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;
      el.style.display = "block";
      gsap.fromTo(
        el,
        { scale: 0.8, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "power3.out" },
      );
    }, [isOpen]);

    useGSAP(() => {
      if (isMobile) return;
      const el = ref.current;
      if (!el) return;
      const [instance] = Draggable.create(el, {
        type: "x,y",
        onPress: () => focusWindow(windowKey),
      });
      return () => instance.kill();
    }, [isMobile]);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;
      el.style.display = isOpen && !isMinimized ? "block" : "none";
    }, [isOpen, isMinimized]);

    const handleHomeTouchStart = (event) => {
      if (!event.touches?.[0]) return;
      gestureRef.current.startY = event.touches[0].clientY;
      gestureRef.current.endY = event.touches[0].clientY;
      gestureRef.current.isSwiping = true;
      setHint("Swipe up to minimize");
    };

    const handleHomeTouchMove = (event) => {
      if (!gestureRef.current.isSwiping || !event.touches?.[0]) return;
      gestureRef.current.endY = event.touches[0].clientY;
      const deltaY = gestureRef.current.startY - gestureRef.current.endY;

      if (deltaY > HOME_CLOSE_DISTANCE) {
        setHint("Release to close app");
      } else if (deltaY > HOME_MINIMIZE_DISTANCE) {
        setHint("Release to go home");
      } else {
        setHint("Swipe up to minimize");
      }
    };

    const handleHomeTouchEnd = () => {
      if (!gestureRef.current.isSwiping) return;
      const deltaY = gestureRef.current.startY - gestureRef.current.endY;
      gestureRef.current.isSwiping = false;
      gestureRef.current.startY = 0;
      gestureRef.current.endY = 0;

      if (deltaY > HOME_CLOSE_DISTANCE) {
        closeWindow(windowKey);
      } else if (deltaY > HOME_MINIMIZE_DISTANCE) {
        minimizeWindow(windowKey);
      }

      setHint("Swipe up to minimize");
    };

    const isVisible = isOpen && !isMinimized;

    return (
      <section id={windowKey} ref={ref} style={{ zIndex }} className="absolute">
        <Component {...props} />

        {isMobile && isVisible && (
          <div
            className="mobile-home-indicator"
            onTouchStart={handleHomeTouchStart}
            onTouchMove={handleHomeTouchMove}
            onTouchEnd={handleHomeTouchEnd}
            onTouchCancel={handleHomeTouchEnd}
          >
            <div className="mobile-home-indicator__hint">{hint}</div>
            <div className="mobile-home-indicator__pill" />
          </div>
        )}
      </section>
    );
  };

  Wrapped.displayName = `WindowWrapper(${Component.displayName || Component.name || "Component"})`;

  return Wrapped;
};

export default WindowWrapper;
