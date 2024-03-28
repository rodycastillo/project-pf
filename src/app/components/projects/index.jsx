import React from "react";
import ProjectLayout from "./ProjectLayout";

export const ProjectList = ({ projects }) => {
  return (
    <div className="w-full max-w-4xl py-16 space-y-6 flex flex-col items-center">
      {projects.map((project, index) => {
        return <ProjectLayout key={index} {...project} />;
      })}
    </div>
  );
};
