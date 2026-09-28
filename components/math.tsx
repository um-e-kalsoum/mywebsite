"use client";

import { useEffect, useRef, useState } from "react";

function Slider({ label, value, min, max, set }: { label: string; value: number; min: number; max: number; set: (n: number) => void }) {
  return (
    <label className="flex items-center gap-3 text-sm text-muted">
      {label}
      <input type="range" min={min} max={max} value={value} onChange={(e) => set(+e.target.value)} className="w-40 accent-accent" />
      <span className="w-8 font-mono text-foreground">{value}</span>
    </label>
  );
}

const W = 400, H = 220;
const cap = "mt-2 font-mono text-xs text-muted";

/* Calc 2: midpoint Riemann sum of f(x) = 2 + sin x on [0, 6] */
function Riemann() {
  const [n, setN] = useState(8);
  const f = (x: number) => 2 + Math.sin(x);
  const b = 6, dx = b / n;
  const X = (x: number) => 20 + (x / b) * (W - 40);
  const Y = (y: number) => H - 20 - y * 50;
  let sum = 0;
  const bars = Array.from({ length: n }, (_, i) => {
    const v = f((i + 0.5) * dx);
    sum += v * dx;
    return <rect key={i} x={X(i * dx)} y={Y(v)} width={X(dx) - 20} height={v * 50} className="fill-accent/20 stroke-accent" strokeWidth=".8" />;
  });
  const curve = Array.from({ length: 121 }, (_, i) => `${X((i / 120) * b)},${Y(f((i / 120) * b))}`).join(" ");
  return (
    <figure>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Riemann sum">
        {bars}
        <polyline points={curve} fill="none" className="stroke-foreground" strokeWidth="2" />
        <line x1="20" x2={W - 20} y1={Y(0)} y2={Y(0)} className="stroke-muted" />
      </svg>
      <Slider label="rectangles" value={n} min={1} max={60} set={setN} />
      <figcaption className={cap}>
        sum = <span className="text-accent">{sum.toFixed(4)}</span> · ∫₀⁶ (2 + sin x) dx = {(12 + 1 - Math.cos(6)).toFixed(4)}
      </figcaption>
    </figure>
  );
}

/* Calc 2: Taylor polynomials of sin x about 0 */
function Taylor() {
  const [k, setK] = useState(3);
  const T = (x: number) => {
    let s = 0, term = x;
    for (let i = 0; i < k; i++) { s += term; term *= (-x * x) / ((2 * i + 2) * (2 * i + 3)); }
    return s;
  };
  const X = (x: number) => W / 2 + (x / (2 * Math.PI)) * (W / 2 - 10);
  const Y = (y: number) => H / 2 - y * 45;
  const path = (fn: (x: number) => number) =>
    Array.from({ length: 201 }, (_, i) => {
      const x = -2 * Math.PI + (i / 200) * 4 * Math.PI, y = fn(x);
      return Math.abs(y) < 2.4 ? `${X(x)},${Y(y)}` : null;
    }).filter(Boolean).join(" ");
  return (
    <figure>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label="Taylor approximation of sine">
        <line x1="0" x2={W} y1={H / 2} y2={H / 2} className="stroke-muted" strokeOpacity=".5" />
        <polyline points={path(Math.sin)} fill="none" className="stroke-foreground" strokeWidth="2" />
        <polyline points={path(T)} fill="none" className="stroke-accent" strokeWidth="2" />
      </svg>
      <Slider label="terms" value={k} min={1} max={9} set={setK} />
      <figcaption className={cap}>sin x ≈ Σ (−1)ⁿ x²ⁿ⁺¹ / (2n+1)! · degree {2 * k - 1}</figcaption>
    </figure>
  );
}

export function MathLab() {
  return (
    <div className="grid gap-10 md:grid-cols-2">
      <div><h3 className="mb-3 font-medium">Riemann sums</h3><Riemann /></div>
      <div><h3 className="mb-3 font-medium">Taylor series</h3><Taylor /></div>
    </div>
  );
}

const RESULTS: [string, React.ReactNode, string][] = [
  ["Euler's identity", <>e<sup>iπ</sup> + 1 = 0</>, "Five constants, one line."],
  ["Fermat's little theorem", <>a<sup>p−1</sup> ≡ 1 (mod p)</>, "The engine under RSA."],
  ["Stokes' theorem", <>∮<sub>∂S</sub> F·dr = ∬<sub>S</sub> (∇×F)·dS</>, "Calc 3's grand finale."],
  ["Lagrange multipliers", <>∇f = λ∇g</>, "Optimizing on a constraint."],
  ["Basel problem", <>Σ 1/n² = π²/6</>, "A series that surprised Euler."],
  ["Cauchy–Schwarz", <>|⟨u, v⟩| ≤ ‖u‖ ‖v‖</>, "Behind half of analysis."],
];

export function Results() {
  return (
    <div className="mt-14">
      <h3 className="mb-4 font-medium">Results I keep coming back to</h3>
      <dl className="grid gap-x-8 gap-y-5 sm:grid-cols-2">
        {RESULTS.map(([name, formula, note]) => (
          <div key={name}>
            <dt className="text-sm text-muted">{name}</dt>
            <dd className="mt-0.5 font-mono text-sm">{formula}</dd>
            <dd className="text-xs text-muted">{note}</dd>
          </div>
        ))}
      </dl>
    </div>
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
