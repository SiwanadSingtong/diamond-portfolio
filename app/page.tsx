import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col *:px-6 *:md:px-20 *:lg:px-36 *:xl:px-48 pb-16">
      {/* HERO */}
      <section id="home" className="w-full">
        <Hero />
      </section>
      {/* SKILLS */}
      <section id="skills" className="w-full pt-32">
        <Skills />
      </section>
      {/* MY PROJECTS */}
      <section id="projects" className="w-full pt-32">
        <Projects />
      </section>
      {/* CONTACT */}
      <section id="contact" className="w-full pt-32">
        <Contact />
      </section>
    </div>
  );
}
