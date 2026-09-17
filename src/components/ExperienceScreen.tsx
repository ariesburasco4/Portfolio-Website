import React from 'react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceScreen: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      {/* Header section */}
      <section className="relative w-full overflow-hidden pb-8">
        <div className="absolute -top-16 -right-16 w-96 h-96 rounded-full bg-[#5bb8fe]/10 blur-3xl pointer-events-none"></div>
        <div className="absolute top-48 -left-20 w-80 h-80 rounded-full bg-[#006398]/5 blur-3xl pointer-events-none"></div>

        <div className="relative flex flex-col gap-4">
          <div className="flex flex-col gap-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#006398]/10 text-[#006398]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#006398] animate-pulse"></span>
              <span className="text-[11px] uppercase tracking-wider font-bold">
                Career Trajectory
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0a1e3a] tracking-tight">
              Work Experience
            </h1>
            <p className="text-lg text-[#44474d] font-normal">
              Procurement, Operations &amp; Tech Training
            </p>
          </div>
        </div>
      </section>

      {/* Positions & Key Milestones */}
      <section className="w-full pb-14">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#006398]">work_outline</span>
            <h2 className="text-2xl font-bold text-[#0a1e3a]">Positions &amp; Key Milestones</h2>
          </div>
          <span className="text-[13px] text-[#44474d] font-semibold">Professional Experience</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {EXPERIENCES.map((exp) => (
            <article
              key={exp.id}
              className="group bg-white rounded-xl p-8 shadow-xs border border-[#eaedff]/80 hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative overflow-hidden"
            >
              {exp.current && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#006398] via-[#5bb8fe] to-transparent opacity-90"></div>
              )}

              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div>
                    {exp.current ? (
                      <div className="inline-flex items-center gap-1.5 text-[#006398] text-[11px] font-bold uppercase tracking-wider mb-1">
                        <span className="w-2 h-2 rounded-full bg-[#006398]"></span>
                        <span>{exp.category}</span>
                      </div>
                    ) : (
                      <span className="text-[#44474d] text-[11px] font-semibold uppercase tracking-wider block mb-1">
                        {exp.category}
                      </span>
                    )}
                    <h3 className="text-[22px] text-[#0a1e3a] font-bold leading-snug">
                      {exp.role}
                    </h3>
                    <p className="text-[16px] text-[#006398] font-semibold">{exp.company}</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-[#eaedff] flex items-center justify-center text-[#0a1e3a] group-hover:scale-105 transition-transform duration-200 shrink-0">
                    <span className="material-symbols-outlined text-[26px]">{exp.icon}</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 py-2 mb-4 text-[#44474d] text-[13px]">
                  <span className="inline-flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-[#006398]">pin_drop</span>
                    {exp.location}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-[#c5c6ce]"></span>
                  <span className="inline-flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px] text-[#006398]">calendar_today</span>
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="mt-1.5 w-2 h-2 rounded-full bg-[#006398] flex-shrink-0"></span>
                      <p className="text-[15px] text-[#0a1e3a] leading-relaxed">
                        {highlight.includes('25% cost savings') ? (
                          <>
                            Achieved over <strong className="text-[#006398] font-semibold">25% cost savings</strong> through periodic vendor pricing reviews.
                          </>
                        ) : highlight.includes('90%+ of purchase orders') ? (
                          <>
                            Coordinated on-time delivery shipments for <strong className="text-[#006398] font-semibold">90%+ of purchase orders</strong>.
                          </>
                        ) : highlight.includes('15%') ? (
                          <>
                            Cut test completion time by <strong className="text-[#006398] font-semibold">15%</strong> via optimized scheduling and resource allocation.
                          </>
                        ) : highlight.includes('100+ tests weekly') ? (
                          <>
                            Managed exam intake workflows for <strong className="text-[#006398] font-semibold">100+ tests weekly</strong> with zero compliance incidents.
                          </>
                        ) : highlight.includes('40% Excel & SQL') ? (
                          <>
                            Drove a <strong className="text-[#006398] font-semibold">40% Excel &amp; SQL proficiency increase</strong> through hands-on analytics training.
                          </>
                        ) : highlight.includes('45%') ? (
                          <>
                            Integrated Copilot AI workflows, boosting student output drafting and reporting by <strong className="text-[#006398] font-semibold">45%</strong>.
                          </>
                        ) : highlight.includes('13% membership growth') ? (
                          <>
                            Delivered <strong className="text-[#006398] font-semibold">13% membership growth</strong> and led Splash Bash event generating <strong className="text-[#006398] font-semibold">20% monthly revenue</strong>.
                          </>
                        ) : highlight.includes('25% decrease in wait times') ? (
                          <>
                            Achieved <strong className="text-[#006398] font-semibold">25% decrease in wait times</strong> via refined party booking operations.
                          </>
                        ) : (
                          highlight
                        )}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 mt-auto border-t border-[#f2f3ff]">
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-3 py-1 rounded-md bg-[#f2f3ff] text-[#0a1e3a] text-[11px] font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                  {exp.featuredTag && (
                    <span className="px-3 py-1 rounded-md bg-[#006398]/10 text-[#006398] text-[11px] font-bold">
                      {exp.featuredTag}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};
