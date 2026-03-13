import { Box, Wrench } from "lucide-react";
import React from "react";

function Skills() {
  return (
    <div>
      <div className="border-l-4 pl-4 border-accent flex flex-col gap-2">
        <h2 className="text-3xl font-bold tracking-tight text-white">
          Technical Skills
        </h2>
        <p className="text-white/60">
          Tools and technologies I use to bring ideas to life.
        </p>
      </div>
      {/* SKILLS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 my-6 *:rounded-lg *:border *:border-white/10 *:px-6 *:py-8 *:bg-[#101926] *:flex *:flex-col *:gap-4">
        {/* 1 */}
        <div className="group">
          <div className="bg-accent/10 w-12 h-12 p-3 rounded-md text-accent group-hover:bg-accent group-hover:text-white transition-colors">
            <Box strokeWidth={3} />
          </div>
          {/* DESC */}
          <p className=" text-white font-semibold">HTML5 / Next.js</p>
          <span className="text-white/60 text-xs">
            Component-driven architecture and state management.
          </span>
        </div>
        {/* 2 */}
        <div className="group">
          <div className="bg-accent/10 p-3 w-12 h-12 flex items-center justify-center rounded-md text-accent group-hover:bg-accent group-hover:text-white transition-colors">
            <p className="text-xs font-extrabold">JS/TS</p>
          </div>
          {/* DESC */}
          <p className=" text-white font-semibold">JavaScript / TypeScript</p>
          <span className="text-white/60 text-xs">
            ES6+, asynchronous programming, and DOM logic.
          </span>
        </div>
        {/* 3 */}
        <div className="group">
          <div className="bg-accent/10 p-3 w-12 h-12 flex items-center justify-center rounded-md text-accent group-hover:bg-accent group-hover:text-white transition-colors">
            <p className="text-xs font-extrabold">CSS</p>
          </div>
          {/* DESC */}
          <p className=" text-white font-semibold">
            CSS3 / Tailwind / Material UI / GSAP
          </p>
          <span className="text-white/60 text-xs">
            Responsive layouts, animations, and modern styling.
          </span>
        </div>
        {/* 4 */}
        <div className="group">
          <div className="bg-accent/10 p-3 w-12 h-12 flex items-center justify-center rounded-md text-accent group-hover:bg-accent group-hover:text-white transition-colors">
            <Wrench strokeWidth={3} />
          </div>
          {/* DESC */}
          <p className=" text-white font-semibold">
            Zustand / Axios / React Hook Form
          </p>
          <span className="text-white/60 text-xs">
            State management, API integration, and form handling.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Skills;
