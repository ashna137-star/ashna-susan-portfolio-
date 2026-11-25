import React from 'react';
import { Code2, Cpu, Database, Globe } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeading from './SectionHeading';

const CATEGORY_ICONS = {
  programming: Code2,
  web: Globe,
  databases: Database,
  embedded: Cpu,
};

/**
 * Technical Skills section organized into domain cards.
 */
export default function Skills() {
  const [ref, isVisible] = useScrollReveal();

  return (
    <section id="skills" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Technical Skills"
          title="Core stack & engineering capabilities"
          subtitle="Languages, web development foundations, database systems, and embedded hardware platforms."
        />

        <div
          ref={ref}
          className={`reveal grid gap-6 sm:grid-cols-2 ${
            isVisible ? 'reveal-visible' : ''
          }`}
        >
          {SKILL_CATEGORIES.map((category) => {
            const Icon = CATEGORY_ICONS[category.id] || Code2;
            return (
              <div
                key={category.id}
                className="group glass-card relative overflow-hidden p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/40"
              >
                {/* Top gradient accent line */}
                <div
                  className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${category.accent} opacity-75 transition-opacity group-hover:opacity-100`}
                />

                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${category.accent} text-white shadow-lg shadow-indigo-500/20`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2.5">
                  {category.items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 font-mono text-xs font-medium text-slate-200 transition-colors duration-200 group-hover:border-white/20 hover:!border-cyan-400/50 hover:bg-cyan-500/10 hover:text-white"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-violet-400 to-cyan-400" />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
