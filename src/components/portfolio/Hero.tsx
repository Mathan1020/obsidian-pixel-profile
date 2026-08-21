import { ArrowDown, FileText, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { contact, profile, stats } from "@/lib/portfolio-data";

/** Full-height hero with a perfectly centered name and entrance animations. */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col items-center justify-center px-5 pt-28 pb-16 text-center"
    >
      <div className="mx-auto w-full max-w-4xl">
        <div
          className="animate-rise mx-auto inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-1.5 backdrop-blur"
          style={{ animationDelay: "80ms" }}
        >
          <span className="relative grid h-2 w-2 place-items-center">
            <span className="absolute h-2 w-2 animate-ping rounded-full bg-primary opacity-75" />
            <span className="h-2 w-2 rounded-full bg-primary" />
          </span>
          <span className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-muted-foreground">
            {profile.availability}
          </span>
        </div>

        <h1
          className="animate-rise mx-auto mt-8 text-center text-[clamp(2.5rem,9vw,5.5rem)] font-bold leading-[1.05]"
          style={{ animationDelay: "160ms" }}
        >
          <span className="text-gradient">{profile.name}</span>
        </h1>

        <p
          className="animate-rise mx-auto mt-5 max-w-2xl text-balance text-lg text-muted-foreground sm:text-xl"
          style={{ animationDelay: "260ms" }}
        >
          {profile.tagline}
        </p>

        <div
          className="animate-rise mt-5 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
          style={{ animationDelay: "320ms" }}
        >
          <span className="text-primary">{profile.role}</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5" /> {profile.location}
          </span>
        </div>

        <div
          className="animate-rise mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
          style={{ animationDelay: "400ms" }}
        >
          <a
            href="#projects"
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110 active:scale-[0.98] sm:w-auto"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
          >
            View my work
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </a>
          <a
            href={profile.resumeUrl}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-surface/60 px-7 py-3.5 text-sm font-semibold backdrop-blur transition-all duration-300 hover:border-primary/50 hover:text-primary active:scale-[0.98] sm:w-auto"
          >
            <FileText className="h-4 w-4" /> Résumé
          </a>
        </div>

        <div
          className="animate-rise mt-8 flex items-center justify-center gap-3"
          style={{ animationDelay: "480ms" }}
        >
          {[
            { href: `mailto:${contact.email}`, icon: Mail, label: "Email" },
            { href: contact.github, icon: Github, label: "GitHub" },
            { href: contact.linkedin, icon: Linkedin, label: "LinkedIn" },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="grid h-11 w-11 place-items-center rounded-full border border-border bg-surface/60 text-muted-foreground backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:text-primary"
            >
              <Icon className="h-4.5 w-4.5" />
            </a>
          ))}
        </div>

        <dl
          className="animate-rise mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4"
          style={{ animationDelay: "560ms" }}
        >
          {stats.map((s) => (
            <div key={s.label} className="glass glass-hover rounded-2xl px-4 py-5">
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-2xl font-bold text-primary">{s.value}</dd>
              <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
