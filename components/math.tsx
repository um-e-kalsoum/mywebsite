"use client";

import { useEffect, useRef, useState } from "react";

/* Label and value get the same fixed width so the track sits on the figure's center line. */
function Slider({ label, value, min, max, set }: { label: string; value: number; min: number; max: number; set: (n: number) => void }) {
  return (
    <label className="flex items-center gap-3 text-sm text-muted">
      <span className="w-6 text-right">{label}</span>
      <input type="range" min={min} max={max} value={value} onChange={(e) => set(+e.target.value)} className="w-40 accent-accent" />
      <span className="w-6 font-mono text-foreground">{value}</span>
    </label>
  );
}

/* Hero: polar rose r = cos(kθ). Odd k gives k petals, even k gives 2k. Inner layer is the same rose scaled down, so petals nest and the count stays k or 2k. */
export function BloomRose({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const [k, setK] = useState(5);

  useEffect(() => {
    const c = ref.current!;
    const g = c.getContext("2d")!;
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t0 = performance.now();
    let id = 0;
    const draw = (now: number) => {
      const st = getComputedStyle(document.documentElement);
      const acc = st.getPropertyValue("--accent").trim();
      const acc2 = st.getPropertyValue("--accent-2").trim();
      const d = devicePixelRatio || 1;
      const w = (c.width = c.clientWidth * d);
      const h = (c.height = c.clientHeight * d);
      const R = Math.min(w, h) * 0.42 * (1 + 0.015 * Math.sin(now / 900));
      const rot = still ? 0 : now / 12000;
      const tm = (still ? 1 : Math.min(1, (now - t0) / 3000)) * 2 * Math.PI;
      const layers: [number, number, string, number, number][] = [
        [1, 0, acc, 0.18, 0.95],
        [0.62, 0, acc2, 0.16, 0.9],
      ];
      for (const [scale, off, color, fillA, strokeA] of layers) {
        g.beginPath();
        for (let th = 0; th <= tm; th += 0.02) {
          const r = Math.cos(k * th) * R * scale;
          const x = w / 2 + r * Math.cos(th + rot + off);
          const y = h / 2 + r * Math.sin(th + rot + off);
          th ? g.lineTo(x, y) : g.moveTo(x, y);
        }
        g.globalAlpha = fillA;
        g.fillStyle = color;
        g.fill();
        g.globalAlpha = strokeA;
        g.strokeStyle = color;
        g.lineWidth = 1.8 * d;
        g.stroke();
      }
      g.globalAlpha = 1;
      if (!still) id = requestAnimationFrame(draw);
    };
    id = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(id);
  }, [k]);

  const petals = k % 2 ? k : 2 * k;
  const label = `${petals} ${petals === 1 ? "petal" : "petals"}`;

  return (
    <figure className={`${className} flex flex-col items-center`}>
      <canvas ref={ref} className="aspect-[4/3] w-full" role="img" aria-label={`Polar rose with ${label}`} />
      <Slider label="k" value={k} min={1} max={6} set={setK} />
      <figcaption className="mt-2 flex flex-wrap items-center justify-center gap-x-2 text-center text-xs text-muted">
        <span>r = cos({k}θ)</span>
        <span aria-hidden>·</span>
        <span>{label}</span>
        <span aria-hidden>·</span>
        <span className="inline-flex items-center gap-1">
          area =
          <span className="inline-flex flex-col items-center leading-none" aria-label={k % 2 ? "pi over 4" : "pi over 2"}>
            <span className="border-b border-current px-0.5 pb-0.5">π</span>
            <span className="pt-0.5">{k % 2 ? 4 : 2}</span>
          </span>
        </span>
      </figcaption>
    </figure>
  );
}
