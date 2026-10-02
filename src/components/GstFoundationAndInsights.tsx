import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, ExternalLink, X } from 'lucide-react';
import { ArticlePlaceholderSlot, FIRM_DATABASE } from '../data/firmDatabase';

interface GstFoundationAndInsightsProps {
  onSelectMandate: (sectionId: string, mandate: string) => void;
}

export const GstFoundationAndInsights: React.FC<GstFoundationAndInsightsProps> = ({
  onSelectMandate,
}) => {
  const [lectureImgError, setLectureImgError] = useState(false);
  const [selectedArticleSlot, setSelectedArticleSlot] = useState<ArticlePlaceholderSlot | null>(
    null
  );
  const [openFaqId, setOpenFaqId] = useState<string>('faq-official-1');
  const [showSuggestedFaqs, setShowSuggestedFaqs] = useState<boolean>(false);

  const leadSlot = FIRM_DATABASE.insightsArchive.sampleSlots[0];
  const secondarySlots = FIRM_DATABASE.insightsArchive.sampleSlots.slice(1, 3);
  const archiveSlots = FIRM_DATABASE.insightsArchive.sampleSlots.slice(3);

  const displayedFaqs = showSuggestedFaqs
    ? FIRM_DATABASE.faqs
    : FIRM_DATABASE.faqs.filter((f) => f.isSuppliedOfficial);

  return (
    <div>
      {/* =====================================================================
          SECTION 22: GST RESEARCH FOUNDATION — EDUCATIONAL INITIATIVE
      ===================================================================== */}
      <section
        id="training"
        aria-labelledby="foundation-heading"
        className="py-24 sm:py-32 bg-[#F4F1EA] text-[#141316] border-b border-stone-300"
      >
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
          {/* Top Institution Banner */}
          <div className="border border-stone-300 bg-white p-8 sm:p-12 lg:p-16 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 bottom-0 w-1.5 bg-[#5B21B6]"
              aria-hidden="true"
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="space-y-2">
                  <p className="text-xs font-tabular tracking-widest uppercase text-[#5B21B6]">
                    {FIRM_DATABASE.gstFoundation.eyebrow}
                  </p>
                  <h2
                    id="foundation-heading"
                    className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-semibold text-[#141316] tracking-tight leading-[1.06]"
                  >
                    {FIRM_DATABASE.gstFoundation.name}
                  </h2>
                  <p className="font-editorial italic text-xl sm:text-2xl text-stone-600">
                    {FIRM_DATABASE.gstFoundation.tagline}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-stone-600 leading-relaxed max-w-2xl">
                  {FIRM_DATABASE.gstFoundation.overview}
                </p>

                {/* Explicit Placeholders for Unsupplied Batch Schedule & Registration Link */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-stone-200 text-xs">
                  <div className="p-4 bg-[#FAF8F5] border border-stone-200">
                    <span className="font-tabular text-stone-500 block uppercase tracking-wider text-[11px]">
                      Next Practitioner Cohort
                    </span>
                    <span className="font-tabular text-sm font-semibold text-[#141316] mt-1 block">
                      {FIRM_DATABASE.gstFoundation.placeholders.upcomingBatchDate}
                    </span>
                  </div>
                  <div className="p-4 bg-[#FAF8F5] border border-stone-200">
                    <span className="font-tabular text-stone-500 block uppercase tracking-wider text-[11px]">
                      Direct Portal Enrollment
                    </span>
                    <span className="font-tabular text-sm font-semibold text-[#5B21B6] mt-1 block">
                      {FIRM_DATABASE.gstFoundation.placeholders.registrationUrl}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() =>
                      onSelectMandate('consultation', 'GST Research Foundation — Course Inquiry')
                    }
                    className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#5B21B6] hover:bg-[#6D28D9] text-white text-xs font-medium tracking-wide transition-colors cursor-pointer"
                  >
                    <span>Request Course Syllabus &amp; Enrollment Info</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <a
                    href="#faq"
                    className="inline-flex items-center gap-2 px-5 py-3.5 border border-stone-300 hover:border-[#5B21B6] text-xs font-medium text-[#141316] transition-colors"
                  >
                    <span>Read Course FAQs</span>
                  </a>
                </div>
              </div>

              {/* Right Image */}
              <div className="lg:col-span-5">
                <figure className="relative overflow-hidden border border-stone-300 bg-[#12101B] aspect-[4/3] group">
                  {!lectureImgError ? (
                    <img
                      src={FIRM_DATABASE.assets.gstFoundationHall}
                      alt="GST Research Foundation executive lecture and practical training studio"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      onError={() => setLectureImgError(true)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[#1D1630] to-[#0D0B12] flex items-center justify-center p-6 text-stone-300 text-xs font-tabular">
                      [GST RESEARCH FOUNDATION LECTURE HALL]
                    </div>
                  )}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#0D0B12]/80 via-transparent to-transparent"
                    aria-hidden="true"
                  />
                  <div className="absolute bottom-4 left-4 right-4 text-xs text-stone-200 flex items-center justify-between">
                    <span>GST Portal · Tally · Case Studies · GSTAT</span>
                    <span className="font-tabular text-[#C4B5FD]">PRACTICAL LAB</span>
                  </div>
                </figure>
              </div>
            </div>

            {/* 4-Module Practical Curriculum Grid */}
            <div className="mt-12 pt-10 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {FIRM_DATABASE.gstFoundation.curriculumPillars.map((mod) => (
                <div key={mod.code} className="space-y-2.5">
                  <span className="font-tabular text-xs font-semibold text-[#5B21B6]">
                    {mod.code}
                  </span>
                  <h3 className="font-editorial text-2xl font-semibold text-[#141316]">
                    {mod.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">{mod.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 23: INSIGHTS / ARTICLES — 3-TIER EDITORIAL PUBLICATION ARCHIVE
      ===================================================================== */}
      <section
        id="insights"
        aria-labelledby="insights-heading"
        className="py-24 sm:py-32 bg-[#FAF8F5] text-[#141316] border-b border-stone-300"
      >
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
          {/* Header + Verified TaxGuru Record */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-14 border-b border-stone-300 items-end">
            <div className="lg:col-span-7 space-y-3">
              <p className="text-xs font-tabular tracking-widest uppercase text-[#5B21B6]">
                {FIRM_DATABASE.insightsArchive.eyebrow}
              </p>
              <h2
                id="insights-heading"
                className="font-editorial text-4xl sm:text-5xl lg:text-[54px] font-medium tracking-tight leading-[1.08]"
              >
                {FIRM_DATABASE.insightsArchive.headline}
              </h2>
              <p className="text-sm sm:text-base text-stone-600 max-w-2xl leading-relaxed">
                {FIRM_DATABASE.insightsArchive.subheadline}
              </p>
            </div>

            <div className="lg:col-span-5 lg:text-right space-y-3">
              <div className="inline-block text-left p-5 bg-white border border-stone-300">
                <p className="text-[11px] font-tabular uppercase tracking-wider text-stone-500">
                  Verified Public Publication Profile
                </p>
                <p className="font-editorial text-xl font-semibold text-[#141316] mt-0.5">
                  {FIRM_DATABASE.insightsArchive.publicProfileReference.platformName}
                </p>
                <div className="mt-2 flex items-center gap-3 text-xs font-tabular text-[#5B21B6]">
                  <span>{FIRM_DATABASE.insightsArchive.publicProfileReference.contributionsCount}</span>
                  <span>·</span>
                  <span>{FIRM_DATABASE.insightsArchive.publicProfileReference.viewsCount}</span>
                </div>
                <a
                  href={FIRM_DATABASE.insightsArchive.publicProfileReference.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium text-stone-800 hover:text-[#5B21B6] underline underline-offset-4"
                >
                  <span>Visit TaxGuru Public Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* 3-Tier Editorial Layout (Lead Story + Secondary Features + Archive List) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-14">
            {/* Tier 1: Lead Monograph Slot (7 Columns) */}
            <article className="lg:col-span-7 bg-white border border-stone-300 p-8 sm:p-10 flex flex-col justify-between relative">
              <div
                className="absolute top-0 left-0 right-0 h-1 bg-[#5B21B6]"
                aria-hidden="true"
              />
              <div className="space-y-5">
                <div className="flex items-center gap-2 text-xs font-tabular text-stone-500">
                  <span className="text-[#5B21B6] font-semibold">LEAD MONOGRAPH SLOT</span>
                  <span>·</span>
                  <span>{leadSlot.category}</span>
                  <span>·</span>
                  <span>{leadSlot.placeholderDate}</span>
                </div>

                <h3 className="font-editorial text-3xl sm:text-4xl font-semibold text-[#141316] leading-tight">
                  {leadSlot.placeholderTitle}
                </h3>

                <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                  {leadSlot.editorialNote}
                </p>
              </div>

              <div className="mt-10 pt-6 border-t border-stone-200 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-tabular text-stone-500">
                  {leadSlot.sourceReference}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedArticleSlot(leadSlot)}
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#5B21B6] hover:text-[#3B0764] cursor-pointer"
                >
                  <span>Inspect Article Template Structure</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </article>

            {/* Tier 2: Secondary Briefing Slots (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {secondarySlots.map((slot) => (
                <article
                  key={slot.slotId}
                  className="bg-white border border-stone-300 p-6 sm:p-7 flex flex-col justify-between flex-1"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs font-tabular text-stone-500">
                      <span className="text-[#5B21B6] font-medium">{slot.category}</span>
                      <span>·</span>
                      <span>{slot.placeholderDate}</span>
                    </div>
                    <h3 className="font-editorial text-2xl font-semibold text-[#141316] leading-snug">
                      {slot.placeholderTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {slot.editorialNote}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-stone-200 flex items-center justify-between">
                    <span className="text-[11px] font-tabular text-stone-400">{slot.slotId}</span>
                    <button
                      type="button"
                      onClick={() => setSelectedArticleSlot(slot)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#5B21B6] hover:underline cursor-pointer"
                    >
                      <span>Preview Slot</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>

          {/* Tier 3: Compact Archival Index Rows */}
          <div className="mt-10 border-t border-b border-stone-300 divide-y divide-stone-300">
            {archiveSlots.map((slot) => (
              <div
                key={slot.slotId}
                className="py-5 px-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:bg-white transition-colors"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 text-xs font-tabular text-stone-500">
                    <span className="text-[#5B21B6] font-medium">{slot.category}</span>
                    <span>·</span>
                    <span>{slot.placeholderDate}</span>
                  </div>
                  <h4 className="font-editorial text-xl sm:text-2xl font-semibold text-[#141316]">
                    {slot.placeholderTitle}
                  </h4>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedArticleSlot(slot)}
                  className="self-start sm:self-center inline-flex items-center gap-1.5 text-xs font-medium text-[#5B21B6] hover:underline shrink-0 cursor-pointer"
                >
                  <span>Inspect Slot</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 24: FAQ — SUPPLIED OFFICIAL FAQS + SUGGESTED TOGGLE
      ===================================================================== */}
      <section
        id="faq"
        aria-labelledby="faq-heading"
        className="py-24 sm:py-32 bg-[#FAF8F5] text-[#141316]"
      >
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left 5 Columns: FAQ Header & Content Integrity Filter */}
            <div className="lg:col-span-5 space-y-6">
              <p className="text-xs font-tabular tracking-widest uppercase text-[#5B21B6]">
                FREQUENTLY ASKED QUESTIONS
              </p>
              <h2
                id="faq-heading"
                className="font-editorial text-4xl sm:text-5xl font-medium tracking-tight leading-[1.1]"
              >
                Course Enrollment &amp; Chambers Protocol.
              </h2>
              <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
                Displaying the official FAQs supplied in the client database. You may also preview
                clearly marked suggested FAQ placeholders for future expansion.
              </p>

              {/* Interactive Segmented Filter (Official Only vs Include Suggested Drafts) */}
              <div className="pt-2 space-y-2">
                <p className="text-[11px] font-tabular uppercase tracking-wider text-stone-500">
                  FAQ Display Mode
                </p>
                <div className="inline-flex p-1 bg-stone-200/80 border border-stone-300">
                  <button
                    type="button"
                    onClick={() => setShowSuggestedFaqs(false)}
                    className={`px-3.5 py-2 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                      !showSuggestedFaqs
                        ? 'bg-[#141316] text-white'
                        : 'text-stone-600 hover:text-[#141316]'
                    }`}
                  >
                    Official Supplied FAQs (2)
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowSuggestedFaqs(true)}
                    className={`px-3.5 py-2 text-xs font-medium transition-colors cursor-pointer whitespace-nowrap ${
                      showSuggestedFaqs
                        ? 'bg-[#141316] text-white'
                        : 'text-stone-600 hover:text-[#141316]'
                    }`}
                  >
                    + Preview Suggested Drafts (4)
                  </button>
                </div>
              </div>
            </div>

            {/* Right 7 Columns: Accordion */}
            <div className="lg:col-span-7 divide-y divide-stone-300 border-t border-b border-stone-300">
              {displayedFaqs.map((faq, index) => {
                const isOpen = openFaqId === faq.id;
                return (
                  <div key={faq.id} className="py-6">
                    <button
                      type="button"
                      onClick={() => setOpenFaqId(isOpen ? '' : faq.id)}
                      aria-expanded={isOpen}
                      className="w-full text-left flex items-start justify-between gap-4 cursor-pointer group"
                    >
                      <div className="space-y-1.5">
                        <div className="flex items-center gap-2 text-xs font-tabular">
                          <span className="text-[#5B21B6] font-semibold">0{index + 1}</span>
                          <span>·</span>
                          <span
                            className={
                              faq.isSuppliedOfficial ? 'text-stone-500' : 'text-amber-800 font-medium'
                            }
                          >
                            {faq.verificationTag}
                          </span>
                        </div>
                        <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-[#141316] group-hover:text-[#5B21B6] transition-colors">
                          {faq.question}
                        </h3>
                      </div>
                      <span
                        className={`mt-2 w-8 h-8 border border-stone-300 flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen ? 'rotate-180 bg-[#5B21B6] text-white border-[#5B21B6]' : ''
                        }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? 'max-h-64 opacity-100 mt-4' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <p className="text-sm sm:text-base text-stone-600 leading-relaxed pl-6 border-l-2 border-[#5B21B6]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Article Placeholder Inspection Modal */}
      {selectedArticleSlot && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-modal-title"
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        >
          <div className="bg-[#FAF8F5] text-[#141316] border border-stone-300 max-w-2xl w-full p-6 sm:p-10 relative space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-stone-300 pb-4">
              <div className="text-xs font-tabular text-[#5B21B6]">
                {selectedArticleSlot.slotId} · {selectedArticleSlot.category}
              </div>
              <button
                type="button"
                onClick={() => setSelectedArticleSlot(null)}
                aria-label="Close article template preview"
                className="p-1.5 text-stone-500 hover:text-[#141316] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-tabular text-stone-500">
                Publication Date: {selectedArticleSlot.placeholderDate} · Author:{' '}
                {FIRM_DATABASE.founder.name} ({FIRM_DATABASE.founder.credentials})
              </p>
              <h3
                id="article-modal-title"
                className="font-editorial text-2xl sm:text-3xl font-semibold text-[#141316]"
              >
                {selectedArticleSlot.placeholderTitle}
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                {selectedArticleSlot.editorialNote}
              </p>
            </div>

            <div className="p-4 bg-white border border-stone-200 text-xs text-stone-600 space-y-1.5">
              <p className="font-semibold text-[#141316]">Content Integrity Notice:</p>
              <p>
                Per strict factual guidelines, no fabricated article titles or publication dates
                are displayed. Once the client selects specific articles from CA Rajender Arora’s
                59+ published contributions on TaxGuru, the verbatim title, publication date, and
                full text populate this template.
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setSelectedArticleSlot(null);
                  onSelectMandate('consultation', selectedArticleSlot.category);
                }}
                className="px-4 py-2.5 bg-[#5B21B6] text-white text-xs font-medium cursor-pointer"
              >
                Consult on {selectedArticleSlot.category}
              </button>
              <button
                type="button"
                onClick={() => setSelectedArticleSlot(null)}
                className="px-4 py-2.5 border border-stone-300 text-xs font-medium cursor-pointer"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
