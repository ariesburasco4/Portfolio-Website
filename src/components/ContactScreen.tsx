import React, { useState } from 'react';
import { TabType } from '../types';
import { CANDIDATE_INFO } from '../data/portfolioData';
import { Copy, Check, ArrowUpRight, Download, Mail, Briefcase, MapPin } from 'lucide-react';

interface ContactScreenProps {
  onNavigate: (tab: TabType) => void;
  onRequestResume: () => void;
}

export const ContactScreen: React.FC<ContactScreenProps> = ({ onNavigate, onRequestResume }) => {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CANDIDATE_INFO.email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Banner Card */}
      <section className="w-full rounded-2xl bg-gradient-to-b from-[#eef4ff] to-[#f6f9ff] border border-[#dbe6fd] p-8 md:p-12 text-center shadow-xs mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0a1e3a] tracking-tight leading-snug max-w-3xl mx-auto">
          Interested in discussing procurement, supply chain, analytics, or technology opportunities? I'd be glad to connect.
        </h1>
      </section>

      {/* Direct Channels Header */}
      <div className="flex flex-col items-center text-center max-w-xl mx-auto mb-8">
        <span className="text-[11px] font-bold uppercase tracking-wider text-[#006398] block mb-1.5">
          Direct Channels
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0a1e3a] tracking-tight">
          Contact Information
        </h2>
        <p className="text-[14px] text-[#44474d] mt-2 leading-relaxed">
          Connect directly across preferred business networks or initiate consultation by phone and email.
        </p>
      </div>

      {/* Centered Cards Column */}
      <div className="w-full max-w-xl mx-auto space-y-4 mb-12">
        {/* Email Card */}
        <div
          onClick={handleCopyEmail}
          className="p-4 sm:p-5 rounded-xl bg-white border border-[#eaedff] shadow-xs flex items-center justify-between group hover:border-[#006398] transition-all cursor-pointer"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#e2e7ff] text-[#006398] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]">mail</span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#44474d] font-bold block">
                Direct Email
              </span>
              <span className="text-[15px] font-bold text-[#0a1e3a] group-hover:text-[#006398] transition-colors">
                {CANDIDATE_INFO.email}
              </span>
            </div>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCopyEmail();
            }}
            className="p-2 rounded-lg text-[#75777e] group-hover:text-[#006398] group-hover:bg-[#f2f3ff] transition-colors"
            title="Copy email address"
          >
            {emailCopied ? (
              <Check size={18} className="text-emerald-600" />
            ) : (
              <ArrowUpRight size={20} />
            )}
          </button>
        </div>

        {/* LinkedIn Card */}
        <a
          href={CANDIDATE_INFO.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="p-4 sm:p-5 rounded-xl bg-white border border-[#eaedff] shadow-xs flex items-center justify-between group hover:border-[#006398] transition-all block"
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#e2e7ff] text-[#006398] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]">work</span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#44474d] font-bold block">
                LinkedIn Professional Network
              </span>
              <span className="text-[15px] font-bold text-[#0a1e3a] group-hover:text-[#006398] transition-colors">
                {CANDIDATE_INFO.linkedin}
              </span>
            </div>
          </div>
          <div className="p-2 text-[#75777e] group-hover:text-[#006398] transition-colors">
            <ArrowUpRight size={20} />
          </div>
        </a>

        {/* Primary Base Card */}
        <div className="p-4 sm:p-5 rounded-xl bg-white border border-[#eaedff] shadow-xs flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#e2e7ff] text-[#006398] flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-[20px]">location_on</span>
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-wider text-[#44474d] font-bold block">
                Primary Base
              </span>
              <span className="text-[15px] font-bold text-[#0a1e3a]">
                {CANDIDATE_INFO.location} • {CANDIDATE_INFO.timezone}
              </span>
            </div>
          </div>
        </div>

        {/* Credential Package Card */}
        <div className="p-6 sm:p-7 rounded-xl bg-white border border-[#eaedff] shadow-xs space-y-3 mt-6">
          <div className="flex items-center gap-2 text-[#006398] text-[11px] font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-[16px]">badge</span>
            <span>Credential Package</span>
          </div>
          <h3 className="text-xl font-bold text-[#0a1e3a]">
            Looking for an offline resume copy?
          </h3>
          <p className="text-[14px] text-[#44474d] leading-relaxed">
            Includes complete course listings, professional references, and GPA verification from Walton College.
          </p>
          <div className="pt-2">
            <button
              onClick={onRequestResume}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#006398] text-white text-[13px] font-bold hover:bg-[#00476e] transition-all shadow-xs cursor-pointer active:scale-95"
              id="request-resume-button"
            >
              <span className="material-symbols-outlined text-[18px]">download</span>
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Case Studies Callout Footer */}
      <section className="mt-6 p-6 md:p-8 rounded-2xl bg-white border border-[#eaedff] shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-xl">
          <h3 className="text-xl font-bold text-[#0a1e3a]">
            Looking for specific case studies?
          </h3>
          <p className="text-[14px] text-[#44474d] mt-1 leading-relaxed">
            Explore end-to-end models across inventory optimization, sourcing workflows, and procurement dashboards.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={() => onNavigate('projects')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#f2f3ff] hover:bg-[#eaedff] text-[#0a1e3a] text-[13px] font-bold transition-all cursor-pointer"
          >
            <span>Browse Projects</span>
            <span className="font-mono text-[13px]">→</span>
          </button>
          <button
            onClick={() => onNavigate('experience')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#006398] hover:bg-[#00476e] text-white text-[13px] font-bold transition-all shadow-xs cursor-pointer"
          >
            <span>View Career Timeline</span>
          </button>
        </div>
      </section>
    </div>
  );
};
