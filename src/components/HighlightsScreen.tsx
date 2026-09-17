import React from 'react';
import { TabType } from '../types';
import { CANDIDATE_INFO, ACCOLADES } from '../data/portfolioData';

interface HighlightsScreenProps {
  onNavigate: (tab: TabType) => void;
}

export const HighlightsScreen: React.FC<HighlightsScreenProps> = ({ onNavigate }) => {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Dossier Card */}
      <section className="relative w-full rounded-2xl bg-white p-6 md:p-10 lg:p-14 shadow-xs border border-[#eaedff]/60 overflow-hidden">
        <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#5bb8fe]/15 blur-3xl pointer-events-none"></div>
        <div className="absolute right-1/3 -bottom-20 w-80 h-80 rounded-full bg-[#eaedff]/70 blur-2xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="flex flex-col items-start">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#cce5ff]/50 text-[#001d31]">
              <span className="w-2 h-2 rounded-full bg-[#006398] animate-pulse"></span>
              <span className="text-[11px] uppercase tracking-wider font-bold">
                {CANDIDATE_INFO.statusPill}
              </span>
            </div>

            {/* Candidate Header & Monogram */}
            <div className="flex items-center gap-4 mt-6">
              <div className="relative flex items-center justify-center w-20 h-20 rounded-xl bg-[#0a1e3a] text-white shadow-md flex-shrink-0">
                <span className="text-3xl font-extrabold tracking-tight">
                  {CANDIDATE_INFO.initials}
                </span>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-[#006398] flex items-center justify-center text-white shadow-xs">
                  <span
                    className="material-symbols-outlined text-[16px]"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    verified
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a1e3a] tracking-tight">
                  {CANDIDATE_INFO.name}
                </h1>
                <p className="text-lg sm:text-xl text-[#006398] font-bold mt-1">
                  {CANDIDATE_INFO.headline}
                </p>
              </div>
            </div>

            {/* Sub-headline / Bio */}
            <p className="text-[16px] md:text-[18px] text-[#44474d] font-normal mt-4 max-w-3xl leading-relaxed">
              {CANDIDATE_INFO.bio}
            </p>

            {/* Location & Alma Mater */}
            <div className="flex flex-wrap items-center gap-3 text-[#44474d] mt-3 text-[15px]">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-[#006398]">location_on</span>
                <span className="font-semibold text-[#131b2e]">{CANDIDATE_INFO.location}</span>
              </div>
              <span className="text-[#c5c6ce] font-bold">•</span>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-[#006398]">school</span>
                <span className="font-semibold text-[#131b2e]">{CANDIDATE_INFO.affiliation}</span>
              </div>
            </div>

            {/* Primary Actions */}
            <div className="flex flex-wrap items-center gap-4 mt-8 pt-1">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#006398] text-white text-[14px] font-semibold shadow-sm hover:bg-[#00476e] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                id="hero-contact-cta"
              >
                <span>Get In Touch</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </button>
              <button
                onClick={() => onNavigate('experience')}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#f2f3ff] text-[#0a1e3a] text-[14px] font-semibold shadow-xs hover:bg-[#eaedff] transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                id="hero-experience-cta"
              >
                <span className="material-symbols-outlined text-[18px] text-[#006398]">timeline</span>
                <span>View Experience</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Background / About Me Section */}
      <section className="mt-10 w-full rounded-2xl bg-white p-6 md:p-8 lg:p-10 shadow-xs border border-[#eaedff]/70">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-1.5 h-4 rounded-full bg-[#006398]"></span>
          <span className="text-[12px] uppercase tracking-wider text-[#006398] font-bold">
            Personal Background
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-[#0a1e3a] tracking-tight">
          About Me
        </h2>
        <p className="text-[16px] text-[#44474d] leading-relaxed mt-4">
          {CANDIDATE_INFO.aboutMe}
        </p>
      </section>

      {/* Curated Accolades Section */}
      <section className="mt-12 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-4 rounded-full bg-[#006398]"></span>
              <span className="text-[12px] uppercase tracking-wider text-[#006398] font-bold">
                Curated Accolades
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl text-[#0a1e3a] font-extrabold tracking-tight mt-1">
              Highlights of Achievements
            </h2>
          </div>
          <p className="text-[14px] text-[#44474d] max-w-md leading-relaxed">
            Recognitions reflecting sustained academic rigor, team governance, and varsity performance standards.
          </p>
        </div>

        {/* Accolade Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {ACCOLADES.map((accolade) => (
            <div
              key={accolade.id}
              className="group flex flex-col justify-between p-6 rounded-xl bg-white shadow-xs border border-[#eaedff]/70 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex flex-col">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] uppercase font-bold text-[#006398] tracking-wider bg-[#cce5ff]/40 px-2.5 py-1 rounded">
                    {accolade.category}
                  </span>
                  <span className="text-[12px] text-[#44474d] font-medium">{accolade.date}</span>
                </div>

                <div className="w-12 h-12 rounded-lg bg-[#e2e7ff] flex items-center justify-center text-[#0a1e3a] mt-4 mb-3 group-hover:bg-[#006398] group-hover:text-white transition-colors duration-200">
                  <span className="material-symbols-outlined text-[24px]">{accolade.icon}</span>
                </div>

                <h3 className="text-[20px] text-[#0a1e3a] font-bold leading-snug">
                  {accolade.title}
                </h3>

                <p className="text-[15px] text-[#44474d] mt-2.5 leading-relaxed">
                  {accolade.description}
                </p>
              </div>

              <div className="mt-6 pt-3 bg-[#f2f3ff] rounded-lg p-3">
                <div className="flex items-start gap-2">
                  <span
                    className="material-symbols-outlined text-[#006398] text-[18px] shrink-0 mt-0.5"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <span className="text-[12px] text-[#0a1e3a] font-semibold">
                    {accolade.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
