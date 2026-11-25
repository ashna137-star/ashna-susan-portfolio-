import React from 'react';
import { GraduationCap, Layers, Sparkles, Terminal } from 'lucide-react';
import { ABOUT_INFO } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeading from './SectionHeading';

const HIGHLIGHT_ICONS = [GraduationCap, Terminal, Layers, Sparkles];

/**
 * About Me section detailing academic background and engineering focus.
 */
export default function About() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="about" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Building fundamentals across software, web, and hardware"
          subtitle="Grounded in Computer Science & Engineering with a curiosity for turning concepts into clean, practical systems."
        />

        <div
          ref={ref}
          className={`reveal grid gap-8 lg:grid-cols-12 ${
            isVisible ? 'reveal-visible' : ''
          }`}
        >
          {/* Narrative Card */}
          <div className="glass-card p-6 sm:p-8 lg:col-span-7">
            <div className="space-y-5 text-base leading-relaxed text-slate-300">
              {ABOUT_INFO.paragraphs.map((text, idx) => (
                <p key={idx}>{text}</p>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-2.5 border-t border-white/10 pt-6">
              {[
                'Software Development',
                'Web Technologies',
                'Emerging Technologies',
                'Embedded Systems',
              ].map((focus) => (
                <span
                  key={focus}
                  className="rounded-lg border border-violet-500/20 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-200"
                >
                  {focus}
                </span>
              ))}
            </div>
          </div>

          {/* Structured Highlights Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {ABOUT_INFO.highlights.map((item, index) => {
              const Icon = HIGHLIGHT_ICONS[index % HIGHLIGHT_ICONS.length];
              return (
                <div
                  key={item.label}
                  className="group glass-card flex items-start gap-4 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/35"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 text-violet-300 ring-1 ring-white/10 transition group-hover:scale-105 group-hover:text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-white">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
