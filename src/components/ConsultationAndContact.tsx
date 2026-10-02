import React, { useEffect, useState } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  ExternalLink,
  FileText,
  MapPin,
  X,
} from 'lucide-react';
import { FIRM_DATABASE } from '../data/firmDatabase';

interface ConsultationAndContactProps {
  selectedMandate: string;
  onNavigate: (sectionId: string, mandate?: string) => void;
}

const SERVICE_OPTIONS = [
  'Corporate Consultation',
  'GST SCN Management & Appeals',
  'ITC Optimization & Refund Filing',
  'Search / Seizure / Transit Detention Defense',
  'Hire a Tax Counsel',
  'Statutory Audits',
  'Risk Assurance',
  'Retail Audits',
  'IT / CISA Auditing',
  'Corporate Law Advisory',
  'Project Financing',
  'GST Research Foundation — Course Inquiry',
];

export const ConsultationAndContact: React.FC<ConsultationAndContactProps> = ({
  selectedMandate,
  onNavigate,
}) => {
  const [name, setName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [serviceRequired, setServiceRequired] = useState(
    selectedMandate || 'Corporate Consultation'
  );
  const [message, setMessage] = useState('');
  const [demoFileName, setDemoFileName] = useState<string>('');
  const [formError, setFormError] = useState<string>('');
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    businessName: string;
    serviceRequired: string;
    referenceCode: string;
  } | null>(null);

  const [activeLocationIndex, setActiveLocationIndex] = useState<0 | 1>(0);
  const [legalModal, setLegalModal] = useState<'disclaimer' | 'privacy' | null>(null);

  useEffect(() => {
    if (selectedMandate) {
      setServiceRequired(selectedMandate);
    }
  }, [selectedMandate]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!name.trim()) {
      setFormError('Please enter your full name.');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      setFormError('Please provide a valid corporate or personal email address.');
      return;
    }
    if (phone.trim().length < 7) {
      setFormError('Please provide a valid contact phone number.');
      return;
    }

    const refCode = `RAA-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedData({
      name: name.trim(),
      businessName: businessName.trim() || 'Individual / Unspecified Entity',
      serviceRequired,
      referenceCode: refCode,
    });
  };

  const handleResetForm = () => {
    setSubmittedData(null);
    setName('');
    setBusinessName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setDemoFileName('');
  };

  const locations = [
    FIRM_DATABASE.contact.primaryAddress,
    FIRM_DATABASE.contact.secondaryAddress,
  ];
  const currentLocation = locations[activeLocationIndex];

  return (
    <div>
      {/* =====================================================================
          SECTION 25 & 40: DRAMATIC DARK CONSULTATION CTA & FORM
      ===================================================================== */}
      <section
        id="consultation"
        aria-labelledby="consultation-heading"
        className="py-24 sm:py-32 bg-[#0B0A0F] text-[#FAF8F5] border-t border-b border-white/10 relative overflow-hidden"
      >
        {/* Subtle Ambient Purple Glow */}
        <div
          className="absolute -top-24 left-1/3 w-[560px] h-[560px] rounded-full bg-[#5B21B6]/15 blur-[150px] pointer-events-none"
          aria-hidden="true"
        />

        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left 5 Columns: Dramatic Editorial Copy & Mandate Context */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <p className="text-xs font-tabular tracking-widest uppercase text-[#A78BFA]">
                  CHAMBERS INTAKE · CONSULTATION &amp; EVALUATION
                </p>
                <h2
                  id="consultation-heading"
                  className="font-editorial text-4xl sm:text-5xl lg:text-[54px] font-medium text-white tracking-tight leading-[1.06]"
                >
                  Book a Corporate Consultation.
                </h2>
              </div>

              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                Engage Rajinder Arora &amp; Associates for structured counsel on GST Show Cause
                Notices (SCNs), appellate representation, Input Tax Credit (ITC) reconciliations,
                statutory &amp; IT/CISA audits, or practitioner training through the GST Research
                Foundation.
              </p>

              {/* Quick Mandate Pre-select Buttons */}
              <div className="space-y-3 pt-2">
                <p className="text-[11px] font-tabular uppercase tracking-widest text-stone-400">
                  Direct Engagement Pathways
                </p>
                <div className="flex flex-col gap-2.5">
                  {[
                    'Book a Corporate Consultation',
                    'Consult on GST SCN Notices',
                    'Submit Case Files / Notice for Evaluation',
                    'Hire a Tax Counsel',
                  ].map((ctaOption) => {
                    const isCurrent = serviceRequired === ctaOption;
                    return (
                      <button
                        key={ctaOption}
                        type="button"
                        onClick={() => setServiceRequired(ctaOption)}
                        className={`text-left px-4 py-3 border text-xs font-medium flex items-center justify-between transition-colors cursor-pointer ${
                          isCurrent
                            ? 'bg-[#5B21B6]/30 border-[#8B5CF6] text-white'
                            : 'bg-white/[0.03] border-white/10 text-stone-300 hover:border-white/25 hover:text-white'
                        }`}
                      >
                        <span>{ctaOption}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#A78BFA]" />
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="p-5 bg-white/[0.03] border border-white/10 text-xs text-stone-400 space-y-1.5 leading-relaxed">
                <p className="text-stone-200 font-medium">Professional Advisory Notice</p>
                <p>
                  Submitting an inquiry or notice summary initiates a preliminary conflict and
                  jurisprudential intake check. It does not constitute a formal legal opinion or
                  guarantee of litigation outcome prior to formal engagement.
                </p>
              </div>
            </div>

            {/* Right 7 Columns: Consultation & Case Evaluation Form */}
            <div className="lg:col-span-7 bg-[#12101B] border border-white/15 p-6 sm:p-10 lg:p-12 relative">
              <div
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5B21B6] via-[#8B5CF6] to-transparent"
                aria-hidden="true"
              />

              {submittedData ? (
                <div className="py-10 space-y-6 text-left">
                  <div className="w-12 h-12 bg-[#5B21B6]/25 border border-[#8B5CF6] flex items-center justify-center text-[#C4B5FD]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-tabular uppercase tracking-widest text-[#A78BFA]">
                      DEMO INTAKE RECORDED · REF {submittedData.referenceCode}
                    </p>
                    <h3 className="font-editorial text-3xl sm:text-4xl text-white font-medium">
                      Consultation Request Prepared
                    </h3>
                    <p className="text-sm text-stone-300 leading-relaxed max-w-xl">
                      Thank you, <strong className="text-white">{submittedData.name}</strong> (
                      {submittedData.businessName}). Your request regarding{' '}
                      <strong className="text-[#C4B5FD]">{submittedData.serviceRequired}</strong>{' '}
                      has been formatted in this demonstration environment.
                    </p>
                  </div>

                  <div className="p-4 bg-black/40 border border-white/10 text-xs font-tabular text-stone-400 space-y-1">
                    <p>CHAMBERS HOURS: {FIRM_DATABASE.contact.hours.full}</p>
                    <p>PRIMARY CHAMBERS: {FIRM_DATABASE.contact.primaryAddress.full}</p>
                  </div>

                  <button
                    type="button"
                    onClick={handleResetForm}
                    className="px-5 py-3 bg-[#5B21B6] hover:bg-[#6D28D9] text-white text-xs font-medium tracking-wide transition-colors cursor-pointer"
                  >
                    Submit Another Consultation Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} noValidate className="space-y-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <h3 className="font-editorial text-2xl sm:text-3xl text-white font-medium">
                      Chambers Consultation Dossier
                    </h3>
                    <span className="text-[11px] font-tabular text-[#A78BFA]">
                      DEMO INTAKE INTERFACE
                    </span>
                  </div>

                  {formError && (
                    <div
                      role="alert"
                      className="p-3.5 bg-red-950/60 border border-red-500/50 text-xs text-red-200"
                    >
                      {formError}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="consult-name"
                        className="block text-xs font-tabular uppercase tracking-wider text-stone-300 mb-2"
                      >
                        Full Name *
                      </label>
                      <input
                        id="consult-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g., Vikram Mehta"
                        className="w-full px-4 py-3 bg-[#0B0A0F] border border-white/15 focus:border-[#8B5CF6] text-sm text-white placeholder:text-stone-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="consult-business"
                        className="block text-xs font-tabular uppercase tracking-wider text-stone-300 mb-2"
                      >
                        Business / Entity Name
                      </label>
                      <input
                        id="consult-business"
                        type="text"
                        value={businessName}
                        onChange={(e) => setBusinessName(e.target.value)}
                        placeholder="Corporate / Firm / Institution Name"
                        className="w-full px-4 py-3 bg-[#0B0A0F] border border-white/15 focus:border-[#8B5CF6] text-sm text-white placeholder:text-stone-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="consult-email"
                        className="block text-xs font-tabular uppercase tracking-wider text-stone-300 mb-2"
                      >
                        Email Address *
                      </label>
                      <input
                        id="consult-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="w-full px-4 py-3 bg-[#0B0A0F] border border-white/15 focus:border-[#8B5CF6] text-sm text-white placeholder:text-stone-600 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="consult-phone"
                        className="block text-xs font-tabular uppercase tracking-wider text-stone-300 mb-2"
                      >
                        Phone Number *
                      </label>
                      <input
                        id="consult-phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 bg-[#0B0A0F] border border-white/15 focus:border-[#8B5CF6] text-sm text-white placeholder:text-stone-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="consult-service"
                      className="block text-xs font-tabular uppercase tracking-wider text-stone-300 mb-2"
                    >
                      Service Required / Engagement Mandate
                    </label>
                    <select
                      id="consult-service"
                      value={serviceRequired}
                      onChange={(e) => setServiceRequired(e.target.value)}
                      className="w-full px-4 py-3 bg-[#0B0A0F] border border-white/15 focus:border-[#8B5CF6] text-sm text-white focus:outline-none transition-colors"
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#0B0A0F] text-white">
                          {opt}
                        </option>
                      ))}
                      {!SERVICE_OPTIONS.includes(serviceRequired) && (
                        <option value={serviceRequired} className="bg-[#0B0A0F] text-white">
                          {serviceRequired}
                        </option>
                      )}
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="consult-message"
                      className="block text-xs font-tabular uppercase tracking-wider text-stone-300 mb-2"
                    >
                      Matter Brief / Show Cause Notice (SCN) Reference
                    </label>
                    <textarea
                      id="consult-message"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Summarize the tax period, notice section (e.g., Sec 73/74), audit scope, or GST course inquiry..."
                      className="w-full px-4 py-3 bg-[#0B0A0F] border border-white/15 focus:border-[#8B5CF6] text-sm text-white placeholder:text-stone-600 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Document Upload Placeholder (Section 40 Requirement) */}
                  <div className="p-4 bg-[#0B0A0F] border border-dashed border-white/20 space-y-2">
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-2.5 text-xs text-stone-300">
                        <FileText className="w-4 h-4 text-[#A78BFA] shrink-0" />
                        <span>
                          <strong className="text-white">
                            [DOCUMENT UPLOAD PLACEHOLDER — DEMO UI]
                          </strong>
                        </span>
                      </div>
                      <label className="px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/15 text-[11px] font-tabular text-[#C4B5FD] cursor-pointer transition-colors">
                        <span>Select Notice / PDF (Demo)</span>
                        <input
                          type="file"
                          className="hidden"
                          onChange={(e) =>
                            setDemoFileName(e.target.files?.[0]?.name || '')
                          }
                        />
                      </label>
                    </div>
                    {demoFileName && (
                      <p className="text-xs font-tabular text-[#A78BFA]">
                        Selected file (local browser preview only): {demoFileName}
                      </p>
                    )}
                    <p className="text-[11px] text-stone-400 leading-relaxed">
                      Note: This file selector is a UI demonstration placeholder. Live encrypted
                      document storage must be connected prior to transmitting confidential SCN
                      annexures or financial statements.
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-[#5B21B6] hover:bg-[#6D28D9] text-white text-xs font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-colors cursor-pointer"
                  >
                    <span>Book a Corporate Consultation</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 26 & 27: CONTACT CHAMBERS & PUBLIC PROFILES
      ===================================================================== */}
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="py-24 sm:py-32 bg-[#FAF8F5] text-[#141316] border-b border-stone-300"
      >
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-14 border-b border-stone-300">
            <div className="lg:col-span-4">
              <p className="text-xs font-tabular tracking-widest uppercase text-[#5B21B6]">
                NEW DELHI CHAMBERS · TWO LOCATIONS
              </p>
            </div>
            <div className="lg:col-span-8 space-y-3">
              <h2
                id="contact-heading"
                className="font-editorial text-4xl sm:text-5xl font-medium tracking-tight leading-[1.08]"
              >
                Chambers Addresses, Hours &amp; Direct Coordinates.
              </h2>
              <p className="text-sm sm:text-base text-stone-600 max-w-2xl">
                Displaying verified office addresses and consultation hours from the client
                database. Missing direct telephone and email records are strictly marked with
                placeholders.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-14 items-stretch">
            {/* Left 6 Columns: Addresses, Hours, Phone/Email Placeholders & Public Profiles */}
            <div className="lg:col-span-6 space-y-8 flex flex-col justify-between">
              {/* Two Supplied Chambers Locations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div
                  onClick={() => setActiveLocationIndex(0)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setActiveLocationIndex(0);
                  }}
                  className={`p-6 border transition-all cursor-pointer ${
                    activeLocationIndex === 0
                      ? 'bg-white border-[#5B21B6] shadow-[inset_0_2px_0_0_#5B21B6]'
                      : 'bg-white/60 border-stone-300 hover:bg-white'
                  }`}
                >
                  <p className="text-[11px] font-tabular uppercase tracking-wider text-[#5B21B6] font-semibold">
                    LOCATION 01 · PRIMARY CHAMBERS
                  </p>
                  <h3 className="font-editorial text-2xl font-semibold text-[#141316] mt-2">
                    Shastri Nagar, Delhi
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                    {FIRM_DATABASE.contact.primaryAddress.full}
                  </p>
                </div>

                <div
                  onClick={() => setActiveLocationIndex(1)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') setActiveLocationIndex(1);
                  }}
                  className={`p-6 border transition-all cursor-pointer ${
                    activeLocationIndex === 1
                      ? 'bg-white border-[#5B21B6] shadow-[inset_0_2px_0_0_#5B21B6]'
                      : 'bg-white/60 border-stone-300 hover:bg-white'
                  }`}
                >
                  <p className="text-[11px] font-tabular uppercase tracking-wider text-[#5B21B6] font-semibold">
                    LOCATION 02 · SECONDARY OFFICE
                  </p>
                  <h3 className="font-editorial text-2xl font-semibold text-[#141316] mt-2">
                    Moti Nagar, Delhi
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed">
                    {FIRM_DATABASE.contact.secondaryAddress.full}
                  </p>
                </div>
              </div>

              {/* Hours + Strict Placeholders for Phone & Email */}
              <div className="border-t border-b border-stone-300 py-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <p className="text-[11px] font-tabular uppercase tracking-wider text-stone-500">
                    Consultation Hours
                  </p>
                  <p className="text-sm font-semibold text-[#141316] mt-1">
                    {FIRM_DATABASE.contact.hours.days}
                  </p>
                  <p className="text-xs font-tabular text-stone-600">
                    {FIRM_DATABASE.contact.hours.time}
                  </p>
                </div>

                <div>
                  <p className="text-[11px] font-tabular uppercase tracking-wider text-stone-500">
                    Direct Telephone
                  </p>
                  <p className="text-sm font-tabular font-semibold text-[#5B21B6] mt-1">
                    {FIRM_DATABASE.contact.placeholders.phone}
                  </p>
                  <button
                    type="button"
                    onClick={() => onNavigate('consultation', 'Corporate Consultation')}
                    className="text-[11px] text-stone-500 hover:text-[#141316] underline underline-offset-4 mt-1 cursor-pointer"
                  >
                    Use Consultation Form
                  </button>
                </div>

                <div>
                  <p className="text-[11px] font-tabular uppercase tracking-wider text-stone-500">
                    Chambers Email
                  </p>
                  <p className="text-sm font-tabular font-semibold text-[#5B21B6] mt-1">
                    {FIRM_DATABASE.contact.placeholders.email}
                  </p>
                  <button
                    type="button"
                    onClick={() => onNavigate('consultation', 'Corporate Consultation')}
                    className="text-[11px] text-stone-500 hover:text-[#141316] underline underline-offset-4 mt-1 cursor-pointer"
                  >
                    Use Consultation Form
                  </button>
                </div>
              </div>

              {/* Verified Public Professional Profiles (Section 27) */}
              <div className="space-y-3">
                <p className="text-xs font-tabular uppercase tracking-widest text-stone-500">
                  Verified Public Professional Profiles
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {FIRM_DATABASE.contact.publicProfiles.map((profile) => (
                    <a
                      key={profile.name}
                      href={profile.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white border border-stone-300 hover:border-[#5B21B6] flex items-center justify-between transition-colors group"
                    >
                      <div>
                        <p className="text-xs font-semibold text-[#141316] group-hover:text-[#5B21B6]">
                          {profile.name}
                        </p>
                        <p className="text-[11px] font-tabular text-stone-500 mt-0.5">
                          {profile.descriptor}
                        </p>
                      </div>
                      <ExternalLink className="w-4 h-4 text-stone-400 group-hover:text-[#5B21B6]" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right 6 Columns: Architectural Map Placeholder with Location Toggle */}
            <div className="lg:col-span-6">
              <div className="h-full min-h-[380px] bg-[#12101B] text-[#FAF8F5] border border-stone-800 p-8 flex flex-col justify-between relative overflow-hidden">
                {/* Architectural Coordinate Grid SVG Background */}
                <svg
                  className="absolute inset-0 w-full h-full opacity-15 pointer-events-none"
                  viewBox="0 0 600 400"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path d="M0 80 H600 M0 160 H600 M0 240 H600 M0 320 H600" stroke="#A78BFA" strokeWidth="0.6" />
                  <path d="M120 0 V400 M240 0 V400 M360 0 V400 M480 0 V400" stroke="#A78BFA" strokeWidth="0.6" />
                  <circle cx="300" cy="200" r="75" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="4 4" />
                  <circle cx="300" cy="200" r="130" stroke="#5B21B6" strokeWidth="0.7" />
                </svg>

                <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2 text-xs font-tabular text-[#C4B5FD]">
                    <MapPin className="w-4 h-4" />
                    <span>[INTERACTIVE MAP PLACEHOLDER · NEW DELHI]</span>
                  </div>
                  <div className="flex items-center gap-1 bg-white/5 p-1 border border-white/10">
                    <button
                      type="button"
                      onClick={() => setActiveLocationIndex(0)}
                      className={`px-3 py-1 text-[11px] font-tabular transition-colors cursor-pointer ${
                        activeLocationIndex === 0
                          ? 'bg-[#5B21B6] text-white'
                          : 'text-stone-400 hover:text-white'
                      }`}
                    >
                      Shastri Nagar (110052)
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveLocationIndex(1)}
                      className={`px-3 py-1 text-[11px] font-tabular transition-colors cursor-pointer ${
                        activeLocationIndex === 1
                          ? 'bg-[#5B21B6] text-white'
                          : 'text-stone-400 hover:text-white'
                      }`}
                    >
                      Moti Nagar (110015)
                    </button>
                  </div>
                </div>

                <div className="relative z-10 my-auto py-8 text-center max-w-md mx-auto space-y-3">
                  <div className="w-10 h-10 mx-auto rounded-full bg-[#5B21B6]/30 border border-[#8B5CF6] flex items-center justify-center text-[#C4B5FD]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <p className="text-xs font-tabular uppercase tracking-widest text-[#A78BFA]">
                    {currentLocation.label}
                  </p>
                  <p className="font-editorial text-2xl sm:text-3xl text-white font-medium">
                    {currentLocation.full}
                  </p>
                  <p className="text-xs text-stone-400">{currentLocation.coordinatesNote}</p>
                </div>

                <div className="relative z-10 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-stone-400">
                  <span>Hours: {FIRM_DATABASE.contact.hours.full}</span>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                      currentLocation.full
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-[#C4B5FD] hover:text-white underline underline-offset-4"
                  >
                    <span>Open Address in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 28: PREMIUM DARK FOOTER
      ===================================================================== */}
      <footer className="bg-[#08070B] text-stone-400 pt-20 pb-14 border-t border-white/10">
        <div className="max-w-[1380px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-white/10">
            {/* Firm Identity */}
            <div className="lg:col-span-4 space-y-4">
              <p className="font-editorial text-2xl sm:text-3xl text-white font-semibold">
                {FIRM_DATABASE.identity.firmName}
              </p>
              <p className="text-xs font-tabular uppercase tracking-widest text-[#A78BFA]">
                {FIRM_DATABASE.identity.designation} · {FIRM_DATABASE.identity.educationalInitiative}
              </p>
              <p className="text-xs text-stone-400 leading-relaxed max-w-sm">
                Led by {FIRM_DATABASE.founder.name} ({FIRM_DATABASE.founder.credentials}). Advising
                enterprises on GST Show Cause Notices, litigation appeals, statutory &amp; CISA
                audits, corporate finance, and practical GST training.
              </p>
            </div>

            {/* Quick Navigation */}
            <div className="lg:col-span-2 space-y-3">
              <p className="text-xs font-tabular uppercase tracking-widest text-white">
                Navigation
              </p>
              <ul className="space-y-2 text-xs">
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About the Firm' },
                  { id: 'services', label: 'Practice Areas' },
                  { id: 'expertise', label: 'Industries' },
                  { id: 'training', label: 'GST Foundation' },
                  { id: 'insights', label: 'Insights Archive' },
                  { id: 'contact', label: 'Contact Chambers' },
                ].map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate(item.id);
                      }}
                      className="hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="lg:col-span-3 space-y-3">
              <p className="text-xs font-tabular uppercase tracking-widest text-white">
                Practice Pillars
              </p>
              <ul className="space-y-2 text-xs">
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('consultation', 'GST SCN Management & Appeals')}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    GST SCN Management &amp; Appeals
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('consultation', 'ITC Optimization & Refund Filing')}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    ITC Optimization &amp; Refund Filing
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() =>
                      onNavigate('consultation', 'Search / Seizure / Transit Detention Defense')
                    }
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    Search / Seizure / Transit Detention Defense
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('consultation', 'Statutory Audits')}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    Statutory, Retail &amp; Risk Audits
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('consultation', 'IT / CISA Auditing')}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    IT / CISA Auditing
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() => onNavigate('consultation', 'Corporate Law Advisory')}
                    className="hover:text-white transition-colors text-left cursor-pointer"
                  >
                    Corporate Law &amp; Project Financing
                  </button>
                </li>
              </ul>
            </div>

            {/* Training & Chambers */}
            <div className="lg:col-span-3 space-y-3 text-xs">
              <p className="font-tabular uppercase tracking-widest text-white">
                Chambers &amp; Training
              </p>
              <p className="text-stone-300 font-medium">
                {FIRM_DATABASE.identity.educationalInitiative}
              </p>
              <p className="text-stone-400">
                GST Portal · Tally · Case Studies · GSTAT-Related Learning
              </p>
              <div className="pt-2 space-y-1 text-stone-400">
                <p>{FIRM_DATABASE.contact.primaryAddress.full}</p>
                <p>{FIRM_DATABASE.contact.secondaryAddress.full}</p>
                <p className="font-tabular text-stone-300 pt-1">
                  Phone: {FIRM_DATABASE.contact.placeholders.phone} · Email:{' '}
                  {FIRM_DATABASE.contact.placeholders.email}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Legal & Copyright Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-stone-500">
            <p>
              © {new Date().getFullYear()} {FIRM_DATABASE.identity.firmName} — Chartered
              Accountants. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <button
                type="button"
                onClick={() => setLegalModal('disclaimer')}
                className="hover:text-stone-200 underline underline-offset-4 cursor-pointer"
              >
                Professional Disclaimer
              </button>
              <button
                type="button"
                onClick={() => setLegalModal('privacy')}
                className="hover:text-stone-200 underline underline-offset-4 cursor-pointer"
              >
                Privacy Policy
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* Legal / Disclaimer Modal */}
      {legalModal && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
        >
          <div className="bg-[#FAF8F5] text-[#141316] border border-stone-300 max-w-xl w-full p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between border-b border-stone-300 pb-3">
              <h3 className="font-editorial text-2xl font-semibold">
                {legalModal === 'disclaimer'
                  ? 'Professional & Regulatory Disclaimer'
                  : 'Privacy & Confidentiality Notice'}
              </h3>
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="p-1 text-stone-500 hover:text-[#141316] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {legalModal === 'disclaimer' ? (
              <div className="text-xs sm:text-sm text-stone-600 space-y-3 leading-relaxed">
                <p>
                  This website is a professional design demonstration created for{' '}
                  <strong>Rajinder Arora &amp; Associates — Chartered Accountants</strong> and its
                  associated educational initiative, <strong>GST Research Foundation</strong>.
                </p>
                <p>
                  In accordance with professional standards governing Chartered Accountants in
                  India, the information presented on this website is solely for informational and
                  educational purposes and does not constitute solicitation, advertisement, or
                  formal tax/legal advice.
                </p>
              </div>
            ) : (
              <div className="text-xs sm:text-sm text-stone-600 space-y-3 leading-relaxed">
                <p>
                  Any contact details or consultation inquiries entered into this demonstration
                  interface remain strictly private. Before live deployment, secure server-side
                  encryption and client-approved privacy policies should be configured for all case
                  file submissions.
                </p>
              </div>
            )}

            <div className="pt-2 flex justify-end">
              <button
                type="button"
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 bg-[#141316] text-white text-xs font-medium cursor-pointer"
              >
                Close Notice
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
