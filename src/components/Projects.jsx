import React, { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  Cpu,
  ExternalLink,
  FolderGit2,
  Globe,
  Rocket,
  X,
} from 'lucide-react';
import { PROFILE, PROJECTS } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeading from './SectionHeading';
import { GitHubIcon } from './SocialIcons';

const PROJECT_ICONS = {
  echoes: Rocket,
  'stm32-irrigation': Cpu,
  'campus-events': Globe,
};

const CATEGORIES = ['All', 'Hackathon', 'Web', 'Embedded'];

/**
 * Projects showcase with category filtering and an accessible detail modal.
 */
export default function Projects() {
  const [ref, isVisible] = useScrollReveal();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setActiveProject(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <section id="projects" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Projects"
            title="Selected engineering & hackathon work"
            subtitle="Applications and embedded systems spanning hackathons, full-stack web development, and microcontroller engineering."
          />

          {/* Filter pills */}
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="mb-12 inline-flex flex-wrap gap-1.5 rounded-xl border border-white/10 bg-[#0b1128]/80 p-1.5"
          >
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition-all ${
                    active
                      ? 'bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-md shadow-violet-600/25'
                      : 'text-slate-400 hover:bg-white/5 hover:text-slate-100'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Grid */}
        <div
          ref={ref}
          className={`reveal grid gap-6 md:grid-cols-2 lg:grid-cols-3 ${
            isVisible ? 'reveal-visible' : ''
          }`}
        >
          {filteredProjects.map((project) => {
            const Icon = PROJECT_ICONS[project.id] || FolderGit2;
            const hasSpecificRepo = Boolean(project.repoUrl);
            const hasDemo = Boolean(project.demoUrl);

            return (
              <article
                key={project.id}
                className="group glass-card flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-violet-400/45"
              >
                {/* Decorative top header banner */}
                <div
                  className={`relative border-b border-white/10 bg-gradient-to-br ${project.accent} p-6`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-[#050816]/70 px-3 py-1 text-[11px] font-medium text-cyan-200 backdrop-blur-md">
                      {project.context}
                    </span>
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-[#050816]/60 text-violet-300 transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-xl font-bold leading-snug text-white transition-colors group-hover:text-violet-200">
                    {project.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-400">
                    {project.summary}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-1 font-mono text-[11px] text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Card Footer Actions */}
                  <div className="mt-6 flex items-center justify-between gap-3 border-t border-white/10 pt-4">
                    <button
                      type="button"
                      onClick={() => setActiveProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-300 transition hover:text-cyan-300"
                    >
                      Project Details
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      {hasDemo && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-lg border border-cyan-500/30 bg-cyan-500/10 px-2.5 py-1.5 text-xs font-medium text-cyan-200 transition hover:bg-cyan-500/20"
                        >
                          Live <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                      <a
                        href={hasSpecificRepo ? project.repoUrl : PROFILE.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={
                          hasSpecificRepo
                            ? 'Open project repository'
                            : 'View GitHub profile (repository link placeholder)'
                        }
                        className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-medium text-slate-200 transition hover:border-violet-400/40 hover:bg-violet-500/15 hover:text-white"
                      >
                        <GitHubIcon className="h-3.5 w-3.5" />
                        <span>{hasSpecificRepo ? 'Code' : 'GitHub'}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Project Details Modal */}
      {activeProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="glass-card w-full max-w-lg overflow-hidden border border-violet-500/30 bg-[#080e24]"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className={`border-b border-white/10 bg-gradient-to-r ${activeProject.accent} px-6 py-5`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
                    {activeProject.context}
                  </span>
                  <h3
                    id="project-modal-title"
                    className="mt-1 font-display text-xl font-bold text-white"
                  >
                    {activeProject.title}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  aria-label="Close modal"
                  className="rounded-lg border border-white/15 bg-black/30 p-1.5 text-slate-300 transition hover:bg-white/10 hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="space-y-5 p-6">
              <p className="text-sm leading-relaxed text-slate-300">
                {activeProject.details}
              </p>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Technologies &amp; Focus
                </h4>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {activeProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-violet-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {!activeProject.repoUrl && !activeProject.demoUrl && (
                <p className="rounded-xl border border-dashed border-white/15 bg-white/[0.02] px-3.5 py-2.5 text-xs text-slate-400">
                  Direct project link placeholder — add{' '}
                  <code className="text-violet-300">repoUrl</code> or{' '}
                  <code className="text-violet-300">demoUrl</code> in{' '}
                  <code className="text-cyan-300">src/data/portfolioData.js</code>.
                </p>
              )}

              <div className="flex flex-wrap justify-end gap-3 border-t border-white/10 pt-4">
                <a
                  href={activeProject.repoUrl || PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-2 text-xs font-semibold text-white transition hover:from-violet-500 hover:to-blue-500"
                >
                  <GitHubIcon className="h-4 w-4" />
                  {activeProject.repoUrl ? 'View Repository' : 'Visit GitHub Profile'}
                </a>
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:bg-white/10"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
