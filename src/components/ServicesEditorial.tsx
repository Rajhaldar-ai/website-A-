import React, { useState } from 'react';
import { ArrowUpRight, ChevronRight } from 'lucide-react';
import { FIRM_DATABASE } from '../data/firmDatabase';

interface ServicesEditorialProps {
  onSelectMandate: (sectionId: string, mandate: string) => void;
}

export const ServicesEditorial: React.FC<ServicesEditorialProps> = ({ onSelectMandate }) => {
  const [activeLitigationId, setActiveLitigationId] = useState<string>('gst-scn-appeals');
  const [activeAuditId, setActiveAuditId] = useState<string>('statutory-audits');
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const group01 = FIRM_DATABASE.serviceGroups[0];
  const group02 = FIRM_DATABASE.serviceGroups[1];
  const group03 = FIRM_DATABASE.serviceGroups[2];

  const handleImgError = (key: string) => {
    setImgErrors((prev) => ({ ...prev, [key]: true }));
  };

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-24 sm:py-32 bg-[#FAF8F5] text-[#141316] border-b border-stone-200"
    >
      <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16 sm:pb-20 border-b border-stone-300">
          <div className="lg:col-span-4">
            <p className="text-xs font-tabular tracking-widest uppercase text-[#5B21B6]">
              PRACTICE ARCHITECTURE · THREE PILLARS
            </p>
          </div>
          <div className="lg:col-span-8 space-y-4">
            <h2
              id="services-heading"
              className="font-editorial text-4xl sm:text-5xl lg:text-[56px] font-medium tracking-tight leading-[1.08] text-[#141316]"
            >
              Statutory Representation, Corporate Assurance &amp; Practitioner Education.
            </h2>
            <p className="text-base sm:text-lg text-stone-600 max-w-2xl leading-relaxed">
              Structured around three distinct chambers mandates—combining GST litigation defense,
              statutory &amp; systems auditing, and applied professional training through the GST
              Research Foundation.
            </p>
          </div>
        </div>

        {/* =====================================================================
            SERVICE 01: LARGE NUMBER + TYPOGRAPHIC LEDGER + EDITORIAL ARCHIVE CROP
        ===================================================================== */}
        <div className="py-16 sm:py-24 border-b border-stone-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* Left Column: Monumental Index + Title + Editorial Visual */}
            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-baseline gap-5">
                <span className="font-editorial text-6xl sm:text-7xl font-semibold text-[#5B21B6] leading-none">
                  {group01.number}
                </span>
                <div>
                  <p className="text-xs font-tabular tracking-widest uppercase text-stone-500">
                    {group01.eyebrow}
                  </p>
                  <h3 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#141316] mt-1">
                    {group01.categoryTitle}
                  </h3>
                </div>
              </div>

              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                {group01.editorialLead}
              </p>

              {/* Editorial Crop Image with Purple Edge Accent & Hover Zoom */}
              <figure className="group relative overflow-hidden border border-stone-300 bg-[#12101B]">
                <div
                  className="absolute top-0 bottom-0 left-0 w-1 bg-[#5B21B6] z-10"
                  aria-hidden="true"
                />
                <div className="aspect-[4/3] overflow-hidden relative">
                  {!imgErrors.archive ? (
                    <img
                      src={FIRM_DATABASE.assets.taxLawArchive}
                      alt="Bound Indian tax statutes and GST jurisprudence reference volumes on a dark walnut advisory desk"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      onError={() => handleImgError('archive')}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#181424] to-[#0C0B10] flex items-center justify-center p-6 text-stone-300 text-xs font-tabular">
                      [EDITORIAL PHOTOGRAPHY · TAX &amp; STATUTORY JURISPRUDENCE ARCHIVE]
                    </div>
                  )}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#0C0B10]/80 via-[#0C0B10]/20 to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between text-xs text-stone-200">
                    <span>Statutory Replies · Adjudication · Appellate Forums</span>
                    <span className="font-tabular text-[#C4B5FD]">FCA + LLB</span>
                  </div>
                </div>
              </figure>
            </div>

            {/* Right Column: Interactive Editorial Mandate Rows */}
            <div className="lg:col-span-7 divide-y divide-stone-300 border-t border-b border-stone-300">
              {group01.services.map((service, idx) => {
                const isExpanded = activeLitigationId === service.id;
                return (
                  <div
                    key={service.id}
                    onMouseEnter={() => setActiveLitigationId(service.id)}
                    className={`group transition-colors duration-300 ${
                      isExpanded ? 'bg-white' : 'bg-transparent hover:bg-white/60'
                    }`}
                  >
                    <div className="p-6 sm:p-8">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 text-xs font-tabular text-stone-500">
                            <span className="text-[#5B21B6] font-medium">01.{idx + 1}</span>
                            <span>·</span>
                            <span>STATUTORY REPRESENTATION</span>
                          </div>
                          <h4 className="font-editorial text-2xl sm:text-3xl font-medium text-[#141316] group-hover:text-[#4C1D95] transition-colors">
                            <button
                              type="button"
                              onClick={() => setActiveLitigationId(service.id)}
                              className="text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-[#5B21B6]"
                            >
                              {service.title}
                            </button>
                          </h4>
                        </div>

                        <button
                          type="button"
                          onClick={() => onSelectMandate('consultation', service.mandateValue)}
                          aria-label={`${service.ctaLabel} for ${service.title}`}
                          className="shrink-0 w-10 h-10 border border-stone-300 group-hover:border-[#5B21B6] group-hover:bg-[#5B21B6] group-hover:text-white flex items-center justify-center transition-all duration-300 cursor-pointer"
                        >
                          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </button>
                      </div>

                      <p className="mt-3 text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl">
                        {service.summary}
                      </p>

                      {/* Secondary Information Reveal */}
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          isExpanded ? 'max-h-72 opacity-100 mt-5 pt-5 border-t border-stone-200' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="text-xs font-tabular uppercase tracking-wider text-stone-500 mb-3">
                          Included Mandate Scope
                        </p>
                        <ul className="space-y-2 text-xs sm:text-sm text-stone-700">
                          {service.scopeDetails.map((item) => (
                            <li key={item} className="flex items-baseline gap-2.5">
                              <span className="w-1.5 h-1.5 bg-[#5B21B6] shrink-0 translate-y-[-2px]" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-5">
                          <button
                            type="button"
                            onClick={() => onSelectMandate('consultation', service.mandateValue)}
                            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-[#5B21B6] hover:text-[#3B0764] transition-colors cursor-pointer"
                          >
                            <span>{service.ctaLabel}</span>
                            <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =====================================================================
            SERVICE 02: SPLIT ARCHITECTURAL IMAGE + 6-MANDATE CORPORATE MATRIX
        ===================================================================== */}
        <div className="py-16 sm:py-24 border-b border-stone-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-end mb-12">
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-baseline gap-4">
                <span className="font-editorial text-6xl sm:text-7xl font-semibold text-[#5B21B6] leading-none">
                  {group02.number}
                </span>
                <div>
                  <p className="text-xs font-tabular tracking-widest uppercase text-stone-500">
                    {group02.eyebrow}
                  </p>
                  <h3 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#141316] mt-1">
                    {group02.categoryTitle}
                  </h3>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5">
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                {group02.editorialLead}
              </p>
            </div>
          </div>

          {/* Asymmetric Split: Wide Architectural Image Left + Structured 2x3 Matrix Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            <div className="lg:col-span-5 relative group overflow-hidden border border-stone-300 bg-[#0F0D15] min-h-[340px] flex flex-col justify-between">
              {!imgErrors.boardroom ? (
                <img
                  src={FIRM_DATABASE.assets.corporateAuditBoardroom}
                  alt="Modern corporate advisory boardroom representing statutory audit and corporate finance governance"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={() => handleImgError('boardroom')}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 bg-gradient-to-br from-[#191528] to-[#0C0B10]" />
              )}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0B0A0F] via-[#0B0A0F]/55 to-[#0B0A0F]/20"
                aria-hidden="true"
              />

              <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between text-xs font-tabular text-stone-300 border-b border-white/10">
                <span>ASSURANCE &amp; GOVERNANCE</span>
                <span className="text-[#C4B5FD]">STATUTORY · CISA · FINANCE</span>
              </div>

              <div className="relative z-10 p-6 sm:p-8 mt-auto space-y-4">
                <p className="font-editorial text-2xl sm:text-3xl text-white font-medium leading-snug">
                  Independent Financial &amp; Information Systems Assurance
                </p>
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                  Delivering Statutory Audits, Risk Assurance, Retail Audits, IT / CISA Auditing,
                  Corporate Law Advisory, and Project Financing for corporates and institutions.
                </p>
                <button
                  type="button"
                  onClick={() => onSelectMandate('consultation', group02.mandateKey)}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#5B21B6] hover:bg-[#6D28D9] text-white text-xs font-medium tracking-wide transition-colors cursor-pointer"
                >
                  <span>{group02.primaryCta}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 border-t border-l border-stone-300">
              {group02.services.map((service, idx) => {
                const isSelected = activeAuditId === service.id;
                return (
                  <div
                    key={service.id}
                    onMouseEnter={() => setActiveAuditId(service.id)}
                    onClick={() => onSelectMandate('consultation', service.mandateValue)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        onSelectMandate('consultation', service.mandateValue);
                      }
                    }}
                    className={`group p-6 sm:p-7 border-r border-b border-stone-300 flex flex-col justify-between transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? 'bg-white shadow-[inset_0_2px_0_0_#5B21B6]'
                        : 'bg-[#FAF8F5] hover:bg-white'
                    }`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-tabular text-stone-400">
                        <span className="text-[#5B21B6] font-medium">02.{idx + 1}</span>
                        <ArrowUpRight className="w-4 h-4 text-stone-400 group-hover:text-[#5B21B6] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                      <h4 className="font-editorial text-2xl font-semibold text-[#141316] group-hover:text-[#4C1D95] transition-colors">
                        {service.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                        {service.summary}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-stone-200/80 flex items-center justify-between text-[11px] font-tabular text-stone-500 group-hover:text-[#5B21B6]">
                      <span>{service.scopeDetails[0]}</span>
                      <span className="underline underline-offset-4">Select</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* =====================================================================
            SERVICE 03: LARGE TYPOGRAPHIC COMPOSITION WITH TRAINING VISUAL
        ===================================================================== */}
        <div className="pt-16 sm:pt-24">
          <div className="bg-[#110F18] text-[#FAF8F5] border border-stone-800 overflow-hidden relative">
            <div
              className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#5B21B6] via-[#8B5CF6] to-transparent"
              aria-hidden="true"
            />
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-between space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs font-tabular tracking-widest uppercase text-[#A78BFA]">
                    <span>{group03.number}</span>
                    <span>·</span>
                    <span>{group03.eyebrow}</span>
                  </div>

                  <h3 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-[1.12]">
                    {group03.categoryTitle} — Applied Practitioner Mastery
                  </h3>

                  <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-2xl">
                    {group03.editorialLead}
                  </p>
                </div>

                {/* Clean Typographic Curriculum Strip (Zero Pills) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 gap-x-6 pt-6 border-t border-white/10 text-xs text-stone-300">
                  <div>
                    <span className="font-tabular text-[#A78BFA] block mb-0.5">03.1</span>
                    <span className="font-medium text-white">Professional GST Courses</span>
                  </div>
                  <div>
                    <span className="font-tabular text-[#A78BFA] block mb-0.5">03.2</span>
                    <span className="font-medium text-white">Practical Training</span>
                  </div>
                  <div>
                    <span className="font-tabular text-[#A78BFA] block mb-0.5">03.3</span>
                    <span className="font-medium text-white">Live GST Portal Workflows</span>
                  </div>
                  <div>
                    <span className="font-tabular text-[#A78BFA] block mb-0.5">03.4</span>
                    <span className="font-medium text-white">Tally GST Integration</span>
                  </div>
                  <div>
                    <span className="font-tabular text-[#A78BFA] block mb-0.5">03.5</span>
                    <span className="font-medium text-white">Real-World Case Studies</span>
                  </div>
                  <div>
                    <span className="font-tabular text-[#A78BFA] block mb-0.5">03.6</span>
                    <span className="font-medium text-white">GSTAT-Related Learning</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => onSelectMandate('training', 'GST Research Foundation — Course Inquiry')}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#5B21B6] hover:bg-[#6D28D9] text-white text-xs font-medium tracking-wide transition-colors cursor-pointer"
                  >
                    <span>Explore GST Research Foundation</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onSelectMandate('consultation', 'GST Research Foundation — Course Inquiry')}
                    className="inline-flex items-center gap-2 px-5 py-3 bg-white/5 hover:bg-white/10 border border-white/15 text-stone-200 text-xs font-medium tracking-wide transition-colors cursor-pointer"
                  >
                    <span>Inquire About Training Modules</span>
                  </button>
                </div>
              </div>

              {/* Right Training Visual */}
              <div className="lg:col-span-5 relative min-h-[280px] overflow-hidden group border-t lg:border-t-0 lg:border-l border-white/10">
                {!imgErrors.training ? (
                  <img
                    src={FIRM_DATABASE.assets.gstFoundationHall}
                    alt="Executive seminar and GST training hall representing the GST Research Foundation"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    onError={() => handleImgError('training')}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#1F1633] to-[#0D0B12]" />
                )}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#110F18] via-[#110F18]/40 to-transparent"
                  aria-hidden="true"
                />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#0C0B10]/90 backdrop-blur-md border border-white/15">
                  <p className="text-[11px] font-tabular uppercase tracking-wider text-[#C4B5FD]">
                    ASSOCIATED EDUCATIONAL INITIATIVE
                  </p>
                  <p className="font-editorial text-xl text-white mt-0.5">
                    {FIRM_DATABASE.identity.educationalInitiative}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
