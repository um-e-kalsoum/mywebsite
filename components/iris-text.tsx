"use client";

import { Fragment, useEffect, useRef, useState } from "react";

type IrisTextProps = {
  text: string;
  className?: string;
  /** Delay between each letter's reveal, in seconds. Defaults to a value that reveals the whole string in about 1.5s. */
  stagger?: number;
  /** Duration of a single letter's reveal, in seconds */
  duration?: number;
};

export function IrisText({ text, className, stagger, duration = 0.7 }: IrisTextProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [revealed, setRevealed] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const perLetter =
    stagger ?? Math.min(0.055, 1.5 / Math.max(text.length, 1));

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setReducedMotion(true);
      setRevealed(true);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");
  let charIndex = 0;

  return (
    <span ref={ref} className={className} aria-label={text}>
      {words.map((word, w) => {
        const start = charIndex;
        charIndex += word.length + 1;
        return (
          <Fragment key={`${word}-${w}`}>
            <span aria-hidden className="inline-block whitespace-nowrap">
              {Array.from(word).map((char, i) => (
                <span
                  key={i}
                  className="inline-block"
                  style={
                    reducedMotion
                      ? undefined
                      : {
                          clipPath: revealed
                            ? "circle(100% at 50% 50%)"
                            : "circle(0% at 50% 50%)",
                          transition: `clip-path ${duration}s ease-out ${
                            (start + i) * perLetter
                          }s`,
                        }
                  }
                >
                  {char}
                </span>
              ))}
            </span>
            {w < words.length - 1 ? " " : null}
          </Fragment>
        );
      })}
    </span>
  );
}
