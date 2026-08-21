import { useState } from "react";
import { Github, Linkedin, Mail, Phone, Send, ExternalLink } from "lucide-react";
import { toast } from "sonner";
import { contact, profile } from "@/lib/portfolio-data";
import { Reveal, SectionHeading } from "./Reveal";

/**
 * Contact section. The form opens the visitor's mail client with a prefilled
 * message — no backend required. Swap `handleSubmit` for an API call if needed.
 */
export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in every field.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your mail app…");
  };

  const channels = [
    { icon: Mail, label: "Email", value: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, label: "Phone", value: contact.phone, href: `tel:${contact.phone}` },
    { icon: Linkedin, label: "LinkedIn", value: contact.linkedin, href: contact.linkedin },
    { icon: Github, label: "GitHub", value: contact.github, href: contact.github },
  ];

  const field =
    "w-full rounded-xl border border-input bg-surface/70 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 transition-colors duration-300 focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <section id="contact" className="section-shell">
      <SectionHeading
        eyebrow="Contact"
        title="Let's work together"
        description="Open to internships, full-time roles and interesting collaborations."
      />

      <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="grid gap-4">
          <Reveal>
            <div className="glass glass-hover rounded-3xl p-6">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Reach me at</p>
              <ul className="mt-5 space-y-3">
                {channels.map((c) => (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      className="group grid grid-cols-[auto_minmax(0,1fr)] items-center gap-3.5 rounded-2xl border border-border bg-surface/50 px-4 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/45"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-primary/25 bg-primary/10 text-primary">
                        <c.icon className="h-4.5 w-4.5" />
                      </span>
                      <span className="min-w-0">
                        <span className="block font-mono text-[0.68rem] uppercase tracking-wider text-muted-foreground">
                          {c.label}
                        </span>
                        <span className="block truncate text-sm transition-colors group-hover:text-primary">
                          {c.value}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-5">
                {contact.extra.map((l) => (
                  <a
                    key={l.label}
                    href={l.value}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border bg-secondary/50 px-3.5 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/45 hover:text-primary"
                  >
                    {l.label} <ExternalLink className="h-3 w-3" />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <form onSubmit={handleSubmit} className="glass rounded-3xl p-6 md:p-8">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Send a message</p>
            <div className="mt-6 grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm">
                  <span className="text-muted-foreground">Your name</span>
                  <input
                    className={field}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Doe"
                  />
                </label>
                <label className="grid gap-2 text-sm">
                  <span className="text-muted-foreground">Your email</span>
                  <input
                    type="email"
                    className={field}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jane@company.com"
                  />
                </label>
              </div>
              <label className="grid gap-2 text-sm">
                <span className="text-muted-foreground">Message</span>
                <textarea
                  rows={5}
                  className={field}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about the role or project…"
                />
              </label>
              <button
                type="submit"
                className="mt-1 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
                style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
              >
                Send message <Send className="h-4 w-4" />
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Prefer email? Write to{" "}
                <a href={`mailto:${contact.email}`} className="text-primary hover:underline">
                  {contact.email}
                </a>
              </p>
            </div>
          </form>
        </Reveal>
      </div>

      <footer className="mt-16 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-t border-border pt-8 text-sm text-muted-foreground">
        <p className="min-w-0 truncate">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a href="#home" className="shrink-0 transition-colors hover:text-primary">
          Back to top ↑
        </a>
      </footer>
    </section>
  );
}
