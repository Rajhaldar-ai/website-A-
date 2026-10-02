import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FIRM_DATABASE } from '../data/firmDatabase';
import { FounderPortraitPlaceholder } from './FounderPortraitPlaceholder';

interface AboutAndFounderProps {
  customPortraitUrl: string | null;
  onUploadPortrait: (url: string | null) => void;
  onNavigate: (sectionId: string, mandate?: string) => void;
}

export const AboutAndFounder: React.FC<AboutAndFounderProps> = ({
  customPortraitUrl,
  onUploadPortrait,
  onNavigate,
}) => {
  const [chambersImgError, setChambersImgError] = useState(false);

  return (
    <div id="about">
      {/* =====================================================================
          SECTION 17: ABOUT THE FIRM — EDITORIAL SPLIT LAYOUT
      ===================================================================== */}
      <section
        aria-labelledby="about-firm-heading"
        className="py-24 sm:py-32 bg-[#F4F1EA] text-[#141316] border-b border-stone-300"
      >
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Side: Large Editorial Architectural Image */}
            <div className="lg:col-span-5">
              <figure className="relative group">
                <div
                  className="absolute -inset-3 border border-[#5B21B6]/25 translate-x-3 translate-y-3 pointer-events-none"
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden border border-stone-300 bg-[#141316] aspect-[3/4]">
                  <div
                    className="absolute top-0 bottom-0 left-0 w-1.5 bg-[#5B21B6] z-10"
                    aria-hidden="true"
                  />
                  {!chambersImgError ? (
                    <img
                      src={FIRM_DATABASE.assets.firmChambersInterior}
                      alt="Architectural interior of legal and chartered accountancy chambers"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      onError={() => setChambersImgError(true)}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-b from-[#1A1625] to-[#0D0B12] flex items-center justify-center p-8 text-stone-300 text-xs font-tabular">
                      [ARCHITECTURAL CHAMBERS PHOTOGRAPH]
                    </div>
                  )}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#0C0B10]/85 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-6 left-6 right-6 text-stone-200 space-y-1">
                    <p className="text-[11px] font-tabular tracking-widest uppercase text-[#C4B5FD]">
                      NEW DELHI CHAMBERS
                    </p>
                    <p className="font-editorial text-2xl text-white">
                      Shastri Nagar &amp; DLF Tower, Moti Nagar
                    </p>
                  </div>
                </div>
                <figcaption className="mt-3 text-xs font-editorial italic text-stone-500">
                  Fig. 1 — Chambers practice combining Chartered Accountancy assurance, GST litigation
                  counsel, and practitioner education.
                </figcaption>
              </figure>
            </div>

            {/* Right Side: Editorial Story & Practice Architecture */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <p className="text-xs font-tabular tracking-widest uppercase text-[#5B21B6]">
                  {FIRM_DATABASE.aboutFirm.eyebrow}
                </p>
                <h2
                  id="about-firm-heading"
                  className="font-editorial text-4xl sm:text-5xl lg:text-[52px] font-medium tracking-tight leading-[1.1] text-[#141316]"
                >
                  {FIRM_DATABASE.aboutFirm.headline}
                </h2>
              </div>

              <div className="h-[1px] bg-stone-300 w-full" aria-hidden="true" />

              {/* Editorial Reading Measure with Drop Cap */}
              <div className="space-y-5 max-w-2xl text-base sm:text-[17px] text-stone-700 leading-[1.78]">
                <p className="first-letter:font-editorial first-letter:text-5xl first-letter:font-semibold first-letter:float-left first-letter:mr-3.5 first-letter:mt-1 first-letter:leading-none first-letter:text-[#5B21B6]">
                  {FIRM_DATABASE.aboutFirm.leadParagraph}
                </p>
                {FIRM_DATABASE.aboutFirm.bodyParagraphs.map((paragraph, idx) => (
                  <p key={idx} className="text-stone-600 text-sm sm:text-base leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Three Practice Pillars Summary */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-stone-300">
                {FIRM_DATABASE.aboutFirm.pillars.map((pillar, index) => (
                  <div key={pillar.title} className="space-y-2">
                    <span className="font-tabular text-xs text-[#5B21B6] font-medium">
                      0{index + 1} / PILLAR
                    </span>
                    <h3 className="font-editorial text-xl font-semibold text-[#141316]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-stone-600 leading-relaxed">{pillar.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 18: DEDICATED FOUNDER FEATURE — CA RAJENDER ARORA (FCA, LLB)
      ===================================================================== */}
      <section
        aria-labelledby="founder-heading"
        className="py-24 sm:py-32 bg-[#0D0C12] text-[#FAF8F5] border-b border-white/10 relative overflow-hidden"
      >
        {/* Subtle Purple Ambient Radial Glow */}
        <div
          className="absolute top-1/4 right-0 w-[480px] h-[480px] rounded-full bg-[#5B21B6]/12 blur-[130px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Side: Founder Biography & Verified Credentials */}
            <div className="lg:col-span-7 space-y-8 order-2 lg:order-1">
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-xs font-tabular tracking-widest uppercase text-[#A78BFA]">
                  <span>LEADERSHIP &amp; COUNSEL</span>
                  <span>·</span>
                  <span>DUAL QUALIFICATION</span>
                </div>

                <h2
                  id="founder-heading"
                  className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.06]"
                >
                  {FIRM_DATABASE.founder.name}
                </h2>
                <p className="font-editorial italic text-2xl sm:text-3xl text-[#C4B5FD]">
                  {FIRM_DATABASE.founder.credentials} — Chartered Accountant &amp; Tax Counsel
                </p>
              </div>

              <div className="space-y-4 max-w-2xl text-stone-300 text-sm sm:text-base leading-relaxed">
                {FIRM_DATABASE.founder.biography.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              {/* Verified Credentials List */}
              <div className="border-t border-b border-white/10 py-6 space-y-3">
                <p className="text-xs font-tabular tracking-widest uppercase text-stone-400">
                  Verified Professional Standing &amp; Roles
                </p>
                <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  {FIRM_DATABASE.founder.credentialBreakdown.map((cred, idx) => (
                    <div key={cred} className="border-l-2 border-[#7C3AED] pl-3.5 py-0.5">
                      <dt className="text-[11px] font-tabular text-stone-400">CREDENTIAL 0{idx + 1}</dt>
                      <dd className="text-xs sm:text-sm text-stone-100 font-medium mt-0.5">{cred}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              {/* Verified Public Authorship & Consultation CTA */}
              <div className="flex flex-wrap items-center justify-between gap-6 pt-2">
                <div className="flex items-center gap-8">
                  <div>
                    <span className="font-editorial text-3xl sm:text-4xl font-semibold text-white font-tabular">
                      59+
                    </span>
                    <span className="block text-xs text-stone-400 mt-0.5">
                      Published Tax Contributions
                    </span>
                  </div>
                  <div className="h-9 w-[1px] bg-white/15" aria-hidden="true" />
                  <div>
                    <span className="font-editorial text-3xl sm:text-4xl font-semibold text-white font-tabular">
                      1.14M+
                    </span>
                    <span className="block text-xs text-stone-400 mt-0.5">
                      Verified Readership Views
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => onNavigate('consultation', 'Hire a Tax Counsel')}
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#5B21B6] hover:bg-[#6D28D9] text-white text-xs font-medium tracking-wide transition-colors cursor-pointer"
                >
                  <span>Hire a Tax Counsel</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Side: Non-Fabricated Editorial Portrait Placeholder */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <FounderPortraitPlaceholder
                variant="editorial"
                customPortraitUrl={customPortraitUrl}
                onUploadPortrait={onUploadPortrait}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 20: VERIFIED DIFFERENTIATORS
      ===================================================================== */}
      <section
        aria-labelledby="differentiators-heading"
        className="py-24 sm:py-28 bg-[#FAF8F5] text-[#141316] border-b border-stone-300"
      >
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-14 border-b border-stone-300">
            <div className="space-y-2">
              <p className="text-xs font-tabular tracking-widest uppercase text-[#5B21B6]">
                CHAMBERS DISTINCTION · VERIFIED DIFFERENTIATORS
              </p>
              <h2
                id="differentiators-heading"
                className="font-editorial text-3xl sm:text-5xl font-medium text-[#141316]"
              >
                Why Corporates &amp; Practitioners Retain Our Counsel.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-stone-500 max-w-md">
              Every credential and distinction below derives strictly from verified qualifications
              and documented public-profile authorship.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-stone-300 border-b border-stone-300">
            {FIRM_DATABASE.differentiators.map((diff) => (
              <div
                key={diff.number}
                className="py-10 lg:py-12 lg:px-8 first:lg:pl-0 last:lg:pr-0 flex flex-col justify-between space-y-8"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs font-tabular">
                    <span className="text-[#5B21B6] font-semibold">DISTINCTION {diff.number}</span>
                    <span className="text-stone-500 uppercase tracking-wider">{diff.theme}</span>
                  </div>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#141316] leading-snug">
                    {diff.title}
                  </h3>
                  <p className="text-sm text-stone-600 leading-relaxed">{diff.description}</p>
                </div>

                <div className="pt-4 border-t border-stone-200">
                  <p className="text-[11px] font-tabular text-stone-500 leading-normal">
                    {diff.proofLabel}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
