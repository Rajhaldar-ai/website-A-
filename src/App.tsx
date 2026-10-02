import React, { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { FIRM_DATABASE } from './data/firmDatabase';
import { Navbar } from './components/Navbar';
import { FounderPortraitPlaceholder } from './components/FounderPortraitPlaceholder';
import { ServicesEditorial } from './components/ServicesEditorial';
import { AboutAndFounder } from './components/AboutAndFounder';
import { ExpertiseAndProcess } from './components/ExpertiseAndProcess';
import { GstFoundationAndInsights } from './components/GstFoundationAndInsights';
import { ConsultationAndContact } from './components/ConsultationAndContact';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('home');
  const [selectedMandate, setSelectedMandate] = useState<string>('Corporate Consultation');
  const [customPortraitUrl, setCustomPortraitUrl] = useState<string | null>(null);

  const handleNavigate = (sectionId: string, mandate?: string) => {
    if (mandate) {
      setSelectedMandate(mandate);
    }
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    const sectionIds = [
      'home',
      'services',
      'about',
      'expertise',
      'training',
      'insights',
      'consultation',
      'contact',
    ];

    const handleScrollSpy = () => {
      const scrollPosition = window.scrollY + 220;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i] === 'consultation' ? 'contact' : sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScrollSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleScrollSpy);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#141316]">
      {/* Sticky Luxury Header & Full-Screen Mobile Menu */}
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />

      <main className="flex-1">
        {/* ===================================================================
            SECTION 11 & 12: HERO — PRIMARY VISUAL MOMENT
        =================================================================== */}
        <section
          id="home"
          aria-labelledby="hero-heading"
          className="relative bg-[#0B0A0F] text-[#FAF8F5] pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden border-b border-white/10"
        >
          {/* Controlled Deep Purple Ambient Glow & Architectural Grid */}
          <div
            className="absolute top-12 left-1/4 w-[520px] h-[520px] rounded-full bg-[#5B21B6]/16 blur-[140px] pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute bottom-0 right-10 w-[380px] h-[380px] rounded-full bg-[#4C1D95]/15 blur-[120px] pointer-events-none"
            aria-hidden="true"
          />

          {/* Subtle 3D Perspective Geometric Lines */}
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:72px_72px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
              {/* LEFT: Editorial Typography & Supplied CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-7 space-y-8"
              >
                {/* Official Eyebrow */}
                <div className="flex flex-wrap items-center gap-2.5 text-xs font-tabular tracking-widest uppercase text-[#C4B5FD]">
                  <span>{FIRM_DATABASE.identity.officialTagline}</span>
                </div>

                {/* Large Display Headline */}
                <h1
                  id="hero-heading"
                  className="font-editorial text-4xl sm:text-6xl lg:text-[68px] font-medium tracking-tight text-white leading-[1.03]"
                >
                  {FIRM_DATABASE.hero.headline}
                </h1>

                {/* Supporting Paragraph Summarizing Verified Practice */}
                <p className="text-base sm:text-lg text-stone-300 leading-relaxed max-w-2xl">
                  {FIRM_DATABASE.hero.supportingParagraph}
                </p>

                {/* Primary & Secondary Client-Supplied CTAs */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
                  <button
                    type="button"
                    onClick={() => handleNavigate('consultation', 'Corporate Consultation')}
                    className="inline-flex items-center justify-center gap-3 px-7 py-4 bg-[#5B21B6] hover:bg-[#6D28D9] text-white text-xs sm:text-sm font-medium tracking-wide border border-[#8B5CF6]/40 transition-colors duration-200 cursor-pointer whitespace-nowrap"
                  >
                    <span>{FIRM_DATABASE.hero.primaryCta}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={() => handleNavigate('consultation', 'GST SCN Management & Appeals')}
                    className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-white/[0.04] hover:bg-white/[0.09] text-stone-200 hover:text-white text-xs sm:text-sm font-medium tracking-wide border border-white/15 transition-colors duration-200 cursor-pointer whitespace-nowrap"
                  >
                    <span>Consult on GST SCN Notices</span>
                  </button>
                </div>

                {/* Unboxed Editorial Metadata Strip (Zero Pills) */}
                <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-stone-400">
                  <span className="text-stone-200 font-medium">
                    {FIRM_DATABASE.founder.name} ({FIRM_DATABASE.founder.credentials})
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>GST SCN &amp; Appellate Defense</span>
                  <span aria-hidden="true">·</span>
                  <span>Statutory &amp; IT/CISA Audits</span>
                  <span aria-hidden="true">·</span>
                  <span>GST Research Foundation</span>
                </div>
              </motion.div>

              {/* RIGHT: Non-Fabricated Founder Portrait Placeholder Frame */}
              <motion.div
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="lg:col-span-5"
              >
                <FounderPortraitPlaceholder
                  variant="hero"
                  customPortraitUrl={customPortraitUrl}
                  onUploadPortrait={setCustomPortraitUrl}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 13: TRUST / STATISTICS STRIP (LARGE TYPOGRAPHY, NO CARDS)
        =================================================================== */}
        <section
          aria-label="Practice and Authorship Figures"
          className="bg-[#12101B] text-[#FAF8F5] border-b border-white/10 py-14 sm:py-16"
        >
          <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8 divide-y sm:divide-y-0 lg:divide-x divide-white/10">
              {FIRM_DATABASE.statistics.map((stat, idx) => (
                <div
                  key={stat.label}
                  className={`${
                    idx > 0 ? 'pt-8 sm:pt-0 lg:pl-8' : ''
                  } flex flex-col justify-between space-y-2`}
                >
                  <div className="flex items-baseline justify-between">
                    <span className="font-editorial text-5xl sm:text-6xl font-semibold text-white font-tabular tracking-tight">
                      {stat.value}
                    </span>
                    <span className="font-tabular text-[11px] text-[#A78BFA]">0{idx + 1}</span>
                  </div>
                  <div className="pt-1">
                    <p className="text-sm font-semibold text-stone-100">{stat.label}</p>
                    <p className="text-xs text-stone-400 mt-1 leading-relaxed">{stat.context}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 14, 15, 16: SERVICES — VARIED EDITORIAL COMPOSITIONS
        =================================================================== */}
        <ServicesEditorial onSelectMandate={handleNavigate} />

        {/* ===================================================================
            SECTION 17, 18, 20: ABOUT THE FIRM, FOUNDER & DIFFERENTIATORS
        =================================================================== */}
        <AboutAndFounder
          customPortraitUrl={customPortraitUrl}
          onUploadPortrait={setCustomPortraitUrl}
          onNavigate={handleNavigate}
        />

        {/* ===================================================================
            SECTION 19 & 21: EXPERTISE / INDUSTRIES & 4-STAGE PROCESS
        =================================================================== */}
        <ExpertiseAndProcess onSelectMandate={handleNavigate} />

        {/* ===================================================================
            SECTION 22, 23, 24: GST RESEARCH FOUNDATION, INSIGHTS & FAQ
        =================================================================== */}
        <GstFoundationAndInsights onSelectMandate={handleNavigate} />

        {/* ===================================================================
            SECTION 25, 26, 27, 28: CONSULTATION CTA, FORM, CONTACT & FOOTER
        =================================================================== */}
        <ConsultationAndContact
          selectedMandate={selectedMandate}
          onNavigate={handleNavigate}
        />
      </main>
    </div>
  );
}
