import Image from "next/image";
import Link from "next/link";
import React from "react";

import astroImg from "../public/assets/projects/astro.png";
import mediumImg from "../public/assets/projects/medium.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-1 py-6 gap-8">
          <ProjectItem
            title="Astro Crash Course"
            backgroundImg={astroImg}
            projectUrl="/astro"
            tech="Built with Astro"
          />
        </div>
        <div className="grid md:grid-cols-1 gap-8">
          <ProjectItem
            title="Medium Blog Clone"
            backgroundImg={mediumImg}
            projectUrl="/medium"
            tech="Built with Next.JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
