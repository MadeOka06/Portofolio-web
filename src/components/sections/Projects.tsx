import { useState } from 'react';
import { IconGithub, IconX } from '../common/Icons';
import { projectsData } from '../../data/portfolioData';
import type { ProjectItem } from '../../types';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['Semua', 'Web App', 'Mobile App', 'Sistem Informasi'];

  const filteredProjects =
    selectedCategory === 'Semua'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="proyek" className="border-b border-[#DDD9CD] py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Index Header ── */}
        <div className="grid grid-cols-12 pb-6 mb-12 border-b border-[#DDD9CD] text-[11px] font-mono-swiss text-[#585752]">
          <div className="col-span-12 sm:col-span-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#D84227]" />
            <span>SEC. 05 — PORTOFOLIO REKAYASA SISTEM</span>
          </div>
          <div className="col-span-12 sm:col-span-8 sm:text-right mt-1 sm:mt-0 text-[#87857E]">
            PROYEK TERPILIH // FOLIO
          </div>
        </div>

        {/* Section Headline & Category Filter */}
        <div className="grid grid-cols-12 gap-8 mb-12 items-end">
          <div className="col-span-12 lg:col-span-6">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121212] tracking-[-0.03em] leading-tight">
              Artefak Perangkat Lunak &amp; Aplikasi.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-6 flex flex-wrap gap-2 lg:justify-end">
            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`font-mono-swiss text-[11px] tracking-[0.08em] px-4 py-2 border transition-colors cursor-pointer ${
                    isSelected
                      ? 'bg-[#121212] text-[#F5F3EC] border-[#121212]'
                      : 'bg-[#F5F3EC] text-[#585752] border-[#DDD9CD] hover:border-[#121212] hover:text-[#121212]'
                  }`}
                >
                  {category.toUpperCase()}
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Projects Stacked Editorial Showcase (0px Radius) ── */}
        <div className="border-t border-[#DDD9CD]">
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="editorial-row border-b border-[#DDD9CD] py-10 grid grid-cols-12 gap-y-6 lg:gap-8 items-start"
            >
              {/* Col 1-3: Index & Category */}
              <div className="col-span-12 sm:col-span-3 space-y-2">
                <span className="font-mono-swiss text-xs font-semibold text-[#D84227] block">
                  PRJ.0{idx + 1} // {project.category.toUpperCase()}
                </span>
                <span className="font-mono-swiss text-[11px] text-[#87857E]">
                  STATUS: DEPLOYED // REPO
                </span>
              </div>

              {/* Col 4-7: Title & Summary */}
              <div className="col-span-12 sm:col-span-5 space-y-3">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#121212]">
                  {project.title}
                </h3>
                <p className="font-body text-sm sm:text-base text-[#585752] leading-relaxed">
                  {project.summary}
                </p>

                {/* Tech Stack Pills (Monospace, Sharp) */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="font-mono-swiss text-[10px] px-2 py-0.5 bg-[#EFECE3] border border-[#DDD9CD] text-[#121212]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Col 8-12: Actions & Spec Trigger */}
              <div className="col-span-12 sm:col-span-4 flex flex-col justify-between sm:items-end space-y-4">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="font-mono-swiss text-xs tracking-[0.08em] font-semibold text-[#121212] border-b border-[#121212] pb-0.5 hover:text-[#D84227] hover:border-[#D84227] transition-colors cursor-pointer text-left sm:text-right"
                >
                  DOKUMENTASI LENGKAP →
                </button>

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono-swiss text-[11px] text-[#585752] hover:text-[#121212] flex items-center gap-1.5 transition-colors"
                  >
                    <IconGithub className="w-3.5 h-3.5" />
                    <span>SOURCE CODE // GITHUB</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ── Swiss Editorial Broadsheet Modal ── */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#121212]/70 backdrop-blur-none"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="max-w-3xl w-full p-8 sm:p-12 bg-[#F5F3EC] border-2 border-[#121212] relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button (Square, Sharp) */}
            <button
              type="button"
              onClick={() => setActiveModalProject(null)}
              className="absolute top-6 right-6 p-2 border border-[#DDD9CD] hover:border-[#121212] text-[#121212] transition-colors cursor-pointer bg-[#EFECE3]"
              aria-label="Tutup"
            >
              <IconX className="w-5 h-5" />
            </button>

            <span className="font-mono-swiss text-xs font-semibold text-[#D84227] block mb-2">
              DOKUMENTASI PROYEK // {activeModalProject.category.toUpperCase()}
            </span>

            <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-[#121212] mb-6">
              {activeModalProject.title}
            </h3>

            <p className="font-body text-base text-[#585752] leading-relaxed mb-8 border-b border-[#DDD9CD] pb-6">
              {activeModalProject.fullDescription}
            </p>

            {/* Features */}
            <div className="mb-8">
              <h4 className="font-mono-swiss text-xs font-semibold text-[#121212] mb-4">
                FITUR &amp; ARSITEKTUR UTAMA:
              </h4>
              <div className="space-y-3">
                {activeModalProject.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3 font-body text-sm text-[#121212]">
                    <span className="font-mono-swiss text-[#D84227] text-xs mt-0.5">●</span>
                    <span className="leading-relaxed">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stack */}
            <div className="mb-8 border-t border-[#DDD9CD] pt-6">
              <h4 className="font-mono-swiss text-xs font-semibold text-[#121212] mb-3">
                TEKNOLOGI DIGUNAKAN:
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono-swiss text-xs px-3 py-1 bg-[#EFECE3] border border-[#DDD9CD] text-[#121212]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Action */}
            <div className="flex items-center justify-between border-t border-[#121212] pt-6">
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="font-mono-swiss text-xs tracking-[0.08em] text-[#585752] hover:text-[#121212] cursor-pointer"
              >
                [ TUTUP MODAL ]
              </button>

              {activeModalProject.githubUrl && (
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono-swiss text-xs tracking-[0.08em] px-5 py-2.5 bg-[#121212] text-[#F5F3EC] hover:bg-[#D84227] transition-colors flex items-center gap-2"
                >
                  <IconGithub className="w-4 h-4" />
                  <span>LIHAT REPOSITORY →</span>
                </a>
              )}
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
