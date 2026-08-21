import { Code2, Rocket, Sparkles, Target } from "lucide-react";
import { profile } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

const pillars = [
  { icon: Code2, title: "Clean engineering", copy: "[YOUR STRENGTH — readable, tested, maintainable code.]" },
  { icon: Sparkles, title: "Product taste", copy: "[YOUR STRENGTH — interfaces that feel considered.]" },
  { icon: Target, title: "Problem solving", copy: "[YOUR STRENGTH — breaking hard problems down.]" },
  { icon: Rocket, title: "Career goal", copy: "[YOUR GOAL — the role and impact you're aiming for.]" },
];

export function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading
        eyebrow="About me"
        title="A short introduction"
        description="Who I am, what I care about, and where I'm heading next."
      />

      <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal className="glass glass-hover rounded-3xl p-7 md:p-9">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Profile</p>
          <div className="mt-5 space-y-3.5 text-[1.02rem] leading-relaxed text-foreground/85">
            {profile.about.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
          <div className="mt-7 flex flex-wrap gap-2">
            {["[YOUR INTEREST]", "[YOUR INTEREST]", "[YOUR INTEREST]"].map((tag, i) => (
              <span
                key={i}
                className="rounded-full border border-border bg-secondary/60 px-3.5 py-1.5 font-mono text-[0.7rem] uppercase tracking-wider text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 90}>
              <div className="glass glass-hover h-full rounded-2xl p-5">
                <span className="grid h-10 w-10 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-semibold">{p.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
