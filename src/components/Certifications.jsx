import React from 'react';
import { Award, Medal, Sparkles } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeading from './SectionHeading';

const CERT_ICONS = {
  'nptel-python': Award,
  'nasa-space-apps': Sparkles,
  'ieee-yess': Medal,
};

/**
 * Certifications and Achievements grid.
 */
export default function Certifications() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="certifications" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Certifications & Achievements"
          title="Verified credentials & milestones"
          subtitle="Academic certifications, international hackathon recognition, and engineering community summits."
        />

        <div
          ref={ref}
          className={`reveal grid gap-6 md:grid-cols-3 ${
            isVisible ? 'reveal-visible' : ''
          }`}
        >
          {CERTIFICATIONS.map((item) => {
            const Icon = CERT_ICONS[item.id] || Award;
            return (
              <article
                key={item.id}
                className="group glass-card flex flex-col justify-between p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-violet-300 ring-1 ring-white/15 transition-transform duration-300 group-hover:scale-105 group-hover:text-cyan-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-violet-400/30 bg-violet-500/15 px-3 py-1 font-mono text-[11px] font-semibold text-violet-200">
                      {item.badge}
                    </span>
                  </div>

                  <p className="mt-5 text-[11px] font-semibold uppercase tracking-wider text-cyan-300">
                    {item.category}
                  </p>
                  <h3 className="mt-1.5 font-display text-lg font-bold leading-snug text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/10 pt-3.5 text-xs font-medium text-slate-400">
                  Issued / Hosted by{' '}
                  <span className="text-slate-200">{item.issuer}</span>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
