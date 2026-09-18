import React, { useState } from 'react';
import { TabType } from '../types';
import { CANDIDATE_INFO } from '../data/portfolioData';
import {
  ExternalLink,
  Mail,
  Copy,
  Check,
  FileText,
  FolderGit2,
  Briefcase,
  GraduationCap,
  Award,
  ArrowLeft,
  Sparkles,
  MapPin,
} from 'lucide-react';

interface LinksScreenProps {
  onNavigate: (tab: TabType) => void;
  onOpenResume: () => void;
}

export const LinksScreen: React.FC<LinksScreenProps> = ({ onNavigate, onOpenResume }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText(CANDIDATE_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full max-w-2xl mx-auto py-4 px-2 sm:px-4 flex flex-col items-center">
      {/* Back button */}
      <div className="w-full flex justify-start mb-6">
        <button
          onClick={() => onNavigate('highlights')}
          className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#006398] hover:text-[#00476e] bg-white border border-[#eaedff] px-3.5 py-1.5 rounded-lg shadow-2xs hover:shadow-xs transition-all cursor-pointer"
          id="links-back-button"
        >
          <ArrowLeft size={16} />
          <span>Back to Portfolio</span>
        </button>
      </div>

      {/* Profile Header */}
      <div className="flex flex-col items-center text-center mb-8">
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-2xl bg-[#0a1e3a] text-white flex items-center justify-center text-3xl font-extrabold shadow-md border-2 border-white">
            {CANDIDATE_INFO.initials}
          </div>
          <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 border-2 border-white rounded-full flex items-center justify-center" title="Available for roles">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#0a1e3a] tracking-tight mb-1">
          {CANDIDATE_INFO.name}
        </h1>
        <p className="text-[14px] font-bold text-[#006398] mb-1 tracking-wide">
          {CANDIDATE_INFO.title}
        </p>
        <p className="text-[13px] text-[#44474d] max-w-md mb-3">
          {CANDIDATE_INFO.headline}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 text-[12px] text-[#44474d] mb-4">
          <span className="inline-flex items-center gap-1 bg-[#eaedff] text-[#0a1e3a] px-2.5 py-1 rounded-full font-semibold">
            <MapPin size={13} className="text-[#006398]" />
            {CANDIDATE_INFO.location}
          </span>
          <span className="inline-flex items-center gap-1 bg-[#eaedff] text-[#0a1e3a] px-2.5 py-1 rounded-full font-semibold">
            <GraduationCap size={13} className="text-[#006398]" />
            Walton College M.S. (4.0 GPA)
          </span>
        </div>

        <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          {CANDIDATE_INFO.statusPill}
        </div>
      </div>

      {/* Links Hub Stack */}
      <div className="w-full space-y-3.5">
        {/* 1. LinkedIn */}
        <a
          href={CANDIDATE_INFO.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group w-full flex items-center justify-between p-4 bg-white hover:bg-[#f2f4fc] rounded-xl border border-[#dae2fd] shadow-xs hover:shadow-md transition-all duration-200 text-left cursor-pointer"
          id="link-card-linkedin"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-[#0077b5] text-white flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
              <span className="font-bold text-[18px]">in</span>
            </div>
            <div>
              <div className="font-bold text-[#0a1e3a] text-[15px] group-hover:text-[#006398] transition-colors flex items-center gap-1.5">
                <span>LinkedIn Profile</span>
                <ExternalLink size={14} className="text-zinc-400 group-hover:text-[#006398]" />
              </div>
              <p className="text-[12px] text-[#44474d]">
                Connect professionally & view recommendations
              </p>
            </div>
          </div>
          <span className="text-[11px] font-bold text-[#006398] bg-[#eaedff] px-2.5 py-1 rounded-md hidden sm:inline-block">
            Connect
          </span>
        </a>

        {/* 2. Direct Email */}
        <div
          className="group w-full flex items-center justify-between p-4 bg-white hover:bg-[#f2f4fc] rounded-xl border border-[#dae2fd] shadow-xs hover:shadow-md transition-all duration-200 text-left"
          id="link-card-email"
        >
          <a
            href={`mailto:${CANDIDATE_INFO.email}`}
            className="flex items-center gap-3.5 flex-1 min-w-0"
          >
            <div className="w-11 h-11 rounded-lg bg-[#006398] text-white flex items-center justify-center shrink-0 shadow-2xs group-hover:scale-105 transition-transform">
              <Mail size={20} />
            </div>
            <div className="truncate">
              <div className="font-bold text-[#0a1e3a] text-[15px] group-hover:text-[#006398] transition-colors">
                Email Directly
              </div>
              <p className="text-[12px] text-[#44474d] truncate">
                {CANDIDATE_INFO.email}
              </p>
            </div>
          </a>
          <button
            onClick={handleCopyEmail}
            className="ml-2 inline-flex items-center gap-1 text-[11px] font-bold text-[#006398] bg-[#eaedff] hover:bg-[#dae2fd] px-2.5 py-1.5 rounded-md transition-colors cursor-pointer shrink-0"
            title="Copy email address"
          >
            {copied ? (
              <>
                <Check size={13} className="text-emerald-600" />
                <span className="text-emerald-700">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={13} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* 3. Resume Dossier */}
        <button
          onClick={onOpenResume}
          className="group w-full flex items-center justify-between p-4 bg-gradient-to-r from-[#0a1e3a] to-[#152e52] text-white rounded-xl shadow-xs hover:shadow-md transition-all duration-200 text-left cursor-pointer"
          id="link-card-resume"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-white/10 text-white flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform border border-white/20">
              <FileText size={20} className="text-sky-300" />
            </div>
            <div>
              <div className="font-bold text-white text-[15px] flex items-center gap-1.5">
                <span>View Full Master's Resume</span>
                <Sparkles size={14} className="text-amber-300" />
              </div>
              <p className="text-[12px] text-zinc-300">
                Walton College • 4.0 GPA • Candidate Dossier & PDF
              </p>
            </div>
          </div>
          <span className="text-[11px] font-bold text-[#0a1e3a] bg-white px-2.5 py-1 rounded-md hidden sm:inline-block shadow-2xs">
            Open PDF
          </span>
        </button>

        {/* 4. Academic & Applied Projects */}
        <button
          onClick={() => onNavigate('projects')}
          className="group w-full flex items-center justify-between p-4 bg-white hover:bg-[#f2f4fc] rounded-xl border border-[#dae2fd] shadow-xs hover:shadow-md transition-all duration-200 text-left cursor-pointer"
          id="link-card-projects"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-[#eef4ff] text-[#006398] flex items-center justify-center shrink-0 border border-[#dae2fd] group-hover:scale-105 transition-transform">
              <FolderGit2 size={20} />
            </div>
            <div>
              <div className="font-bold text-[#0a1e3a] text-[15px] group-hover:text-[#006398] transition-colors">
                Academic & Applied Projects
              </div>
              <p className="text-[12px] text-[#44474d]">
                HogParkApp Capstone, 3NF SQL Schemas, ERP Simulation, BI Dashboards
              </p>
            </div>
          </div>
          <span className="text-[11px] font-semibold text-[#44474d] bg-[#f2f3ff] px-2.5 py-1 rounded-md hidden sm:inline-block">
            6 Projects
          </span>
        </button>

        {/* 5. Professional Experience */}
        <button
          onClick={() => onNavigate('experience')}
          className="group w-full flex items-center justify-between p-4 bg-white hover:bg-[#f2f4fc] rounded-xl border border-[#dae2fd] shadow-xs hover:shadow-md transition-all duration-200 text-left cursor-pointer"
          id="link-card-experience"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-[#eef4ff] text-[#006398] flex items-center justify-center shrink-0 border border-[#dae2fd] group-hover:scale-105 transition-transform">
              <Briefcase size={20} />
            </div>
            <div>
              <div className="font-bold text-[#0a1e3a] text-[15px] group-hover:text-[#006398] transition-colors">
                Professional Experience
              </div>
              <p className="text-[12px] text-[#44474d]">
                Procurement Coordinator at Wilshar Steel & Operations Leadership
              </p>
            </div>
          </div>
          <span className="text-[11px] font-semibold text-[#44474d] bg-[#f2f3ff] px-2.5 py-1 rounded-md hidden sm:inline-block">
            Timeline
          </span>
        </button>

        {/* 6. Education & Academic Credentials */}
        <button
          onClick={() => onNavigate('education')}
          className="group w-full flex items-center justify-between p-4 bg-white hover:bg-[#f2f4fc] rounded-xl border border-[#dae2fd] shadow-xs hover:shadow-md transition-all duration-200 text-left cursor-pointer"
          id="link-card-education"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-[#eef4ff] text-[#006398] flex items-center justify-center shrink-0 border border-[#dae2fd] group-hover:scale-105 transition-transform">
              <GraduationCap size={20} />
            </div>
            <div>
              <div className="font-bold text-[#0a1e3a] text-[15px] group-hover:text-[#006398] transition-colors">
                Education & Degree Programs
              </div>
              <p className="text-[12px] text-[#44474d]">
                M.S. in Information Systems (4.00), B.S. in Business Administration (3.94)
              </p>
            </div>
          </div>
          <span className="text-[11px] font-semibold text-[#44474d] bg-[#f2f3ff] px-2.5 py-1 rounded-md hidden sm:inline-block">
            Degrees
          </span>
        </button>

        {/* 7. Accolades & Leadership */}
        <button
          onClick={() => onNavigate('highlights')}
          className="group w-full flex items-center justify-between p-4 bg-white hover:bg-[#f2f4fc] rounded-xl border border-[#dae2fd] shadow-xs hover:shadow-md transition-all duration-200 text-left cursor-pointer"
          id="link-card-accolades"
        >
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-lg bg-[#eef4ff] text-[#006398] flex items-center justify-center shrink-0 border border-[#dae2fd] group-hover:scale-105 transition-transform">
              <Award size={20} />
            </div>
            <div>
              <div className="font-bold text-[#0a1e3a] text-[15px] group-hover:text-[#006398] transition-colors">
                Key Accolades & Leadership
              </div>
              <p className="text-[12px] text-[#44474d]">
                25%+ Procurement Cost Reduction, Cross-Country Collegiate Captain
              </p>
            </div>
          </div>
          <span className="text-[11px] font-semibold text-[#44474d] bg-[#f2f3ff] px-2.5 py-1 rounded-md hidden sm:inline-block">
            Accolades
          </span>
        </button>
      </div>

      {/* Footer text */}
      <div className="mt-8 text-center text-[12px] text-[#44474d]">
        <p>{CANDIDATE_INFO.copyright}</p>
      </div>
    </div>
  );
};
