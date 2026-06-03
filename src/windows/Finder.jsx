import { useState } from "react";
import { WindowControls } from "#components";
import { Search } from "lucide-react";
import React from "react";
import WindowWrapper from "#hoc/WindowWrapper";
import { locations } from "#constants";
import useWindowStore from "#store/window";
import clsx from "clsx";
import useLocationStore from "#store/location";

const Finder = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { activeLocation, setActiveLocation } = useLocationStore();
  const { openWindow } = useWindowStore();

  const toggleSidebar = () => setSidebarOpen((open) => !open);

  const openItem = (item) => {
    if (item.fileType === "pdf") {
      setSidebarOpen(false);
      return openWindow("resume");
    }

    if (item.kind === "folder") {
      setSidebarOpen(false);
      return setActiveLocation(item);
    }

    if (["fig", "url"].includes(item.fileType) && item.href) {
      setSidebarOpen(false);
      return window.open(item.href, "_blank");
    }

    setSidebarOpen(false);
    openWindow(`${item.fileType}${item.kind}`, item);
  };

  const renderList = (items) =>
    items.map((item) => (
      <li
        key={item.id}
        className={clsx(
          item.id === activeLocation.id ? "active" : "not-active",
        )}
        onClick={() => {
          setActiveLocation(item);
          setSidebarOpen(false);
        }}
      >
        <img src={item.icon} className="w-4" alt={item.name} />
        <p className="text-sm font-medium truncate">{item.name}</p>
      </li>
    ));

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />

        <div className="finder-header-actions">
          <button
            type="button"
            className={clsx("sidebar-toggle", sidebarOpen && "open")}
            onClick={toggleSidebar}
            aria-label="Toggle Finder sidebar"
            aria-expanded={sidebarOpen}
          >
            {sidebarOpen ? "×" : "☰"}
          </button>
          <Search className="icon" />
        </div>
      </div>

      <div className="bg-white flex h-full relative">
        <div
          className={clsx(
            "sidebar",
            sidebarOpen ? "sidebar-open" : "sidebar-closed",
          )}
        >
          <div>
            <h3>Favourites</h3>
            <ul>{renderList(Object.values(locations))}</ul>
          </div>
          <div>
            <h3>My Projects</h3>
            <ul>{renderList(locations.work.children)}</ul>
          </div>
        </div>

        <div
          className={clsx("sidebar-backdrop", sidebarOpen && "visible")}
          onClick={() => setSidebarOpen(false)}
        />

        <ul className="content">
          {activeLocation?.children.map((item) => (
            <li
              key={item.id}
              className={item.position}
              onClick={() => openItem(item)}
            >
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className={clsx(
            "sidebar-toggle",
            "floating-toggle",
            sidebarOpen && "open",
          )}
          onClick={toggleSidebar}
          aria-label="Toggle Finder sidebar"
          aria-expanded={sidebarOpen}
        >
          {sidebarOpen ? "×" : "☰"}
        </button>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
