import { Briefcase, CheckCircle2, Trophy } from "lucide-react";
import { experience } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

/** Experience timeline with responsibilities and achievements. */
export function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        eyebrow="Experience"
        title="Where I've worked"
        description="Internships, technical roles and the results I delivered."
      />

      <div className="relative mx-auto max-w-4xl space-y-5">
        {experience.map((job, i) => (
          <Reveal key={i} delay={i * 110}>
            <article className="glass glass-hover rounded-3xl p-6 md:p-8">
              <header className="grid grid-cols-[auto_minmax(0,1fr)] items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-primary/25 bg-primary/10 text-primary">
                  <Briefcase className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-mono text-[0.68rem] uppercase tracking-wider text-primary">
                      {job.type}
                    </span>
                    <span className="font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground">
                      {job.duration}
                    </span>
                  </div>
                  <h3 className="mt-2.5 text-lg font-semibold">{job.role}</h3>
                  <p className="text-sm text-muted-foreground">{job.company}</p>
                </div>
              </header>

              <div className="mt-6 grid gap-6 md:grid-cols-2">
                <div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.25em] text-muted-foreground">
                    Responsibilities
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {job.responsibilities.map((r, ri) => (
                      <li key={ri} className="flex gap-2.5 text-sm text-foreground/85">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-[0.68rem] uppercase tracking-[0.25em] text-muted-foreground">
                    Achievements
                  </p>
                  <ul className="mt-3 space-y-2.5">
                    {job.achievements.map((a, ai) => (
                      <li key={ai} className="flex gap-2.5 text-sm text-foreground/85">
                        <Trophy className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 border-t border-border pt-5">
                {job.stack.map((t, ti) => (
                  <span
                    key={ti}
                    className="rounded-lg border border-border bg-secondary/50 px-2.5 py-1 font-mono text-[0.7rem] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
