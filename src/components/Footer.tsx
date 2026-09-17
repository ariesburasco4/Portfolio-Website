import React from 'react';
import { TabType } from '../types';
import { CANDIDATE_INFO } from '../data/portfolioData';

interface FooterProps {
  onSelectTab: (tab: TabType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  const tabs: { id: TabType; label: string }[] = [
    { id: 'about', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleTabClick = (tab: TabType) => {
    onSelectTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#f2f3ff] border-t border-[#eaedff] py-10 mt-auto">
      <div className="max-w-[76rem] mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
          <div className="flex items-center gap-2 text-[14px] text-[#0a1e3a] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#006398]"></span>
            {CANDIDATE_INFO.name}
          </div>
          <p className="text-[13px] text-[#44474d]">
            {CANDIDATE_INFO.copyright}
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 text-[13px]">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className="text-[#44474d] hover:text-[#0a1e3a] transition-colors cursor-pointer font-medium"
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
};
