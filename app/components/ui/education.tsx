"use client";

import { useEffect, useRef, useState } from "react";

export type EducationItem = {
  id: string;
  institution: string;
  matter: string;
  phase: string;
  period: { from: string; to: string };
  description?: string;
  highlights?: string[];
};

type EducationTimelineProps = { items: EducationItem[] };

export default function Education({ items }: EducationTimelineProps) {
  const listRef = useRef<HTMLOListElement | null>(null);
  const dotRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const [progress, setProgress] = useState(0); // 0-100: how much of the line is filled
  const [activeCount, setActiveCount] = useState(0); // how many dots the line has reached

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const list = listRef.current;
      if (!list) return;

      // The line fills up to the vertical middle of the viewport.
      const anchor = window.innerHeight * 0.5;
      const rect = list.getBoundingClientRect();
      const filled = Math.min(Math.max(anchor - rect.top, 0), rect.height);
      setProgress(rect.height > 0 ? (filled / rect.height) * 100 : 0);

      let count = 0;
      dotRefs.current.forEach((dot) => {
        if (dot && dot.getBoundingClientRect().top + 8 <= anchor) count += 1;
      });
      setActiveCount(count);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items.length]);

  const gradient = `linear-gradient(to bottom, #06b6d4, #10b981)`;

  return (
    <ol ref={listRef} className={`relative list-none pl-10 py-5`}>
      {/* Track: the full line, faint */}
      <span
        aria-hidden="true"
        className="absolute left-3 top-0 h-full w-0.5 -translate-x-1/2 rounded-full"
        style={{ backgroundImage: gradient, opacity: 0.2 }}
      />
      {/* Fill: same gradient, revealed as the page scrolls */}
      <span
        aria-hidden="true"
        className="absolute left-3 top-0 h-full w-0.5 -translate-x-1/2 rounded-full"
        style={{
          backgroundImage: gradient,
          clipPath: `inset(0 0 ${100 - progress}% 0)`,
        }}
      />

      {items.map((item, i) => {
        const reached = i < activeCount;
        const current = reached && i === activeCount - 1;

        return (
          <li
            key={item.id}
            className="relative transition-opacity duration-300 motion-reduce:transition-none rounded-lg mt-8 bg-muted/10 p-5"
            style={{ opacity: reached ? 1 : 0.5 }}
          >
            {/* item point */}
            <span
              ref={(el) => {
                dotRefs.current[i] = el;
              }}
              aria-hidden="true"
              className="absolute -left-9 top-0 h-4 w-4 rounded-full border-2 border-primary dark:bg-zinc-950"
            >
              {current && (
                <span className="absolute -inset-1.5 rounded-full bg-secondary/30" />
              )}
            </span>

            {/* inner content */}
            <div className="h-full flex flex-col gap-2">
              {/* header */}
              <div className="flex flex-row gap-2 justify-between items-center">
                <div className="flex flex-row gap-2 items-center flex-wrap">
                  {/* degree */}
                  <p
                    className={`text-[10px] rounded-sm px-1 py-0.2 ${i % 2 === 0 ? "bg-primary/10 text-primary" : "bg-secondary/10 text-secondary"}`}
                  >
                    {item.matter.toUpperCase()}
                  </p>
                  {/* period */}
                  <p className="text-muted text-xs">// {item.phase}</p>
                </div>

                <p
                  className={`text-xs text-nowrap ${i % 2 === 0 ? "text-primary" : "text-secondary"}`}
                >
                  {new Date(item.period.from).getFullYear() +
                    " - " +
                    new Date(item.period.to).getFullYear()}
                </p>
              </div>

              {/* title */}
              <h2 className="text-2xl text-foreground/80 font-medium">
                {item.institution}
              </h2>

              {/* description */}
              <p className="text-sm text-muted max-w-2xl">{item.description}</p>

              {/* highlights */}
              <div className="flex flex-row gap-2 items-center mt-4">
                {item.highlights?.map((highlight) => (
                  <span
                    key={highlight}
                    className="px-2 py-1 rounded-sm bg-muted/15 text-muted text-[10px]"
                  >
                    {highlight}
                  </span>
                ))}
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
