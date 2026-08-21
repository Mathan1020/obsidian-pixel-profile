import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, profile } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";

/** Sticky glass navigation with scroll-spy and a mobile sheet menu. */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => Boolean(el));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { threshold: [0.25, 0.5], rootMargin: "-20% 0px -50% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const initials = profile.name
    .replace(/[[\]]/g, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <nav className="mx-auto w-[min(72rem,calc(100%-1.5rem))]">
        <div
          className={cn(
            "grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-500 md:px-5",
            scrolled ? "glass" : "border border-transparent",
          )}
        >
          <a
            href="#home"
            className="flex min-w-0 items-center gap-3"
            aria-label="Back to top"
          >
            <span
              className="grid h-9 w-9 shrink-0 place-items-center rounded-xl font-display text-sm font-bold text-primary-foreground"
              style={{ background: "var(--gradient-primary)" }}
            >
              {initials || "•"}
            </span>
            <span className="truncate font-display text-sm font-semibold tracking-tight">
              {profile.name}
            </span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={cn(
                  "relative rounded-full px-3.5 py-2 text-sm transition-colors",
                  active === link.id
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute inset-x-3 -bottom-0.5 h-px origin-left scale-x-0 bg-primary transition-transform duration-300",
                    active === link.id && "scale-x-100",
                  )}
                />
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 rounded-full px-4 py-2 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
            >
              Hire me
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle navigation"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-border bg-surface text-foreground transition-colors hover:border-primary/40 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile menu */}
        <div
          className={cn(
            "glass mt-2 grid overflow-hidden rounded-2xl transition-all duration-400 lg:hidden",
            open ? "max-h-96 opacity-100" : "pointer-events-none max-h-0 border-0 opacity-0",
          )}
        >
          <div className="flex flex-col p-2">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-xl px-4 py-3 text-sm transition-colors",
                  active === link.id
                    ? "bg-secondary text-primary"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground",
                )}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
