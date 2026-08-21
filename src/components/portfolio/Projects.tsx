import { ArrowUpRight, Github, Sparkle } from "lucide-react";
import { projects } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./Reveal";

/** Interactive project cards with a hover spotlight effect. */
export function Projects() {
  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="Academic, personal and technical projects — with the stack and the ideas behind them."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal
            key={i}
            delay={i * 90}
            className={cn(project.featured && "md:col-span-2")}
          >
            <article
              className="group glass glass-hover relative h-full overflow-hidden rounded-3xl p-6 md:p-7"
              onMouseMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
              }}
            >
              {/* cursor spotlight */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(320px circle at var(--mx) var(--my), color-mix(in oklab, var(--primary) 14%, transparent), transparent 70%)",
                }}
              />

              <div className="relative">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-wider text-muted-foreground">
                    {project.category}
                  </span>
                  {project.featured ? (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-wider text-accent">
                      <Sparkle className="h-3 w-3" /> Featured
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-4 text-xl font-semibold transition-colors duration-300 group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {project.features.map((f, fi) => (
                    <li key={fi} className="flex gap-2 text-sm text-foreground/80">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((t, ti) => (
                    <span
                      key={ti}
                      className="rounded-lg border border-border bg-surface/70 px-2.5 py-1 font-mono text-[0.7rem] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-5">
                  <a
                    href={project.repo}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-2 text-sm transition-all duration-300 hover:border-primary/45 hover:text-primary"
                  >
                    <Github className="h-4 w-4" /> Source
                  </a>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110"
                    style={{ background: "var(--gradient-primary)" }}
                  >
                    Live demo
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
