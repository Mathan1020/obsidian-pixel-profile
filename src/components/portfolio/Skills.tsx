import { Cpu, Star } from "lucide-react";
import { skillBadges, skillGroups } from "@/lib/portfolio-data";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./Reveal";

/** Animated progress bar that fills once scrolled into view. */
function SkillBar({ name, level, shown }: { name: string; level: number; shown: boolean }) {
  return (
    <div>
      <div className="flex items-center justify-between gap-3 text-sm">
        <span className="min-w-0 truncate text-foreground/90">{name}</span>
        <span className="shrink-0 font-mono text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full rounded-full transition-[width] duration-1000 ease-out"
          style={{
            width: shown ? `${level}%` : "0%",
            background: "var(--gradient-primary)",
            boxShadow: "0 0 12px color-mix(in oklab, var(--primary) 60%, transparent)",
          }}
        />
      </div>
    </div>
  );
}

export function Skills() {
  const { ref, shown } = useReveal<HTMLDivElement>(0.2);

  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Skills"
        title="Technical toolkit"
        description="The technologies I work with day to day, and the areas where I'm strongest."
      />

      {/* Intro on the left, skill cards weighted to the right. */}
      <div ref={ref} className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:gap-10">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3.5 py-1.5 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-primary">
            <Cpu className="h-3.5 w-3.5" /> Core stack
          </span>
          <h3 className="mt-5 text-2xl font-semibold leading-snug">
            Strongest in <span className="text-primary">[YOUR TOP SKILL AREA]</span>
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            [SHORT NOTE — where you go deepest and what you're actively levelling up.]
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {skillBadges.map((badge, i) => (
              <span
                key={i}
                className="rounded-lg border border-border bg-surface/70 px-3 py-1.5 text-xs text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45 hover:text-primary"
              >
                {badge}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 100}>
              <div
                className={cn(
                  "glass glass-hover h-full rounded-2xl p-6",
                  group.highlight && "border-primary/35",
                )}
                style={group.highlight ? { boxShadow: "var(--shadow-glow)" } : undefined}
              >
                <div className="flex items-center justify-between gap-3">
                  <h3 className="min-w-0 truncate text-base font-semibold">{group.title}</h3>
                  {group.highlight ? (
                    <Star className="h-4 w-4 shrink-0 text-accent" aria-label="Strongest area" />
                  ) : null}
                </div>
                <div className="mt-5 space-y-4">
                  {group.skills.map((s, i) => (
                    <SkillBar key={i} name={s.name} level={s.level} shown={shown} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
