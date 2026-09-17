import React, { useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';
import { ProjectScreenshotPreview } from './ProjectScreenshotPreview';

export const ProjectsScreen: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<ProjectItem | null>(null);

  const filters = [
    { label: 'All (7)', value: 'All' },
    { label: 'Databases', value: 'Databases' },
    { label: 'C# & Architecture', value: 'C# & Architecture' },
    { label: 'Analytics & ERP', value: 'Analytics & ERP' },
    { label: 'Python Logic', value: 'Python Logic' },
  ];

  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.filterCategory === selectedFilter);

  return (
    <div className="flex flex-col w-full">
      {/* Header section */}
      <section className="relative w-full pb-8">
        <div className="flex flex-col gap-2 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 self-start px-3 py-1 rounded-full bg-[#006398]/10 text-[#006398]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#006398] animate-pulse"></span>
            <span className="text-[11px] uppercase tracking-wider font-bold">
              Applied Systems &amp; Analytics
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#0a1e3a] tracking-tight">
            Academic &amp; Applied Projects
          </h1>
          <p className="text-lg text-[#44474d] font-normal leading-relaxed">
            Hands-on technical solutions spanning database modeling, enterprise ERP simulations, algorithmic logic, and IoT systems architecture.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2 mt-8">
          {filters.map((filter) => {
            const isActive = selectedFilter === filter.value;
            return (
              <button
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value)}
                className={`px-4 py-1.5 rounded-full text-[13px] font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#0a1e3a] text-white shadow-xs'
                    : 'bg-[#f2f3ff] text-[#44474d] hover:text-[#0a1e3a] hover:bg-[#eaedff]'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="w-full pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            return (
              <article
                key={project.id}
                onClick={() => setActiveProject(project)}
                className="group bg-white rounded-xl p-5 sm:p-6 shadow-xs border border-[#eaedff]/80 hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1 relative overflow-hidden"
              >
                <div>
                  {/* Top Bar: Category Pill & Project Number */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] uppercase font-bold text-[#006398] tracking-wider bg-[#cce5ff]/50 px-2 py-0.5 rounded truncate max-w-[80%]">
                      {project.category}
                    </span>
                    <span className="text-[12px] font-mono text-[#75777e] font-semibold group-hover:text-[#006398] transition-colors">
                      {project.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-[19px] text-[#0a1e3a] font-bold leading-snug group-hover:text-[#006398] transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] text-[#44474d] mt-2.5 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Visual Preview Frame */}
                  <div className="mt-4 rounded-xl bg-[#f2f4fc] border border-[#dce3f6] p-2.5 sm:p-3 overflow-hidden">
                    {project.id !== 'school-db' ? (
                      <div className="rounded-lg overflow-hidden border border-[#d8e1f5] bg-white shadow-2xs mb-2.5">
                        <ProjectScreenshotPreview projectId={project.id} />
                      </div>
                    ) : (
                      /* Fallback for School Database Project */
                      <div className="p-2 space-y-2 mb-2">
                        <div className="bg-white p-3 rounded-lg border border-[#eaedff]">
                          <div className="flex items-center gap-2 text-[#006398] font-bold text-[12px]">
                            <span className="material-symbols-outlined text-[17px]">school</span>
                            <span>Student Portal Snapshot</span>
                          </div>
                          <p className="text-[#44474d] text-[11px] mt-1 leading-relaxed">
                            Live view of enrolled classes and semester grades.
                          </p>
                        </div>
                        <div className="bg-white p-3 rounded-lg border border-[#eaedff]">
                          <div className="flex items-center gap-2 text-[#006398] font-bold text-[12px]">
                            <span className="material-symbols-outlined text-[17px]">event_available</span>
                            <span>Course Registration</span>
                          </div>
                          <p className="text-[#44474d] text-[11px] mt-1 leading-relaxed">
                            Interactive enrollment and schedule verification.
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Preview Footer */}
                    {project.previewFooter && (
                      <div className="flex items-center justify-between text-[11px] px-0.5 pt-0.5">
                        <div className="flex items-center gap-1.5 text-[#006398] font-bold truncate pr-2">
                          {project.previewFooter.icon && (
                            <span className="material-symbols-outlined text-[15px] shrink-0">
                              {project.previewFooter.icon}
                            </span>
                          )}
                          <span className="truncate">{project.previewFooter.left}</span>
                        </div>
                        <span className="text-[#44474d] font-medium shrink-0">
                          {project.previewFooter.right}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer: Tags */}
                <div className="pt-4 mt-4 border-t border-[#f2f3ff] flex flex-wrap gap-1.5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-0.5 rounded bg-[#f2f3ff] text-[#0a1e3a] text-[11px] font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Project Detail Modal */}
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </div>
  );
};
