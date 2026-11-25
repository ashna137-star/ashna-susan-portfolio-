import React from 'react';
import { ArrowRight, Code2, Cpu, Database, Globe, Mail } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';

/**
 * Hero (Home) section featuring name, role, intro, CTAs, social icons, and an architectural visual panel.
 */
export default function Hero({ onLinkedinPlaceholder }) {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-16 sm:pt-28"
    >
      {/* Subtle architectural grid & ambient gradient orbs */}
      <div className="pointer-events-none absolute inset-0 bg-grid-pattern opacity-40" />
      <div className="pointer-events-none absolute -left-32 top-24 h-80 w-80 rounded-full bg-violet-600/20 blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 bottom-12 h-96 w-96 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        {/* Left column: primary hero content */}
        <div className="lg:col-span-7">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/25 bg-blue-500/10 px-3.5 py-1.5 text-xs font-medium text-blue-200">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            {PROFILE.academicYear} • GEC Palakkad
          </div>

          <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{' '}
            <span className="gradient-text">{PROFILE.name}</span>
          </h1>

          <p className="mt-4 font-display text-lg font-semibold text-slate-200 sm:text-xl">
            {PROFILE.title}
          </p>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            {PROFILE.shortIntro}
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:from-violet-500 hover:to-blue-500 hover:shadow-violet-500/35"
            >
              View My Projects
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-slate-100 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/50 hover:bg-white/10"
            >
              <Mail className="h-4 w-4 text-violet-300" />
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-4">
            <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
              Connect
            </span>
            <div className="h-px w-8 bg-white/15" />

            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ashna Susan GitHub Profile"
              title="GitHub"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-violet-400/50 hover:bg-violet-500/15 hover:text-white"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>

            {PROFILE.linkedinUrl ? (
              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ashna Susan LinkedIn Profile"
                title="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/50 hover:bg-blue-500/15 hover:text-white"
              >
                <LinkedInIcon className="h-5 w-5" />
              </a>
            ) : (
              <button
                type="button"
                onClick={onLinkedinPlaceholder}
                aria-label="LinkedIn Profile Placeholder"
                title="LinkedIn link placeholder — update later"
                className="inline-flex h-10 items-center gap-1.5 rounded-xl border border-dashed border-white/20 bg-white/5 px-3 text-xs font-medium text-slate-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/50 hover:bg-blue-500/15 hover:text-white"
              >
                <LinkedInIcon className="h-4 w-4 text-blue-400" />
                <span>LinkedIn</span>
              </button>
            )}
          </div>
        </div>

        {/* Right column: Developer identity & stack card */}
        <div className="lg:col-span-5">
          <div className="glass-card animate-float overflow-hidden p-1">
            <div className="rounded-[14px] bg-[#070d20]/95 p-6">
              {/* Terminal-style header */}
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-3.5">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>
                <span className="font-mono text-xs text-slate-400">
                  developer.profile.json
                </span>
              </div>

              <pre className="overflow-x-auto font-mono text-xs leading-6 text-slate-300 sm:text-[13px]">
                <code>
                  <span className="text-slate-500">{'{'}</span>
                  {'\n'}
                  {'  '}
                  <span className="text-violet-300">&quot;name&quot;</span>:{' '}
                  <span className="text-cyan-300">&quot;{PROFILE.name}&quot;</span>,
                  {'\n'}
                  {'  '}
                  <span className="text-violet-300">&quot;degree&quot;</span>:{' '}
                  <span className="text-cyan-300">&quot;B.Tech CSE (3rd Year)&quot;</span>,
                  {'\n'}
                  {'  '}
                  <span className="text-violet-300">&quot;college&quot;</span>:{' '}
                  <span className="text-cyan-300">&quot;GEC Palakkad&quot;</span>,
                  {'\n'}
                  {'  '}
                  <span className="text-violet-300">&quot;interests&quot;</span>: [
                  {'\n'}
                  {'    '}
                  <span className="text-emerald-300">&quot;Software Development&quot;</span>,
                  {'\n'}
                  {'    '}
                  <span className="text-emerald-300">&quot;Web Technologies&quot;</span>,
                  {'\n'}
                  {'    '}
                  <span className="text-emerald-300">&quot;Emerging Tech&quot;</span>
                  {'\n'}
                  {'  '}
                  ]
                  {'\n'}
                  <span className="text-slate-500">{'}'}</span>
                </code>
              </pre>

              {/* Quick discipline badges */}
              <div className="mt-6 grid grid-cols-2 gap-2.5 border-t border-white/10 pt-5">
                <div className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2.5">
                  <Code2 className="h-4 w-4 text-violet-400" />
                  <span className="text-xs font-medium text-slate-200">
                    Python • C • Java • JS
                  </span>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2.5">
                  <Globe className="h-4 w-4 text-blue-400" />
                  <span className="text-xs font-medium text-slate-200">
                    Full-Stack Web
                  </span>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2.5">
                  <Database className="h-4 w-4 text-indigo-400" />
                  <span className="text-xs font-medium text-slate-200">
                    SQL &amp; NoSQL
                  </span>
                </div>
                <div className="flex items-center gap-2.5 rounded-xl border border-white/5 bg-white/[0.03] px-3 py-2.5">
                  <Cpu className="h-4 w-4 text-cyan-400" />
                  <span className="text-xs font-medium text-slate-200">
                    STM32 Embedded
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
