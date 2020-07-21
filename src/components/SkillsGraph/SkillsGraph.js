import React from "react";
import "./styles.scss";
import cn from "classnames";

const graphValues = [
  { label: "HTML", width: "5", level: "0", colour: "shade-0" },
  { label: "CSS", width: "4", level: "1", colour: "shade-1" },
  { label: "SASS", width: "2", level: "2", colour: "shade-2" },
  { label: "JS", width: "4", level: "3", colour: "shade-3" },
  { label: "React", width: "4", level: "4", colour: "shade-4" },
  { label: "Java", width: "2", level: "5", colour: "shade-5" },
  { label: "Python", width: "1", level: "6", colour: "shade-6" },
  { label: "SQL", width: "2", level: "7", colour: "shade-7" },
  { label: "Git", width: "3", level: "8", colour: "shade-8" },
  { label: "Agile", width: "3", level: "9", colour: "shade-9" },
  { label: "Design", width: "2", level: "10", colour: "shade-10" },
];

const SkillsGraph = () => {
  return (
    <div className="skillsgraph">
      <h2>Areas of expertise</h2>
      <div className="graph-box">
        {graphValues.map(({ label, width, level, colour }, i) => (
          <div className="graph" key={i}>
            <div
              className={cn(
                "graph-bar",
                `width-${width}`,
                `level-${level}`,
                `color-${colour}`
              )}
            ></div>
            <div className={cn("graph-label", `level-${level}`)}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsGraph;
