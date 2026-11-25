import React, { useState } from 'react';
import { Check, Copy, ExternalLink, Mail, Send } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SectionHeading from './SectionHeading';
import { GitHubIcon, LinkedInIcon } from './SocialIcons';

/**
 * Contact section with direct links, one-click email copy, LinkedIn placeholder, and mailto form.
 */
export default function Contact({ onNotify }) {
  const [ref, isVisible] = useScrollReveal();
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      onNotify?.('Email address copied to clipboard.');
      setTimeout(() => setCopied(false), 2200);
    } catch {
      onNotify?.(`Email: ${PROFILE.email}`);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formState;
    if (!name.trim() || !email.trim() || !message.trim()) {
      onNotify?.('Please fill in your name, email, and message.');
      return;
    }

    const subject = encodeURIComponent(`Portfolio Inquiry from ${name.trim()}`);
    const body = encodeURIComponent(
      `Name: ${name.trim()}\nEmail: ${email.trim()}\n\n${message.trim()}`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    onNotify?.('Opening your default email client to send the message.');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's connect and collaborate"
          subtitle="Open to software development opportunities, internships, and collaborative engineering projects."
        />

        <div
          ref={ref}
          className={`reveal grid gap-8 lg:grid-cols-12 ${
            isVisible ? 'reveal-visible' : ''
          }`}
        >
          {/* Left: Direct channels */}
          <div className="space-y-4 lg:col-span-5">
            {/* Email Card */}
            <div className="glass-card p-5 transition hover:border-violet-400/35">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-blue-500/20 text-violet-300 ring-1 ring-white/10">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      Email
                    </p>
                    <a
                      href={`mailto:${PROFILE.email}`}
                      className="mt-0.5 block text-sm font-semibold text-white transition hover:text-cyan-300 break-all"
                    >
                      {PROFILE.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-xs font-medium text-slate-300 transition hover:border-violet-400/40 hover:bg-violet-500/15 hover:text-white"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-400" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      Copy
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* GitHub Card */}
            <a
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card flex items-center justify-between gap-3 p-5 transition hover:-translate-y-0.5 hover:border-violet-400/35"
            >
              <div className="flex items-center gap-3.5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500/20 to-indigo-500/20 text-slate-200 ring-1 ring-white/10">
                  <GitHubIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                    GitHub
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-white group-hover:text-cyan-300">
                    github.com/ashna137-star
                  </p>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-slate-400 transition group-hover:text-cyan-300" />
            </a>

            {/* LinkedIn Card (with placeholder support) */}
            {PROFILE.linkedinUrl ? (
              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-card flex items-center justify-between gap-3 p-5 transition hover:-translate-y-0.5 hover:border-blue-400/35"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-blue-300 ring-1 ring-white/10">
                    <LinkedInIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      LinkedIn
                    </p>
                    <p className="mt-0.5 text-sm font-semibold text-white group-hover:text-cyan-300">
                      Connect on LinkedIn
                    </p>
                  </div>
                </div>
                <ExternalLink className="h-4 w-4 text-slate-400 transition group-hover:text-cyan-300" />
              </a>
            ) : (
              <button
                type="button"
                onClick={() =>
                  onNotify?.(
                    'LinkedIn link placeholder — update linkedinUrl in src/data/portfolioData.js.'
                  )
                }
                className="group glass-card flex w-full items-center justify-between gap-3 border-dashed border-white/20 p-5 text-left transition hover:border-blue-400/45"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 text-blue-300 ring-1 ring-white/10">
                    <LinkedInIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                      LinkedIn (Placeholder)
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-slate-300 group-hover:text-white">
                      Add LinkedIn profile link later
                    </p>
                  </div>
                </div>
                <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1 font-mono text-[10px] text-slate-400">
                  TODO
                </span>
              </button>
            )}
          </div>

          {/* Right: Interactive Message Form */}
          <form
            onSubmit={handleFormSubmit}
            className="glass-card space-y-5 p-6 sm:p-8 lg:col-span-7"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) =>
                    setFormState((prev) => ({ ...prev, name: e.target.value }))
                  }
                  placeholder="Jane Doe"
                  className="w-full rounded-xl border border-white/10 bg-[#050816]/75 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/25"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300"
                >
                  Your Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) =>
                    setFormState((prev) => ({ ...prev, email: e.target.value }))
                  }
                  placeholder="jane@example.com"
                  className="w-full rounded-xl border border-white/10 bg-[#050816]/75 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/25"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-300"
              >
                Message
              </label>
              <textarea
                id="contact-message"
                rows={4}
                required
                value={formState.message}
                onChange={(e) =>
                  setFormState((prev) => ({ ...prev, message: e.target.value }))
                }
                placeholder="Write a message about a project, opportunity, or collaboration..."
                className="w-full resize-none rounded-xl border border-white/10 bg-[#050816]/75 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none transition focus:border-violet-400 focus:ring-2 focus:ring-violet-500/25"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
              <p className="text-xs text-slate-400">
                Opens your email client addressed to{' '}
                <span className="text-slate-200">{PROFILE.email}</span>
              </p>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:from-violet-500 hover:to-blue-500"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
