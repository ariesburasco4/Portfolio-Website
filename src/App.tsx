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

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('highlights');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Sync tab with URL hash if available
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as TabType;
      const validTabs: TabType[] = ['highlights', 'experience', 'education', 'projects', 'contact'];
      if (validTabs.includes(hash)) {
        setCurrentTab(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleSelectTab = (tab: TabType) => {
    setCurrentTab(tab);
    window.location.hash = tab;
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
