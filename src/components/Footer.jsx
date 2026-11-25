import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { NAV_LINKS, PROFILE } from '../data/portfolioData';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';

/**
 * Minimal developer footer with quick links and scroll-to-top action.
 */
export default function Footer({ onLinkedinPlaceholder }) {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#040713]/90 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 font-display text-xs font-bold text-white">
            {PROFILE.initials}
          </span>
          <div>
            <p className="text-sm font-semibold text-white">{PROFILE.name}</p>
            <p className="text-xs text-slate-400">
              &copy; {year} {PROFILE.name}. Built with React &amp; Tailwind CSS.
            </p>
          </div>
        </div>

        <nav aria-label="Footer Navigation" className="flex flex-wrap justify-center gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="text-xs font-medium text-slate-400 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <a
            href={`mailto:${PROFILE.email}`}
            aria-label="Email Ashna Susan"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition hover:border-violet-400/40 hover:text-white"
          >
            <Mail className="h-4 w-4" />
          </a>

          <a
            href={PROFILE.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition hover:border-violet-400/40 hover:text-white"
          >
            <GitHubIcon className="h-4 w-4" />
          </a>

          {PROFILE.linkedinUrl ? (
            <a
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition hover:border-blue-400/40 hover:text-white"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
          ) : (
            <button
              type="button"
              onClick={onLinkedinPlaceholder}
              aria-label="LinkedIn Placeholder"
              className="flex h-9 w-9 items-center justify-center rounded-lg border border-dashed border-white/20 bg-white/5 text-slate-300 transition hover:border-blue-400/40 hover:text-white"
            >
              <LinkedInIcon className="h-4 w-4" />
            </button>
          )}

          <a
            href="#home"
            aria-label="Back to top"
            className="ml-1 flex h-9 w-9 items-center justify-center rounded-lg border border-violet-500/30 bg-violet-500/10 text-violet-200 transition hover:bg-violet-500/20 hover:text-white"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
