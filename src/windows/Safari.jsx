import { WindowControls } from "#components";
import WindowWrapper from "#hoc/WindowWrapper";
import {
  ChevronLeft,
  ChevronRight,
  Copy,
  MoveRight,
  PanelLeft,
  Plus,
  Search,
  Share,
  ShieldHalf,
} from "lucide-react";
import React, {useState} from "react";
import { Achievements } from "#constants";

const Safari = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const certificatesPerPage = 3;
  const startIndex = currentPage * certificatesPerPage;
  const endIndex = startIndex + certificatesPerPage;
  const displayedAchievements = Achievements.slice(startIndex, endIndex);

  const isMobile = window.innerWidth <= 768;
  return (
    <>
      <div id="window-header">
        <WindowControls target="safari" />
        <PanelLeft className={isMobile ? "hidden" : "ml-10 icon"} />
        <div className={isMobile ? "hidden" : "flex items-center gap-1 ml-5"}>
          <ChevronLeft className="icon" />
          <ChevronRight className="icon " />
        </div>
        <div className={isMobile ? "flex" : "flex-1 flex-center gap-3"}>
          <ShieldHalf className="icon shield" />
          <div className="search">
            <Search className="icon" />
            <input
              type="text"
              placeholder="https://karthikvinod.netlify.app/certifications"
              className="flex-1"
            />
          </div>
        </div>
        <div className="flex items-center gap-5">
          <Share className="icon" />
          <Plus className="icon plus" />
          <Copy className="icon copy" />
        </div>
      </div>
      <div className="blog">
        <h2
          className={
            isMobile
              ? "text-center text-3xl font-bold text-amber-200 my-10"
              : "text-xl font-bold text-amber-200 mb-10"
          }
        >
          Achievements
        </h2>
        <div className={isMobile ? "" : "space-y-8"}>
          {displayedAchievements.map(
            ({ id, image, title, authority, link }) => (
              <div
                key={id}
                className={isMobile ? "" : "grid grid-cols-6 space-x-5"}
              >
                <div
                  className={
                    isMobile
                      ? "rounded-md"
                      : "rounded-md object-contain col-span-2"
                  }
                >
                  <img src={image} alt={title} />
                </div>
                <div className="contents">
                  <p className={isMobile ? "text-sm text-gray-300" : ""}>
                    {authority}
                  </p>
                  <h3>{title}</h3>
                  <a href={image} target="_blank" rel="noopener noreferrer">
                    Check Out the Certificate{" "}
                    <MoveRight className="icon-hover" />
                  </a>
                </div>
              </div>
            ),
          )}
          <div className="flex justify-around items-center mt-8 text-emerald-200 ">
            <button
              onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="border border-emerald-200 rounded-2xl p-2 cursor-pointer"
            >
              {"<"} Previous
            </button>
            <span className="underline">
              Page {currentPage + 1} of{" "}
              {Math.ceil(Achievements.length / certificatesPerPage)}
            </span>
            <button
              onClick={() =>
                setCurrentPage((p) =>
                  Math.min(
                    Math.ceil(Achievements.length / certificatesPerPage) - 1,
                    p + 1,
                  ),
                )
              }
              disabled={
                currentPage >=
                Math.ceil(Achievements.length / certificatesPerPage) - 1
              }
              className="border border-emerald-200 rounded-2xl p-2 cursor-pointer"
            >
              Next {">"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const SafariWindow = WindowWrapper(Safari, "safari");

export default SafariWindow;
