/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { TabType } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HighlightsScreen } from './components/HighlightsScreen';
import { ExperienceScreen } from './components/ExperienceScreen';
import { EducationScreen } from './components/EducationScreen';
import { ProjectsScreen } from './components/ProjectsScreen';
import { ContactScreen } from './components/ContactScreen';
import { ResumeModal } from './components/ResumeModal';
import { LinksScreen } from './components/LinksScreen';

const resolveTabFromLocation = (): TabType => {
  if (typeof window === 'undefined') return 'highlights';

  const validTabs: TabType[] = ['highlights', 'about', 'experience', 'education', 'projects', 'contact', 'links'];

  // 1. Check URL hash (e.g. #links, #/links, #projects)
  const cleanHash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
  if (validTabs.includes(cleanHash as TabType)) {
    return cleanHash === 'about' ? 'highlights' : (cleanHash as TabType);
  }

  // 2. Check query params (e.g. ?p=/links or ?tab=links)
  const params = new URLSearchParams(window.location.search);
  const pParam = params.get('p') || params.get('page') || params.get('tab');
  if (pParam) {
    const cleanParam = pParam.replace(/^\//, '').toLowerCase();
    if (validTabs.includes(cleanParam as TabType)) {
      return cleanParam === 'about' ? 'highlights' : (cleanParam as TabType);
    }
  }

  // 3. Check pathname (e.g. /links, /links/, /<repo-name>/links, /<repo-name>/links/)
  const pathname = window.location.pathname.toLowerCase().replace(/\/$/, '');
  if (pathname.endsWith('/links')) {
    return 'links';
  }
  for (const tab of validTabs) {
    if (pathname.endsWith(`/${tab}`)) {
      return tab === 'about' ? 'highlights' : tab;
    }
  }

  return 'highlights';
};

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>(resolveTabFromLocation);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Sync tab with URL location/hash
  useEffect(() => {
    const handleRouteSync = () => {
      const detected = resolveTabFromLocation();
      setCurrentTab(detected);
    };

    handleRouteSync();
    window.addEventListener('hashchange', handleRouteSync);
    window.addEventListener('popstate', handleRouteSync);
    return () => {
      window.removeEventListener('hashchange', handleRouteSync);
      window.removeEventListener('popstate', handleRouteSync);
    };
  }, []);

  const handleSelectTab = (tab: TabType) => {
    setCurrentTab(tab);
    window.location.hash = tab === 'highlights' ? 'about' : tab;
  };

  return (
    <div className="min-h-screen bg-[#faf8ff] text-[#131b2e] flex flex-col font-sans selection:bg-[#cce5ff] selection:text-[#001d31]">
      {/* Top Header Navigation */}
      <Header
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Main Content Area */}
      <main className="w-full pt-24 pb-16 flex-1 bg-[#faf8ff]">
        <div className="max-w-[76rem] mx-auto px-4 md:px-6 lg:px-8 py-6">
          {currentTab === 'highlights' && (
            <HighlightsScreen onNavigate={handleSelectTab} />
          )}
          {currentTab === 'experience' && (
            <ExperienceScreen />
          )}
          {currentTab === 'education' && (
            <EducationScreen />
          )}
          {currentTab === 'projects' && (
            <ProjectsScreen />
          )}
          {currentTab === 'contact' && (
            <ContactScreen
              onNavigate={handleSelectTab}
              onRequestResume={() => setIsResumeModalOpen(true)}
            />
          )}
          {currentTab === 'links' && (
            <LinksScreen
              onNavigate={handleSelectTab}
              onOpenResume={() => setIsResumeModalOpen(true)}
            />
          )}
        </div>
      </main>

      {/* Footer */}
      <Footer onSelectTab={handleSelectTab} />

      {/* Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}
