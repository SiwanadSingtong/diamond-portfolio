import { ArrowRight, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Overwatch Hero Information",
    link: "https://github.com/SiwanadSingtong/overwatch-board",
    desc: "A high-performance, responsive web application for exploring Overwatch 2 heroes data. Built with Next.js, Tailwind CSS, and JavaScript, fetching real-time data from the OverFast API.",
    img: "/ow.png",
  },
  {
    id: 2,
    title: "Youtube Clone",
    link: "https://github.com/SiwanadSingtong/youtube-clone",
    desc: "A simple functional YouTube clone built with React JS, Tailwind CSS",
    img: "/ytclone.png",
  },
  {
    id: 3,
    title: "GSAP",
    link: "https://github.com/SiwanadSingtong/gsap-tutorial",
    desc: "A comprehensive tutorial project demonstrating advanced animation techniques using GSAP. Showcasing timeline animations, scroll-triggered effects, and interactive motion design.",
    img: "/gsap.png",
  },
  {
    id: 4,
    title: "Todo List",
    link: "https://github.com/SiwanadSingtong/todo-tt",
    desc: "A comprehensive tutorial project demonstrating advanced animation techniques using GSAP. Showcasing timeline animations, scroll-triggered effects, and interactive motion design.",
    img: "/todo.png",
  },
];

function Projects() {
  return (
    <div>
      <div className="border-l-4 pl-4 border-accent flex justify-between items-center">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-bold tracking-tight text-white">
            Featured Projects
          </h2>
          <p className="text-white/60">
            A selection of my most recent work and experiments.
          </p>
        </div>
        <Link
          href="https://github.com/SiwanadSingtong"
          target="_blank"
          className="text-accent flex font-semibold gap-2 group"
        >
          All Projects <ArrowRight className="group-hover:translate-x-1 transition-all duration-200" />
        </Link>
      </div>
      {/* PROJECTS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">
        {projects.map((p) => (
          <Link
            href={p.link}
            target="_blank"
            key={p.id}
            className="border rounded-lg border-white/10 bg-[#0f172a] group overflow-hidden"
          >
            <div className="w-full h-48 relative">
              <Image
                alt={p.title}
                src={p.img}
                fill
                className="object-cover object-top rounded-t-lg group-hover:scale-110 transition-transform duration-500 brightness-80"
              />
              <Eye
                size={32}
                strokeWidth={3}
                className="z-20 absolute text-white top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 hidden group-hover:block transition-all duration-300"
              />
            </div>
            <div className="p-6 flex flex-col gap-4">
              <p className="text-white text-lg font-semibold">{p.title}</p>
              <span className="text-white/50 text-xs">{p.desc}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Projects;
