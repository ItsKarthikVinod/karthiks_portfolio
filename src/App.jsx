import React, { useEffect } from "react";
import { Dock, Navbar, Welcome, Home } from "#components";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import {
  Terminal,
  Safari,
  Resume,
  Finder,
  Text,
  Image,
  Contact,
  Photos,
} from "#windows";
import useWindowStore from "#store/window";
import useLocationStore from "#store/location";

gsap.registerPlugin(Draggable);

const App = () => {
  const { windows, closeWindow } = useWindowStore();
  const { resetActiveLocation } = useLocationStore();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (!isMobile) return;
    if (typeof DeviceMotionEvent === "undefined") return;

    const resetHome = () => {
      Object.keys(windows).forEach((windowKey) => {
        if (windows[windowKey]?.isOpen) {
          closeWindow(windowKey);
        }
      });
      resetActiveLocation();
    };

    let lastX = null;
    let lastY = null;
    let lastZ = null;
    let lastTime = 0;
    const threshold = 20;

    let motionHandler = null;

    const requestPermission = async () => {
      if (
        typeof DeviceMotionEvent !== "undefined" &&
        typeof DeviceMotionEvent.requestPermission === "function"
      ) {
        try {
          const permission = await DeviceMotionEvent.requestPermission();
          return permission === "granted";
        } catch {
          return false;
        }
      }
      return true;
    };

    requestPermission().then((granted) => {
      if (!granted) return;

      motionHandler = (event) => {
        const acc = event.accelerationIncludingGravity;
        if (!acc) return;

        const now = Date.now();
        if (lastTime && now - lastTime > 150) {
          const delta =
            Math.abs(acc.x - lastX) +
            Math.abs(acc.y - lastY) +
            Math.abs(acc.z - lastZ);

          if (delta > threshold) {
            resetHome();
          }
        }

        lastX = acc.x;
        lastY = acc.y;
        lastZ = acc.z;
        lastTime = now;
      };

      window.addEventListener("devicemotion", motionHandler);
    });

    return () => {
      if (motionHandler) {
        window.removeEventListener("devicemotion", motionHandler);
      }
    };
  }, [closeWindow, resetActiveLocation, windows]);

  return (
    <main className="ios-shell">
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <Text />
      <Image />
      <Contact />
      <Home />
      <Photos />
    </main>
  );
};

export default App;
