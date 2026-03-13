"use client";

import { SquareTerminal, Menu, X } from "lucide-react";
import gsap from "gsap";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import { useState } from "react";

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
  const [isOpen, setIsOpen] = useState(false);

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
    setIsOpen(false);
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

      {/* DESKTOP MENU */}
      <ul className="hidden lg:flex items-center gap-9">
        {menuList.map((i, index) => (
          <a
            key={i.title}
            href={i.path}
            onClick={(e) => handleSmoothScroll(e, i.path)}
            target={i.path.startsWith("http") ? "_blank" : undefined}
            rel={i.path.startsWith("http") ? "noopener noreferrer" : undefined}
            className={`${
              index === menuList.length - 1 &&
              "bg-accent rounded-lg py-3 px-6 hover:text-white shadow-lg shadow-accent/20 hover:bg-accent/90"
            } font-medium text-white cursor-pointer hover:text-accent transition-colors duration-150`}
          >
            {i.title}
          </a>
        ))}
      </ul>

      {/* HAMBURGER BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden flex items-center text-white hover:text-accent transition-colors"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-primary/95 border-b border-white/50 backdrop-blur-md lg:hidden">
          <ul className="flex flex-col gap-4 px-6 py-6">
            {menuList.map((i, index) => (
              <a
                key={i.title}
                href={i.path}
                onClick={(e) => handleSmoothScroll(e, i.path)}
                target={i.path.startsWith("http") ? "_blank" : undefined}
                rel={i.path.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`${
                  index === menuList.length - 1 &&
                  "bg-accent rounded-lg py-3 px-6 hover:text-white shadow-lg shadow-accent/20 hover:bg-accent/90 text-center"
                } font-medium text-white cursor-pointer hover:text-accent transition-colors duration-150`}
              >
                {i.title}
              </a>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
