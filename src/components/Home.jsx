import React, { useState, useEffect, useRef } from "react";
import clsx from "clsx";
import { Draggable } from "gsap/Draggable";
import { locations } from "#constants";
import useLocationStore from "#store/location";
import useWindowStore from "#store/window";

const Home = () => {
  const projects = locations.work?.children ?? [];
  const [isMobile, setIsMobile] = useState(false);
  const [positions, setPositions] = useState(() =>
    projects.map(
      (p, i) =>
        p.position ?? {
          x: 20 + (i % 5) * 110,
          y: 20 + Math.floor(i / 5) * 130,
        },
    ),
  );

  const draggablesRef = useRef([]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(max-width: 768px)");
    const handler = (e) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    // kill previous draggables
    draggablesRef.current.forEach((d) => d && d.kill && d.kill());
    draggablesRef.current = [];

    if (!isMobile) {
      const els = document.querySelectorAll(".folder[data-index]");
      els.forEach((el) => {
        const idx = Number(el.dataset.index);
        const inst = Draggable.create(el, {
          type: "x,y",
          onDragEnd: function () {
            const x = this.x ?? 0;
            const y = this.y ?? 0;
            setPositions((prev) => {
              const copy = prev.slice();
              copy[idx] = { x, y };
              return copy;
            });
          },
        })[0];
        draggablesRef.current.push(inst);
      });
    }
  }, [isMobile, projects.length]);

  const { setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const handleOpenProjectFinder = (project) => {
    setActiveLocation(project);
    openWindow("finder");
  };

  return (
    <section id="home">
      <ul
        style={{ position: "relative", minHeight: isMobile ? undefined : 600 }}
      >
        {projects.map((project, i) => {
          const pos = positions[i] ?? { x: 0, y: 0 };
          const style = !isMobile
            ? {
                position: "absolute",
                transform: `translate(${pos.x}px, ${pos.y}px)`,
              }
            : undefined;

          return (
            <li
              key={project.id}
              data-index={i}
              className={clsx(
                "group folder",
                project.windowPosition,
                isMobile && "app-icon",
              )}
              style={style}
              role="button"
              tabIndex={0}
              onClick={() => handleOpenProjectFinder(project)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleOpenProjectFinder(project);
              }}
            >
              <div className="icon-wrap">
                <img
                  src={project.icon ?? "/images/folder.png"}
                  alt={project.name}
                />
              </div>
              <p className="icon-label">{project.name}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Home;
