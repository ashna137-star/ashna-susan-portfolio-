import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

/**
 * Reusable section header with eyebrow label, gradient-accented title, and optional subtitle.
 */
export default function SectionHeading({ eyebrow, title, subtitle }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`reveal mb-12 max-w-2xl ${isVisible ? 'reveal-visible' : ''}`}
    >
      <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-500/25 bg-violet-500/10 px-3 py-1 text-xs font-medium uppercase tracking-widest text-violet-300">
        <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
        {eyebrow}
      </div>
      <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-base leading-relaxed text-slate-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}
