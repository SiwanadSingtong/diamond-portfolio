import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col gap-32 *:px-6 *:md:px-20 *:lg:px-36 *:xl:px-48 pb-16">
      {/* HERO */}
      <section id="#" className="w-full">
        <Hero />
      </section>
      {/* SKILLS */}
      <section id="#skills" className="w-full">
        <Skills />
      </section>
      {/* MY PROJECTS */}
      <section id="#projects" className="w-full">
        <Projects />
      </section>
    </div>
  );
}
