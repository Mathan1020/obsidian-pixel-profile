import { GraduationCap } from "lucide-react";
import { education } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

/** Vertical timeline of qualifications. */
export function Education() {
  return (
    <section id="education" className="section-shell">
      <SectionHeading
        eyebrow="Education"
        title="Academic background"
        description="Where I studied and what I focused on."
      />

      <div className="relative mx-auto max-w-3xl">
        <span
          aria-hidden
          className="absolute left-[19px] top-2 h-[calc(100%-1rem)] w-px md:left-1/2"
          style={{
            background:
              "linear-gradient(to bottom, transparent, color-mix(in oklab, var(--primary) 45%, transparent), transparent)",
          }}
        />
        <div className="space-y-5">
          {education.map((item, i) => (
            <Reveal key={i} delay={i * 110}>
              <div className="relative grid grid-cols-[auto_minmax(0,1fr)] gap-4 md:grid-cols-1">
                <span className="relative z-10 mt-5 grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary/30 bg-surface text-primary md:absolute md:left-1/2 md:mt-6 md:-translate-x-1/2">
                  <GraduationCap className="h-4.5 w-4.5" />
                </span>
                <div
                  className={
                    i % 2 === 0
                      ? "glass glass-hover rounded-2xl p-6 md:mr-[calc(50%+2rem)]"
                      : "glass glass-hover rounded-2xl p-6 md:ml-[calc(50%+2rem)]"
                  }
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-border bg-secondary/60 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-wider text-muted-foreground">
                      {item.duration}
                    </span>
                    <span className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-wider text-accent">
                      {item.marks}
                    </span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">{item.degree}</h3>
                  <p className="mt-1 text-sm text-primary">{item.institution}</p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
