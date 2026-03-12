"use client";

import { SquareTerminal } from "lucide-react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const menuList = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "Skills",
    path: "#skills",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
  {
    title: "Resume",
    path: "https://drive.google.com/file/d/18S5QuRZfech_JWJxPN1aQkOqh_VYY2mp/view?usp=sharing",
  },
];

function Navbar() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path.startsWith("#") && !path.startsWith("http")) {
      e.preventDefault();
      const target = document.querySelector(path);
      if (target) {
        gsap.to(window, {
          duration: 0.8,
          scrollTo: { y: target, autoKill: false },
          ease: "power3.inOut",
        });
      }
    }
  };

  return (
    <nav className="px-6 md:px-20 py-4 border-b bg-primary/80 border-white/50 fixed w-full top-0 flex justify-between z-50 backdrop-blur-md">
      {/* LOGO */}
      <a
        href="#home"
        onClick={(e) => handleSmoothScroll(e, "#home")}
        className="flex gap-2 items-center text-2xl font-bold tracking-wider uppercase text-white"
      >
        <span className="bg-blue-500 rounded-lg p-2">
          <SquareTerminal size={22} strokeWidth={3.5} />
        </span>
        Diamond
      </a>
      {/* MENU */}
      <ul className="flex items-center gap-9">
        {menuList.map((i, index) => (
          <a
            key={i.title}
            href={i.path}
            onClick={(e) => handleSmoothScroll(e, i.path)}
            target={i.path.startsWith("http") ? "_blank" : undefined}
            rel={i.path.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`${index === menuList.length - 1 && "bg-accent rounded-lg py-3 px-6 hover:text-white shadow-lg shadow-accent/20 hover:bg-accent/90"}  font-medium text-white cursor-pointer hover:text-accent transition-colors duration-150`}
          >
            {i.title}
          </a>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
