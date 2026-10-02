import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { FIRM_DATABASE } from '../data/firmDatabase';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string, prefillMandate?: string) => void;
}

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'training', label: 'Training' },
  { id: 'insights', label: 'Insights' },
  { id: 'contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 36);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (scrollY / docHeight) * 100)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock background scroll when mobile overlay is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleLinkClick = (id: string, mandate?: string) => {
    setMobileMenuOpen(false);
    onNavigate(id, mandate);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0C0B10]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-[0_12px_32px_rgba(0,0,0,0.35)]'
            : 'bg-[#0C0B10]/80 backdrop-blur-sm border-b border-white/5 py-5'
        }`}
      >
        {/* Subtle Scroll Progress Hairline */}
        <div
          className="absolute top-0 left-0 h-[2px] bg-[#7C3AED] transition-transform duration-150 origin-left"
          style={{ width: '100%', transform: `scaleX(${scrollProgress / 100})` }}
          aria-hidden="true"
        />

        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between gap-6">
          {/* Zone 1: Single Text Element Brand Wordmark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleLinkClick('home');
            }}
            className="font-editorial text-xl sm:text-2xl font-semibold tracking-tight text-[#FAF8F5] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B5CF6]"
          >
            {FIRM_DATABASE.identity.firmName}
          </a>

          {/* Zone 2: Clean Typography Navigation Links */}
          <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-7">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.id);
                  }}
                  className={`relative py-1 text-xs font-medium tracking-wide transition-colors duration-200 whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8B5CF6] ${
                    isActive ? 'text-white' : 'text-stone-400 hover:text-stone-100'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#8B5CF6] transition-transform duration-200 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'
                    }`}
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Single Primary Action + Mobile Menu Trigger */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleLinkClick('consultation', 'Corporate Consultation')}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 text-xs font-medium tracking-wide text-white bg-[#5B21B6] hover:bg-[#6D28D9] border border-[#8B5CF6]/40 transition-colors duration-200 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8B5CF6]"
            >
              <span>Book a Corporate Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-editorial-menu"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="lg:hidden inline-flex items-center justify-center w-11 h-11 text-stone-200 hover:text-white border border-white/15 bg-white/5 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#8B5CF6]"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Luxury Editorial Mobile Menu Overlay */}
      <div
        id="mobile-editorial-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
        className={`fixed inset-0 z-40 bg-[#0C0B10] text-[#FAF8F5] transition-all duration-300 lg:hidden flex flex-col justify-between pt-24 pb-10 px-6 sm:px-10 overflow-y-auto ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-3'
        }`}
      >
        <div className="border-t border-white/10 pt-6">
          <p className="text-xs tracking-widest uppercase text-stone-400 mb-6">
            {FIRM_DATABASE.identity.designation} · New Delhi Chambers
          </p>

          <nav aria-label="Mobile Primary Navigation" className="flex flex-col divide-y divide-white/10">
            {NAV_ITEMS.map((item, idx) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
                className="group py-4 flex items-baseline justify-between text-2xl sm:text-3xl font-editorial font-medium text-stone-200 hover:text-white transition-colors"
              >
                <div className="flex items-baseline gap-4">
                  <span className="font-tabular text-xs text-[#A78BFA]">0{idx + 1}</span>
                  <span>{item.label}</span>
                </div>
                <ArrowUpRight className="w-5 h-5 text-stone-500 group-hover:text-[#A78BFA] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 space-y-5">
          <div className="text-xs text-stone-400 space-y-1">
            <p className="text-stone-200 font-medium">CA Rajender Arora (FCA, LLB)</p>
            <p>{FIRM_DATABASE.contact.primaryAddress.full}</p>
            <p>{FIRM_DATABASE.contact.hours.full}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => handleLinkClick('consultation', 'Corporate Consultation')}
              className="w-full py-3.5 px-5 bg-[#5B21B6] hover:bg-[#6D28D9] text-white text-xs font-medium tracking-wide flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>Book a Corporate Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => handleLinkClick('consultation', 'GST SCN Management & Appeals')}
              className="w-full py-3.5 px-5 bg-white/5 hover:bg-white/10 border border-white/15 text-stone-200 text-xs font-medium tracking-wide flex items-center justify-center gap-2 transition-colors cursor-pointer"
            >
              <span>Consult on GST SCN Notices</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
