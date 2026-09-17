import React from 'react';
import { DEGREES, ACADEMIC_DOMAINS } from '../data/portfolioData';

export const EducationScreen: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Header section */}
      <section className="relative w-full pb-8">
        <div className="absolute -top-12 -right-8 w-96 h-96 bg-[#5bb8fe]/15 rounded-full blur-3xl pointer-events-none -z-10"></div>
        <div className="absolute top-20 left-1/3 w-80 h-80 bg-[#e2e7ff]/40 rounded-full blur-2xl pointer-events-none -z-10"></div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col max-w-2xl">
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0a1e3a] text-white text-[11px] tracking-wider uppercase font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#5bb8fe]"></span>
                Academic Foundations
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0a1e3a] tracking-tight">
              Academic Background
            </h1>
            <p className="text-lg text-[#44474d] mt-2 leading-relaxed font-normal">
              Degrees, academic distinctions, and analytical foundations anchored in Information Systems, Business Analytics, and Supply Chain Architecture.
            </p>
          </div>
        </div>
      </section>

      {/* Degree Credentials Section */}
      <section className="w-full mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-2">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-[#006398]"></div>
            <h2 className="text-2xl font-bold text-[#0a1e3a] tracking-tight">Degree Credentials</h2>
          </div>
          <span className="text-[12px] text-[#44474d] uppercase tracking-wider font-semibold">
            MOST RECENT
          </span>
        </div>

        <div className="space-y-6">
          {DEGREES.map((degree) => {
            const isMaster = degree.id === 'pmis';
            const isAssociate = degree.id === 'asba';
            return (
              <article
                key={degree.id}
                className="p-6 md:p-8 rounded-xl bg-white shadow-xs border border-[#eaedff]/80 hover:shadow-md transition-all duration-300 relative overflow-hidden group"
              >
                {/* Colored border strip on left */}
                <div
                  className={`absolute top-0 left-0 w-2 h-full transition-colors duration-300 ${
                    isMaster ? 'bg-[#006398]' : 'bg-[#dae2fd] group-hover:bg-[#006398]'
                  }`}
                ></div>

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pl-1">
                  <div className="flex-1">
                    {/* Status Pill Badge Row */}
                    <div className="flex items-center gap-2 flex-wrap mb-2">
                      {degree.statusType === 'in-progress' && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#cce5ff] text-[#001d31] text-[11px] font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#006398] animate-pulse"></span>
                          In Progress
                        </span>
                      )}
                      {degree.statusType === 'completing' && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#e2e7ff] text-[#0a1e3a] text-[11px] font-bold">
                          <span className="material-symbols-outlined text-[14px] text-[#006398]">check_circle</span>
                          Completing May 2025
                        </span>
                      )}
                      {degree.statusType === 'conferred' && (
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#eaedff] text-[#44474d] text-[11px] font-bold">
                          <span className="material-symbols-outlined text-[14px]">done_all</span>
                          Conferred
                        </span>
                      )}

                      <span className="text-[11px] uppercase tracking-wider text-[#44474d] font-semibold">
                        {degree.degreeType}
                      </span>
                      <span className="text-[#c5c6ce] text-[11px]">•</span>
                      <span className="text-[11px] text-[#006398] font-bold">
                        {degree.cohortOrDate}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-[28px] text-[#0a1e3a] font-extrabold tracking-tight">
                      {degree.title}
                    </h3>

                    <div className="flex items-center gap-2 mt-1.5 text-[#44474d]">
                      <span className="material-symbols-outlined text-[20px] text-[#006398]">
                        {isMaster ? 'apartment' : degree.id === 'bsba' ? 'school' : 'domain'}
                      </span>
                      <span className="text-[15px] font-semibold text-[#131b2e]">
                        {degree.institution}
                      </span>
                    </div>

                    {/* Details Grid */}
                    <div className={`mt-6 grid gap-4 p-4 rounded-lg bg-[#f2f3ff]/70 border border-[#eaedff] ${isAssociate ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#006398] shadow-2xs mt-0.5 shrink-0">
                          <span className="material-symbols-outlined text-[18px]">
                            {degree.details.primaryIcon}
                          </span>
                        </div>
                        <div>
                          <span className="text-[11px] text-[#44474d] uppercase tracking-wider block font-semibold">
                            {degree.details.primaryLabel}
                          </span>
                          <span className="text-[17px] text-[#0a1e3a] font-bold">
                            {degree.details.primaryTitle}
                          </span>
                          <p className="text-[13px] text-[#44474d] mt-0.5 leading-normal">
                            {degree.details.primaryDesc}
                          </p>
                        </div>
                      </div>

                      {!isAssociate && degree.details.secondaryTitle && (
                        <div className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-[#006398] shadow-2xs mt-0.5 shrink-0">
                            <span className="material-symbols-outlined text-[18px]">
                              {degree.details.secondaryIcon}
                            </span>
                          </div>
                          <div>
                            <span className="text-[11px] text-[#44474d] uppercase tracking-wider block font-semibold">
                              {degree.details.secondaryLabel}
                            </span>
                            <span className="text-[17px] text-[#0a1e3a] font-bold">
                              {degree.details.secondaryTitle}
                            </span>
                            <p className="text-[13px] text-[#44474d] mt-0.5 leading-normal">
                              {degree.details.secondaryDesc}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Academic Standing GPA Box */}
                  <div className="lg:w-48 flex-shrink-0 flex flex-col items-center justify-center p-6 rounded-xl bg-[#eaedff] text-center border border-[#dae2fd]">
                    <div
                      className={`text-5xl font-black tracking-tight ${
                        isMaster ? 'text-[#006398]' : 'text-[#0a1e3a]'
                      }`}
                    >
                      {degree.gpa}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Curricular & Rigor Breakdown Visual Grid */}
      <section className="w-full pb-10">
        <div className="p-6 md:p-8 rounded-xl bg-[#f2f3ff] border border-[#eaedff]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[11px] text-[#006398] uppercase tracking-widest font-bold block mb-1">
                Analytical Competence Matrix
              </span>
              <h3 className="text-2xl font-bold text-[#0a1e3a]">Academic Focus Domains</h3>
            </div>
            <div className="flex items-center gap-2 text-[13px] text-[#44474d] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#006398]"></span>
              Direct Alignment: IS + SCM Analytics
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {ACADEMIC_DOMAINS.map((domain) => (
              <div
                key={domain.id}
                className="p-6 rounded-lg bg-white shadow-2xs border border-[#eaedff]/80 flex flex-col"
              >
                <div className="w-10 h-10 rounded-lg bg-[#eaedff] flex items-center justify-center text-[#006398] mb-4">
                  <span className="material-symbols-outlined text-[22px]">{domain.icon}</span>
                </div>
                <h4 className="text-[18px] text-[#0a1e3a] font-bold mb-1.5">{domain.title}</h4>
                <p className="text-[14px] text-[#44474d] leading-relaxed">{domain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
