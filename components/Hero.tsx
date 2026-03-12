import React from "react";

function Hero() {
  return (
    <div className="h-[calc(70vh)] flex flex-row items-end relative">
      {/* LEFT */}
      <div className="flex flex-col gap-5">
        <p className="text-accent border rounded-full px-2 py-1 text-xs font-semibold w-fit uppercase bg-accent/10">
          Available for hire
        </p>
        <h2 className="text-6xl lg:text-7xl text-white font-extrabold leading-16 tracking-tight">
          Front-end <br /> Developer{" "}
          <span className="text-lg text-accent">by</span>
          <br />
          <span className="text-accent">Siwanad Singtong</span>
        </h2>
        <h3 className="leading-relaxed text-lg text-white/60">
          Building high-performance, beautiful web experiences with a focus on
          modern UI/UX principles. Professional code, creative design, and
          seamless interaction.
        </h3>
        <a
          href="#projects"
          className="bg-accent w-fit p-4 rounded-lg text-white font-extrabold shadow-lg shadow-accent/30 hover:scale-105 transition-all duration-200"
        >
          View My Work
        </a>
      </div>
      {/* RIGHT */}
      <div></div>

      {/* STYLE */}
      <div className="w-64 h-64 bg-accent/5 absolute blur-3xl right-36 bottom-5" />
      <div className="w-64 h-64 bg-accent/5 absolute blur-3xl left-36 top-5" />
    </div>
  );
}

export default Hero;
