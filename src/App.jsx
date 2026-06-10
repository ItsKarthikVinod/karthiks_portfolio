import React, { useEffect, useRef } from "react";
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
  const { closeWindow } = useWindowStore();
  const { resetActiveLocation } = useLocationStore();
  const motionHandlerRef = useRef(null);
  const lastMotionRef = useRef({ x: 0, y: 0, z: 0, time: 0 });
  const threshold = 20;

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(max-width: 768px)").matches) return;
    if (typeof DeviceMotionEvent === "undefined") return;

    const resetHome = () => {
      closeWindow("finder");
      resetActiveLocation();
    };

    const onMotion = (event) => {
      const acc = event.accelerationIncludingGravity;
      if (!acc) return;

      const now = Date.now();
      const {
        x: lastX,
        y: lastY,
        z: lastZ,
        time: lastTime,
      } = lastMotionRef.current;

      if (lastTime && now - lastTime > 150) {
        const delta =
          Math.abs((acc.x ?? 0) - lastX) +
          Math.abs((acc.y ?? 0) - lastY) +
          Math.abs((acc.z ?? 0) - lastZ);

        if (delta > threshold) {
          resetHome();
        }
      }

      lastMotionRef.current = {
        x: acc.x ?? 0,
        y: acc.y ?? 0,
        z: acc.z ?? 0,
        time: now,
      };
    };

    const startMotionListener = () => {
      motionHandlerRef.current = onMotion;
      window.addEventListener("devicemotion", onMotion);
    };

    const requestMotionPermission = async () => {
      if (typeof DeviceMotionEvent.requestPermission === "function") {
        try {
          const permission = await DeviceMotionEvent.requestPermission();
          if (permission !== "granted") return false;
        } catch {
          return false;
        }
      }
      return true;
    };

    const initMotion = async () => {
      const granted = await requestMotionPermission();
      if (granted) {
        startMotionListener();
      }
    };

    if (typeof DeviceMotionEvent.requestPermission === "function") {
      const touchHandler = async () => {
        window.removeEventListener("touchstart", touchHandler);
        await initMotion();
      };
      window.addEventListener("touchstart", touchHandler, { once: true });
    } else {
      initMotion();
    }

    return () => {
      if (motionHandlerRef.current) {
        window.removeEventListener("devicemotion", motionHandlerRef.current);
      }
    };
  }, [closeWindow, resetActiveLocation]);

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
