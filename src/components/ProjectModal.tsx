import React from 'react';
import { ProjectItem } from '../types';
import { X, CheckCircle2, Layers, Cpu, Database } from 'lucide-react';
import { ProjectScreenshotPreview } from './ProjectScreenshotPreview';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0a1e3a]/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#eaedff] overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 bg-[#f2f3ff] border-b border-[#eaedff] flex items-start justify-between">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#006398] bg-[#cce5ff] px-2.5 py-0.5 rounded">
                {project.category}
              </span>
              <span className="text-[12px] font-mono text-[#44474d] font-bold">
                PROJ-{project.number}
              </span>
            </div>
            <h2 className="text-2xl font-extrabold text-[#0a1e3a] tracking-tight">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#44474d] hover:text-[#0a1e3a] hover:bg-[#eaedff] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Content Scroll */}
        <div className="p-6 overflow-y-auto space-y-6 text-[15px] text-[#131b2e]">
          <div>
            <h3 className="text-[13px] uppercase tracking-wider font-bold text-[#006398] mb-2 flex items-center gap-1.5">
              <Layers size={16} />
              Project Summary
            </h3>
            <p className="text-[#44474d] leading-relaxed">
              {project.details?.overview || project.description}
            </p>
          </div>

          {/* Screenshot Preview for projects */}
          {project.id !== 'school-db' && (
            <div className="rounded-xl overflow-hidden border border-[#dae2fd] shadow-xs bg-[#f4f6ff]">
              <ProjectScreenshotPreview projectId={project.id} isModal={true} />
              {project.previewFooter && (
                <div className="flex items-center justify-between text-[11px] p-2.5 bg-[#f2f4fc] border-t border-[#dae2fd]">
                  <span className="font-bold text-[#006398] flex items-center gap-1.5">
                    {project.previewFooter.icon && (
                      <span className="material-symbols-outlined text-[15px]">
                        {project.previewFooter.icon}
                      </span>
                    )}
                    {project.previewFooter.left}
                  </span>
                  <span className="text-[#44474d] font-medium">{project.previewFooter.right}</span>
                </div>
              )}
            </div>
          )}

          {/* Callout box if exists */}
          {project.callout && (
            <div className="p-4 rounded-xl bg-[#f2f3ff] border border-[#eaedff] space-y-2">
              <div className="flex items-center gap-2 text-[#006398] font-bold text-[13px]">
                <Database size={16} />
                <span>{project.callout.label1}</span>
              </div>
              <p className="text-[13px] text-[#44474d]">{project.callout.text1}</p>
              {project.callout.label2 && (
                <div className="pt-2 border-t border-[#eaedff] text-[13px]">
                  <span className="font-bold text-[#0a1e3a] mr-1">{project.callout.label2}:</span>
                  <span className="text-[#44474d]">{project.callout.text2}</span>
                </div>
              )}
            </div>
          )}

          {/* Key Achievements */}
          {project.details?.keyAchievements && (
            <div>
              <h3 className="text-[13px] uppercase tracking-wider font-bold text-[#006398] mb-3 flex items-center gap-1.5">
                <CheckCircle2 size={16} />
                Key Engineering &amp; Analytical Milestones
              </h3>
              <ul className="space-y-2.5">
                {project.details.keyAchievements.map((ach, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-[14px] text-[#44474d]">
                    <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#006398] shrink-0"></span>
                    <span>{ach}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Architecture Notes */}
          {project.details?.architectureNotes && (
            <div>
              <h3 className="text-[13px] uppercase tracking-wider font-bold text-[#006398] mb-2 flex items-center gap-1.5">
                <Cpu size={16} />
                Systems Architecture &amp; Methodology
              </h3>
              <div className="p-3.5 rounded-lg bg-[#faf8ff] border border-[#dae2fd] text-[13px] font-mono text-[#0a1e3a]">
                {project.details.architectureNotes}
              </div>
            </div>
          )}

          {/* Technologies Used */}
          <div>
            <h3 className="text-[13px] uppercase tracking-wider font-bold text-[#006398] mb-2.5">
              Tools &amp; Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {(project.details?.technicalStack || project.tags).map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md bg-[#eaedff] text-[#0a1e3a] text-[12px] font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#f2f3ff] border-t border-[#eaedff] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#006398] hover:bg-[#00476e] text-white font-bold text-[13px] transition-colors cursor-pointer"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
};
