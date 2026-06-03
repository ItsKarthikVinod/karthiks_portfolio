import { techStack } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import { Check, Flag } from "lucide-react";
import React from "react";
import { WindowControls } from "#components";

const Terminal = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="terminal" />
        <h2>Tech Stack</h2>
      </div>
      <div className="techstack">
        <div className="terminal-intro">
          <p className="terminal-command">
            <span className="font-bold">@karthik %</span> show tech stack
          </p>
          <p className="terminal-subtitle">
            A quick overview of the technologies powering this portfolio.
          </p>
        </div>

        <div className="label">
          <p className="w-32">Category</p>
          <p>Technologies</p>
        </div>

        <ul className="content">
          {techStack.map(({ category, items }) => (
            <li key={category} className="stack-row">
              <div className="stack-heading">
                <Check className="check" size={20} />
                <h3>{category}</h3>
              </div>
              <div className="stack-items">
                {items.map((item, i) => (
                  <span key={i} className="stack-tag">
                    {item}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ul>

        <div className="footnote">
          <p>
            <Check size={20} /> 5 of 5 stacks loaded successfully (100%)
          </p>
          <p>
            <Flag size={15} fill="white" className="text-gray-100" />
            Render time: 6ms
          </p>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
