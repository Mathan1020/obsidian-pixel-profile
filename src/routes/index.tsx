import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Ambient, CursorGlow } from "@/components/portfolio/Ambient";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Education } from "@/components/portfolio/Education";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "[YOUR NAME] — Developer Portfolio" },
      {
        name: "description",
        content:
          "Premium dark portfolio of [YOUR NAME] — projects, skills, experience and education. Available for internships and full-time roles.",
      },
      { property: "og:title", content: "[YOUR NAME] — Developer Portfolio" },
      {
        property: "og:description",
        content:
          "Explore the projects, skills and experience of [YOUR NAME]. Get in touch for opportunities.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

/** Single-page portfolio: all sections stacked, anchored by nav links. */
function Portfolio() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <Ambient />
      <CursorGlow />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
      <Toaster />
    </main>
  );
}
