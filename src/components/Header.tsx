import React, { useState } from 'react';
import { TabType } from '../types';
import { CANDIDATE_INFO } from '../data/portfolioData';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
  onOpenResume?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentTab, onSelectTab, onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showProfileCard, setShowProfileCard] = useState(false);

  const tabs: { id: TabType; label: string }[] = [
    { id: 'about', label: 'About Me' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleTabClick = (tab: TabType) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#faf8ff]/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] border-b border-[#eaedff]/60">
      <div className="h-20 max-w-[76rem] mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <button
          onClick={() => handleTabClick('about')}
          className="flex items-center gap-3 group text-left cursor-pointer focus:outline-none"
          id="header-brand-button"
        >
          <div className="w-10 h-10 rounded-lg bg-[#0a1e3a] text-white flex items-center justify-center text-lg font-bold tracking-tight shadow-sm transition-transform duration-200 group-hover:scale-95">
            {CANDIDATE_INFO.initials}
          </div>
          <div className="flex flex-col">
            <span className="text-[14px] text-[#0a1e3a] font-bold leading-tight group-hover:text-[#006398] transition-colors">
              {CANDIDATE_INFO.name}
            </span>
            <span className="text-[11px] text-[#44474d] tracking-wider uppercase font-semibold">
              {CANDIDATE_INFO.title}
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1.5 bg-[#f2f3ff]/70 p-1.5 rounded-xl border border-[#eaedff]">
          {tabs.map((tab) => {
            const isActive = currentTab === tab.id || (tab.id === 'about' && currentTab === 'highlights');
            return (
              <button
                key={tab.id}
                id={`nav-link-${tab.id}`}
                onClick={() => handleTabClick(tab.id)}
                className={`px-3.5 py-1.5 rounded-lg text-[14px] transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#ffffff] text-[#0a1e3a] font-bold shadow-xs'
                    : 'text-[#44474d] font-medium hover:text-[#131b2e] hover:bg-[#eaedff]/50'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>

        {/* Right CTA & Profile Avatar */}
        <div className="flex items-center gap-3">
          <button
            id="header-contact-cta"
            onClick={() => handleTabClick('contact')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded-lg bg-[#006398] text-white text-[13px] font-bold hover:bg-[#00476e] transition-all duration-200 shadow-sm cursor-pointer hover:shadow-md active:scale-95"
          >
            Get in Touch
          </button>

          {/* Profile Quick-Status Trigger */}
          <div className="relative">
            <button
              id="header-avatar-button"
              onClick={() => setShowProfileCard(!showProfileCard)}
              title="Candidate Profile Summary"
              className="w-8 h-8 rounded-full bg-[#000512] flex items-center justify-center cursor-pointer hover:ring-2 hover:ring-[#006398] transition-all"
            >
              <span className="material-symbols-outlined text-white text-[18px]">person</span>
            </button>

            {/* Quick Profile Dropdown Card */}
            {showProfileCard && (
              <div
                className="absolute right-0 mt-3 w-72 bg-white rounded-xl shadow-xl border border-[#eaedff] p-4 z-50 animate-in fade-in zoom-in-95 duration-150"
                id="header-profile-dropdown"
              >
                <div className="flex items-center gap-3 pb-3 border-b border-[#f2f3ff]">
                  <div className="w-10 h-10 rounded-lg bg-[#0a1e3a] text-white flex items-center justify-center font-bold">
                    {CANDIDATE_INFO.initials}
                  </div>
                  <div>
                    <h4 className="text-[14px] font-bold text-[#0a1e3a]">{CANDIDATE_INFO.name}</h4>
                    <p className="text-[12px] text-[#44474d]">{CANDIDATE_INFO.headline}</p>
                  </div>
                </div>
                <div className="pt-3 text-[12px] space-y-2 text-[#44474d]">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#006398]">location_on</span>
                    <span>{CANDIDATE_INFO.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#006398]">mail</span>
                    <a href={`mailto:${CANDIDATE_INFO.email}`} className="text-[#006398] hover:underline">
                      {CANDIDATE_INFO.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-[#006398]">check_circle</span>
                    <span className="text-emerald-700 font-medium">Available for Opportunities</span>
                  </div>
                </div>
                {onOpenResume && (
                  <button
                    onClick={() => {
                      setShowProfileCard(false);
                      onOpenResume();
                    }}
                    className="w-full mt-3 py-2 bg-[#f2f3ff] hover:bg-[#eaedff] text-[#0a1e3a] font-bold text-[12px] rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[16px] text-[#006398]">description</span>
                    View Full Resume PDF
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#131b2e] hover:bg-[#eaedff] transition-colors"
            aria-label="Toggle menu"
            id="header-mobile-toggle"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#faf8ff] border-b border-[#eaedff] px-4 py-4 space-y-2">
          {tabs.map((tab) => {
            const isActive = currentTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`w-full text-left px-4 py-2.5 rounded-lg text-[15px] font-semibold transition-all ${
                  isActive
                    ? 'bg-[#0a1e3a] text-white shadow-xs'
                    : 'text-[#44474d] hover:bg-[#eaedff]'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
          <button
            onClick={() => handleTabClick('contact')}
            className="w-full mt-2 py-2.5 rounded-lg bg-[#006398] text-white font-bold text-[14px] text-center"
          >
            Get in Touch
          </button>
        </div>
      )}
    </header>
  );
};
