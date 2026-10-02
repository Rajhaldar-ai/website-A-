import React, { useRef } from 'react';
import { Upload, RotateCcw, Scale } from 'lucide-react';
import { FIRM_DATABASE } from '../data/firmDatabase';

interface FounderPortraitPlaceholderProps {
  variant: 'hero' | 'editorial';
  customPortraitUrl: string | null;
  onUploadPortrait: (url: string | null) => void;
}

export const FounderPortraitPlaceholder: React.FC<FounderPortraitPlaceholderProps> = ({
  variant,
  customPortraitUrl,
  onUploadPortrait,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    onUploadPortrait(objectUrl);
  };

  const isHero = variant === 'hero';

  return (
    <div className="perspective-stage relative group">
      {/* Subtle 3D Offset Architectural Plane Behind Portrait */}
      <div
        className={`absolute -inset-2 sm:-inset-3 border transition-transform duration-500 pointer-events-none ${
          isHero
            ? 'border-[#7C3AED]/35 bg-gradient-to-br from-[#5B21B6]/15 via-transparent to-transparent translate-x-3 translate-y-3'
            : 'border-[#5B21B6]/30 bg-[#141316]/[0.03] -translate-x-3 translate-y-3'
        }`}
        aria-hidden="true"
      />

      {/* Purple Edge Accent Bar */}
      <div
        className="absolute top-0 bottom-0 left-0 w-[3px] bg-gradient-to-b from-[#8B5CF6] via-[#5B21B6] to-transparent z-20"
        aria-hidden="true"
      />

      <div
        className={`plane-3d relative overflow-hidden border ${
          isHero
            ? 'bg-[#12101B] border-white/15 aspect-[4/5] sm:aspect-[4/4.7]'
            : 'bg-[#13111C] border-stone-800 aspect-[3/4]'
        }`}
      >
        {customPortraitUrl ? (
          <div className="relative w-full h-full">
            <img
              src={customPortraitUrl}
              alt={`${FIRM_DATABASE.founder.name}, ${FIRM_DATABASE.founder.credentials}`}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
            {/* Measured Dark Editorial Scrim */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#09080D] via-[#09080D]/35 to-transparent"
              aria-hidden="true"
            />
          </div>
        ) : (
          /* Bespoke Non-Fabricated Editorial Portrait Placeholder */
          <div className="relative w-full h-full flex flex-col justify-between p-6 sm:p-8 bg-[radial-gradient(circle_at_75%_20%,rgba(109,40,217,0.24),transparent_60%),linear-gradient(160deg,#151320_0%,#0B0A0F_100%)] text-stone-200">
            {/* Architectural Grid Lines & Silhouette Framing */}
            <svg
              className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
              viewBox="0 0 400 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <line x1="40" y1="0" x2="40" y2="500" stroke="currentColor" strokeWidth="0.5" />
              <line x1="360" y1="0" x2="360" y2="500" stroke="currentColor" strokeWidth="0.5" />
              <line x1="0" y1="90" x2="400" y2="90" stroke="currentColor" strokeWidth="0.5" />
              <line x1="0" y1="380" x2="400" y2="380" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="200" cy="200" r="95" stroke="#8B5CF6" strokeWidth="0.75" strokeDasharray="4 4" />
              <rect x="95" y="105" width="210" height="260" stroke="currentColor" strokeWidth="0.75" />
              {/* Abstract Editorial Bust Geometry (Non-Fabricated Placeholder) */}
              <path
                d="M135 365 C135 305 162 280 200 280 C238 280 265 305 265 365"
                stroke="#A78BFA"
                strokeWidth="1.2"
              />
              <circle cx="200" cy="210" r="38" stroke="#A78BFA" strokeWidth="1.2" />
            </svg>

            {/* Top Metadata Bar */}
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-3 text-[11px] font-tabular tracking-wider text-stone-400">
              <span>[FOUNDER PORTRAIT PLACEHOLDER]</span>
              <span className="text-[#A78BFA]">CROP · 4:5 EDITORIAL</span>
            </div>

            {/* Center Specification Notice */}
            <div className="relative z-10 my-auto py-6 text-center max-w-xs mx-auto space-y-3">
              <div className="w-10 h-10 mx-auto border border-[#8B5CF6]/40 bg-[#5B21B6]/15 flex items-center justify-center text-[#C4B5FD]">
                <Scale className="w-4 h-4" />
              </div>
              <p className="font-editorial text-xl sm:text-2xl text-white font-medium">
                Approved Portrait Slot
              </p>
              <p className="text-xs text-stone-400 leading-relaxed">
                Reserved strictly for the client-approved studio portrait of{' '}
                <strong className="text-stone-200 font-medium">
                  {FIRM_DATABASE.founder.name} ({FIRM_DATABASE.founder.credentials})
                </strong>
                . No synthetic likeness is fabricated.
              </p>

              <div className="pt-2 flex items-center justify-center">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="inline-flex items-center gap-2 px-3.5 py-2 text-[11px] font-medium text-stone-200 bg-white/5 hover:bg-[#5B21B6]/40 border border-white/15 hover:border-[#8B5CF6] transition-colors cursor-pointer"
                >
                  <Upload className="w-3.5 h-3.5 text-[#A78BFA]" />
                  <span>Preview Client Portrait Photo</span>
                </button>
              </div>
            </div>

            {/* Bottom Spacer for Floating Label */}
            <div className="h-14" aria-hidden="true" />
          </div>
        )}

        {/* Hidden File Input for Client Portrait Testing */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
          aria-label="Upload approved founder portrait for preview"
        />

        {/* Reset button if custom portrait is loaded */}
        {customPortraitUrl && (
          <button
            type="button"
            onClick={() => onUploadPortrait(null)}
            className="absolute top-3 right-3 z-30 inline-flex items-center gap-1.5 px-2.5 py-1.5 text-[11px] bg-black/75 hover:bg-black text-stone-200 border border-white/20 backdrop-blur-sm transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Placeholder</span>
          </button>
        )}

        {/* Floating Verified Founder Information Label (Section 11 Requirement) */}
        <div className="absolute bottom-4 left-4 right-4 z-20 bg-[#0D0B12]/90 backdrop-blur-md border border-white/15 p-4 flex items-center justify-between gap-4">
          <div>
            <p className="font-editorial text-lg sm:text-xl font-semibold text-white leading-tight">
              {FIRM_DATABASE.founder.name}
            </p>
            <p className="text-xs font-tabular text-[#C4B5FD] mt-0.5">
              {FIRM_DATABASE.founder.credentials} · Dual Discipline Counsel
            </p>
          </div>
          <div className="text-right hidden sm:block">
            <span className="text-[11px] text-stone-400 block">Founder &amp; Lead Counsel</span>
            <span className="text-[11px] text-stone-300 font-medium">New Delhi Chambers</span>
          </div>
        </div>
      </div>
    </div>
  );
};
