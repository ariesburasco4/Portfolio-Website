import React, { useState } from 'react';
import { CANDIDATE_INFO, DEGREES, EXPERIENCES, ACCOLADES } from '../data/portfolioData';
import { X, Printer, Copy, Check, Download, GraduationCap, Briefcase, Award } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopy = () => {
    const text = `
ARIES BURASCO
Procurement & Analytics Specialist | Master's in Information Systems Candidate
Rogers, AR • ariesburasco4@gmail.com • linkedin.com/in/aries-burasco-13168b290

EDUCATION
- Professional Master of Information Systems (GPA: 4.0/4.0)
  University of Arkansas — Sam M. Walton College of Business (Expected May 2027)
  Concentration: Emerging Technology (Enterprise Cloud, Big Data, Predictive Analytics)

- Bachelor of Science in Business Administration (GPA: 3.94/4.0)
  University of Arkansas — Fayetteville, AR (Completing May 2025)
  Major: Information Systems (Business Analytics) | Minor: Supply Chain Management

- Associate of Science in Business Administration (GPA: 3.80/4.0)
  Northwest Arkansas Community College — Bentonville, AR (May 2023)

EXPERIENCE
- Procurement Coordinator | Wilshar Steel, Lowell, AR (July 2025 - Present)
  * Achieved over 25% cost savings through periodic vendor pricing reviews.
  * Coordinated on-time delivery shipments for 90%+ of purchase orders.

- Testing Services Administrator | University of Arkansas, Fayetteville, AR (Feb 2025 - May 2025)
  * Cut test completion time by 15% via optimized scheduling and resource allocation.
  * Managed exam intake workflows for 100+ tests weekly with zero compliance incidents.

- Microsoft Office Suite Trainer | NWACC, Bentonville, AR (May 2024 - Jan 2025)
  * Drove a 40% Excel & SQL proficiency increase through hands-on analytics training.
  * Integrated Copilot AI workflows, boosting student output drafting and reporting by 45%.

- Member Representative | The Jones Center, Springdale, AR (Feb 2023 - Aug 2023)
  * Delivered 13% membership growth and generated 20% monthly event revenue.

ACCOLADES & DISTINCTIONS
- Chancellor's Transfer Scholarship (Jul 2023) - U of A Walton College
- Team Captain — Cross-Country (Aug 2021 - Nov 2022) - Led team to historic 5th place at Nationals
- NWACC Cross-Country Letter Award (2022, 2023) - Dual-year varsity recognition
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-[#0a1e3a]/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-[#eaedff] flex flex-col max-h-[92vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="px-6 py-4 bg-[#f2f3ff] border-b border-[#eaedff] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-[#006398]"></span>
            <h3 className="text-lg font-bold text-[#0a1e3a]">
              Official Candidate Dossier &amp; Resume
            </h3>
            <span className="text-[11px] bg-[#cce5ff] text-[#001d31] font-bold px-2 py-0.5 rounded">
              Verified PDF Format
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#c5c6ce] text-[#0a1e3a] hover:bg-[#eaedff] text-[12px] font-bold transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer size={14} />
              <span className="hidden sm:inline">Print / PDF</span>
            </button>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-[#c5c6ce] text-[#0a1e3a] hover:bg-[#eaedff] text-[12px] font-bold transition-colors cursor-pointer"
              title="Copy formatted text"
            >
              {copied ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
              <span className="hidden sm:inline">{copied ? 'Copied' : 'Copy Text'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#44474d] hover:text-[#0a1e3a] hover:bg-[#eaedff] transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="p-6 sm:p-10 overflow-y-auto print:p-0 space-y-6 text-[#131b2e] bg-white">
          {/* Header */}
          <div className="border-b border-[#0a1e3a] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-[#0a1e3a] tracking-tight">
                {CANDIDATE_INFO.name}
              </h1>
              <p className="text-[#006398] font-bold text-[16px] mt-0.5">
                {CANDIDATE_INFO.headline}
              </p>
              <p className="text-[13px] text-[#44474d] mt-1">
                {CANDIDATE_INFO.location} • {CANDIDATE_INFO.email} • {CANDIDATE_INFO.linkedin}
              </p>
            </div>
            <div className="text-left sm:text-right">
              <span className="inline-block px-3 py-1 bg-[#eaedff] text-[#0a1e3a] font-bold text-[12px] rounded-lg">
                Top Decile Academic Honors
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-[13px] font-bold uppercase tracking-wider text-[#006398] mb-1.5">
              Professional Profile
            </h2>
            <p className="text-[14px] text-[#44474d] leading-relaxed">
              Information Systems Master's candidate with proven industry impact in vendor procurement,
              cost-reduction negotiations, automated database modeling, and enterprise business analytics.
              Proven track record leading high-performance collegiate teams and optimizing technical training.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-[13px] font-bold uppercase tracking-wider text-[#006398] mb-3 flex items-center gap-1.5">
              <GraduationCap size={16} />
              Education &amp; Academic Credentials
            </h2>
            <div className="space-y-4">
              {DEGREES.map((deg) => (
                <div key={deg.id} className="p-3.5 rounded-lg bg-[#f2f3ff] border border-[#eaedff]">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <h3 className="text-[15px] font-bold text-[#0a1e3a]">{deg.title}</h3>
                    <span className="text-[13px] font-bold text-[#006398]">GPA: {deg.gpa} / 4.0</span>
                  </div>
                  <p className="text-[13px] text-[#44474d]">{deg.institution}</p>
                  <p className="text-[12px] text-[#006398] font-semibold mt-1">
                    {deg.details.primaryLabel}: {deg.details.primaryTitle} ({deg.details.primaryDesc})
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-[13px] font-bold uppercase tracking-wider text-[#006398] mb-3 flex items-center gap-1.5">
              <Briefcase size={16} />
              Professional Experience
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="border-l-2 border-[#006398] pl-4 py-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <h3 className="text-[15px] font-bold text-[#0a1e3a]">{exp.role}</h3>
                    <span className="text-[12px] text-[#75777e] font-semibold">{exp.period}</span>
                  </div>
                  <p className="text-[13px] font-semibold text-[#006398]">{exp.company} — {exp.location}</p>
                  <ul className="mt-2 space-y-1 text-[13px] text-[#44474d]">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#006398]">•</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Accolades */}
          <div>
            <h2 className="text-[13px] font-bold uppercase tracking-wider text-[#006398] mb-3 flex items-center gap-1.5">
              <Award size={16} />
              Honors &amp; Leadership Accolades
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {ACCOLADES.map((acc) => (
                <div key={acc.id} className="p-3 rounded-lg bg-[#f2f3ff] border border-[#eaedff]">
                  <span className="text-[11px] font-bold text-[#006398] uppercase block">
                    {acc.category}
                  </span>
                  <h4 className="text-[13px] font-bold text-[#0a1e3a] mt-0.5">{acc.title}</h4>
                  <p className="text-[11px] text-[#44474d] mt-1">{acc.badge}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Bottom Footer */}
        <div className="px-6 py-4 bg-[#f2f3ff] border-t border-[#eaedff] flex items-center justify-between">
          <span className="text-[12px] text-[#44474d]">
            Official transcript &amp; letters of recommendation available upon request.
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#006398] text-white font-bold text-[13px] hover:bg-[#00476e] transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
