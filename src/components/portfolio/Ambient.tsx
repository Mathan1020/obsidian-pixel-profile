import { useEffect, useRef, useState } from "react";

/**
 * Ambient background: fixed gradient blobs, a fine grid, and a lightweight
 * canvas particle field. Purely decorative and pointer-events-none.
 */
export function Ambient() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type P = { x: number; y: number; vx: number; vy: number; r: number; a: number };
    let particles: P[] = [];

    const seed = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.min(70, Math.round((width * height) / 26000));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.6 + 0.5,
        a: Math.random() * 0.4 + 0.15,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;
        ctx.beginPath();
        ctx.fillStyle = `rgba(150, 230, 235, ${p.a})`;
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      frame = requestAnimationFrame(draw);
    };

    seed();
    draw();
    window.addEventListener("resize", seed);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", seed);
    };
  }, []);

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="glow-blob float-slow -left-32 -top-40 h-[26rem] w-[26rem]"
        style={{ background: "var(--primary)" }}
      />
      <div
        className="glow-blob right-[-10rem] top-1/3 h-[22rem] w-[22rem]"
        style={{ background: "var(--accent)", opacity: 0.18 }}
      />
      <div
        className="glow-blob bottom-[-12rem] left-1/3 h-[24rem] w-[24rem]"
        style={{ background: "var(--primary-glow)", opacity: 0.2 }}
      />
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse at 50% 0%, black 40%, transparent 78%)",
        }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
    </div>
  );
}

/** Soft glow that follows the cursor (desktop pointers only). */
export function CursorGlow() {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const onMove = (e: PointerEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  if (!pos) return null;

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed -z-10 h-[26rem] w-[26rem] rounded-full opacity-25 blur-[100px] transition-transform duration-300 ease-out"
      style={{
        background: "var(--primary)",
        transform: `translate(${pos.x - 208}px, ${pos.y - 208}px)`,
      }}
    />
  );
}
