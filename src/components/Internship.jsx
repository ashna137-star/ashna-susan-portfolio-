import React from 'react';
import { Briefcase, Calendar, Globe } from 'lucide-react';
import { INTERNSHIP } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeading from './SectionHeading';

/**
 * Internship section highlighting industry training experience.
 */
export default function Internship() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="internship" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Internship"
          title="Practical industry experience"
          subtitle="Hands-on web development exposure through structured remote training."
        />

        <div
          ref={ref}
          className={`reveal relative pl-6 sm:pl-10 ${
            isVisible ? 'reveal-visible' : ''
          }`}
        >
          {/* Vertical timeline rail */}
          <div className="absolute bottom-2 left-2 top-2 w-px bg-gradient-to-b from-violet-500 via-blue-500 to-transparent sm:left-3" />

          {/* Timeline node */}
          <div className="absolute left-0 top-7 flex h-4 w-4 items-center justify-center rounded-full border-2 border-violet-400 bg-[#050816] shadow-[0_0_12px_rgba(139,92,246,0.65)] sm:left-1">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
          </div>

          <div className="glass-card overflow-hidden p-6 transition-all duration-300 hover:border-violet-400/40 sm:p-8">
            <div className="flex flex-col justify-between gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-center">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-600/25 to-blue-600/25 text-violet-300 ring-1 ring-white/15">
                  <Briefcase className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-white">
                    {INTERNSHIP.role}
                  </h3>
                  <p className="mt-0.5 text-sm font-semibold text-cyan-300">
                    {INTERNSHIP.company}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5 text-xs font-medium text-slate-300">
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5">
                  <Calendar className="h-3.5 w-3.5 text-violet-300" />
                  {INTERNSHIP.duration}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-lg border border-blue-400/25 bg-blue-500/10 px-3 py-1.5 text-blue-200">
                  <Globe className="h-3.5 w-3.5 text-cyan-300" />
                  {INTERNSHIP.mode}
                </span>
              </div>
            </div>

            <p className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-base">
              {INTERNSHIP.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {INTERNSHIP.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs text-slate-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
