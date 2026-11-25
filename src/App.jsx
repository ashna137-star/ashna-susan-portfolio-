import React, { useCallback, useMemo, useRef, useState } from 'react';
import About from './components/About';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Internship from './components/Internship';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import { NAV_LINKS } from './data/portfolioData';
import { useScrollSpy } from './hooks/useScrollReveal';

export default function App() {
  const sectionIds = useMemo(() => NAV_LINKS.map((link) => link.id), []);
  const { activeId, scrollProgress } = useScrollSpy(sectionIds);
  const [toast, setToast] = useState(null);
  const toastTimerRef = useRef(null);

  const showToast = useCallback((message) => {
    setToast(message);
    if (toastTimerRef.current) {
      window.clearTimeout(toastTimerRef.current);
    }
    toastTimerRef.current = window.setTimeout(() => {
      setToast(null);
    }, 3400);
  }, []);

  const handleLinkedinPlaceholder = useCallback(() => {
    showToast(
      'LinkedIn link placeholder — update linkedinUrl in src/data/portfolioData.js.'
    );
  }, [showToast]);

  return (
    <div className="relative min-h-screen bg-[#050816] text-slate-100">
      <Navbar activeId={activeId} scrollProgress={scrollProgress} />

      <main>
        <Hero onLinkedinPlaceholder={handleLinkedinPlaceholder} />
        <About />
        <Skills />
        <Projects />
        <Internship />
        <Certifications />
        <Contact onNotify={showToast} />
      </main>

      <Footer onLinkedinPlaceholder={handleLinkedinPlaceholder} />

      {/* Subtle Toast Notification */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-5 right-5 z-50 max-w-sm rounded-xl border border-violet-400/35 bg-[#0b1128]/95 px-4 py-3 text-xs font-medium text-slate-100 shadow-2xl shadow-black/50 backdrop-blur-xl"
        >
          {toast}
        </div>
      )}
    </div>
  );
}
