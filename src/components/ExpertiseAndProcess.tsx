import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FIRM_DATABASE, IndustrySector } from '../data/firmDatabase';

interface ExpertiseAndProcessProps {
  onSelectMandate: (sectionId: string, mandate: string) => void;
}

export const ExpertiseAndProcess: React.FC<ExpertiseAndProcessProps> = ({ onSelectMandate }) => {
  const [selectedIndustry, setSelectedIndustry] = useState<IndustrySector>(
    FIRM_DATABASE.industries[0]
  );
  const [activeProcessIndex, setActiveProcessIndex] = useState<number>(0);

  return (
    <div id="expertise">
      {/* =====================================================================
          SECTION 19: EXPERTISE / INDUSTRIES — ASYMMETRIC EDITORIAL MATRIX
      ===================================================================== */}
      <section
        aria-labelledby="expertise-heading"
        className="py-24 sm:py-32 bg-[#FAF8F5] text-[#141316] border-b border-stone-300"
      >
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-14 border-b border-stone-300">
            <div className="lg:col-span-4">
              <p className="text-xs font-tabular tracking-widest uppercase text-[#5B21B6]">
                SECTOR COVERAGE · NINE CLIENT VERTICALS
              </p>
            </div>
            <div className="lg:col-span-8 space-y-3">
              <h2
                id="expertise-heading"
                className="font-editorial text-4xl sm:text-5xl lg:text-[54px] font-medium tracking-tight leading-[1.08]"
              >
                Industries &amp; Institutional Mandates.
              </h2>
              <p className="text-base text-stone-600 max-w-2xl leading-relaxed">
                From high-velocity E-Commerce and Logistics corridors to Banking, MNCs, Non-Profits,
                and fellow Professional Tax Practitioners—our chambers tailor statutory audit and
                litigation strategy to each sector’s regulatory profile.
              </p>
            </div>
          </div>

          {/* Asymmetric Split: Left Sticky Sector Dossier + Right Varied Typographic Index */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pt-14 items-start">
            {/* Left 5 Columns: Active Sector Dossier */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 bg-[#12101B] text-[#FAF8F5] p-8 sm:p-10 border border-stone-800 relative">
              <div
                className="absolute top-0 left-0 right-0 h-1 bg-[#7C3AED]"
                aria-hidden="true"
              />
              <div className="flex items-center justify-between text-xs font-tabular text-stone-400 border-b border-white/10 pb-4">
                <span>SECTOR DOSSIER · {selectedIndustry.index} / 09</span>
                <span className="text-[#C4B5FD]">{selectedIndustry.category}</span>
              </div>

              <div className="py-6 space-y-4">
                <h3 className="font-editorial text-3xl sm:text-4xl font-medium text-white">
                  {selectedIndustry.name}
                </h3>
                <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                  {selectedIndustry.advisoryFocus}
                </p>
              </div>

              <div className="pt-5 border-t border-white/10 space-y-3">
                <p className="text-[11px] font-tabular uppercase tracking-widest text-stone-400">
                  Applicable Chambers Practice Areas
                </p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-[#C4B5FD]">
                  {selectedIndustry.relevantPracticeAreas.map((area, i) => (
                    <React.Fragment key={area}>
                      <span>{area}</span>
                      {i < selectedIndustry.relevantPracticeAreas.length - 1 && (
                        <span className="text-stone-600" aria-hidden="true">
                          ·
                        </span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-5 border-t border-white/10">
                <button
                  type="button"
                  onClick={() =>
                    onSelectMandate(
                      'consultation',
                      `${selectedIndustry.name} — Tax & Audit Consultation`
                    )
                  }
                  className="w-full py-3 px-4 bg-[#5B21B6] hover:bg-[#6D28D9] text-white text-xs font-medium tracking-wide flex items-center justify-between transition-colors cursor-pointer"
                >
                  <span>Consult on {selectedIndustry.name} Mandate</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right 7 Columns: Asymmetric Editorial Rhythm (Not 9 Identical Cards) */}
            <div className="lg:col-span-7 space-y-10">
              {/* Tier 1: Featured High-Complexity Sectors (Asymmetric 2-Column Editorial Blocks) */}
              <div>
                <p className="text-xs font-tabular uppercase tracking-widest text-stone-500 mb-4">
                  Primary High-Volume Litigation &amp; Audit Corridors
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-stone-300">
                  {FIRM_DATABASE.industries.slice(0, 4).map((sector) => {
                    const isActive = selectedIndustry.index === sector.index;
                    return (
                      <button
                        key={sector.index}
                        type="button"
                        onMouseEnter={() => setSelectedIndustry(sector)}
                        onClick={() => setSelectedIndustry(sector)}
                        className={`group text-left p-6 sm:p-7 border-r border-b border-stone-300 transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                          isActive
                            ? 'bg-white shadow-[inset_0_3px_0_0_#5B21B6]'
                            : 'bg-[#FAF8F5] hover:bg-white'
                        }`}
                      >
                        <div className="space-y-2.5">
                          <div className="flex items-center justify-between text-xs font-tabular">
                            <span className="text-[#5B21B6] font-semibold">{sector.index}</span>
                            <span className="text-stone-400">{sector.category}</span>
                          </div>
                          <h4 className="font-editorial text-2xl sm:text-3xl font-semibold text-[#141316] group-hover:text-[#4C1D95] transition-colors">
                            {sector.name}
                          </h4>
                          <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                            {sector.advisoryFocus}
                          </p>
                        </div>
                        <div className="mt-5 pt-3 border-t border-stone-200 flex items-center justify-between text-[11px] font-tabular text-stone-500">
                          <span>{sector.relevantPracticeAreas[0]}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#5B21B6] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Tier 2: Editorial Ledger List for Remaining 5 Client Verticals */}
              <div>
                <p className="text-xs font-tabular uppercase tracking-widest text-stone-500 mb-4">
                  Corporate, Institutional &amp; Practitioner Mandates
                </p>
                <div className="divide-y divide-stone-300 border-t border-b border-stone-300">
                  {FIRM_DATABASE.industries.slice(4).map((sector) => {
                    const isActive = selectedIndustry.index === sector.index;
                    return (
                      <button
                        key={sector.index}
                        type="button"
                        onMouseEnter={() => setSelectedIndustry(sector)}
                        onClick={() => setSelectedIndustry(sector)}
                        className={`w-full text-left py-5 px-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors duration-200 cursor-pointer group ${
                          isActive ? 'bg-white' : 'hover:bg-white/70'
                        }`}
                      >
                        <div className="flex items-baseline gap-4">
                          <span className="font-tabular text-xs font-semibold text-[#5B21B6]">
                            {sector.index}
                          </span>
                          <div>
                            <h4 className="font-editorial text-2xl font-semibold text-[#141316] group-hover:text-[#4C1D95] transition-colors">
                              {sector.name}
                            </h4>
                            <p className="text-xs text-stone-500 mt-0.5">{sector.advisoryFocus}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-tabular text-stone-500 shrink-0 self-end sm:self-center">
                          <span className="hidden md:inline">{sector.category}</span>
                          <ArrowUpRight className="w-4 h-4 text-[#5B21B6]" />
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 21: PROCESS — 4-STAGE JURISPRUDENTIAL TIMELINE
      ===================================================================== */}
      <section
        aria-labelledby="process-heading"
        className="py-24 sm:py-32 bg-[#0E0D14] text-[#FAF8F5] border-b border-white/10"
      >
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-16 border-b border-white/10">
            <div className="lg:col-span-4">
              <p className="text-xs font-tabular tracking-widest uppercase text-[#A78BFA]">
                METHODOLOGY · FOUR STAGES
              </p>
            </div>
            <div className="lg:col-span-8 space-y-3">
              <h2
                id="process-heading"
                className="font-editorial text-4xl sm:text-5xl font-medium text-white leading-[1.1]"
              >
                Litigation &amp; Advisory Execution Protocol.
              </h2>
              <p className="text-sm sm:text-base text-stone-400 max-w-2xl leading-relaxed">
                Every Show Cause Notice, appellate brief, and statutory audit engagement follows a
                structured four-stage progression from documentary intake to authority representation.
              </p>
            </div>
          </div>

          {/* Horizontal Progress Rail & 4-Column Timeline */}
          <div className="pt-14 relative">
            {/* Desktop Connecting Progress Line */}
            <div
              className="hidden lg:block absolute top-[82px] left-0 right-0 h-[1px] bg-white/15"
              aria-hidden="true"
            >
              <div
                className="h-full bg-[#8B5CF6] transition-all duration-500"
                style={{ width: `${((activeProcessIndex + 1) / 4) * 100}%` }}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {FIRM_DATABASE.process.map((stage, idx) => {
                const isCurrent = activeProcessIndex === idx;
                const isCompletedOrCurrent = idx <= activeProcessIndex;
                return (
                  <div
                    key={stage.number}
                    onMouseEnter={() => setActiveProcessIndex(idx)}
                    onClick={() => setActiveProcessIndex(idx)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setActiveProcessIndex(idx);
                      }
                    }}
                    className={`group relative pt-6 p-6 border transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                      isCurrent
                        ? 'bg-[#171424] border-[#8B5CF6]/60'
                        : 'bg-[#12101A]/60 border-white/10 hover:border-white/25'
                    }`}
                  >
                    {/* Stage Number Node */}
                    <div className="space-y-6">
                      <div className="flex items-center justify-between">
                        <span
                          className={`font-editorial text-5xl sm:text-6xl font-semibold leading-none transition-colors ${
                            isCompletedOrCurrent ? 'text-[#A78BFA]' : 'text-stone-600'
                          }`}
                        >
                          {stage.number}
                        </span>
                        <span
                          className={`w-2.5 h-2.5 rounded-full transition-colors ${
                            isCurrent ? 'bg-[#A78BFA] ring-4 ring-[#8B5CF6]/25' : 'bg-stone-700'
                          }`}
                          aria-hidden="true"
                        />
                      </div>

                      <div className="space-y-2">
                        <p className="text-[11px] font-tabular tracking-widest uppercase text-stone-400">
                          {stage.subtitle}
                        </p>
                        <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-white">
                          {stage.title}
                        </h3>
                      </div>

                      <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                        {stage.description}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-white/10 space-y-1.5">
                      {stage.deliverables.map((item) => (
                        <p
                          key={item}
                          className="text-[11px] font-tabular text-stone-400 flex items-center gap-2"
                        >
                          <span className="text-[#A78BFA]">—</span>
                          <span>{item}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
