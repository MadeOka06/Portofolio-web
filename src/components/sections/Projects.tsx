import { useState } from 'react';
import { IconExternalLink, IconGithub, IconX, IconCheckCircle } from '../common/Icons';
import { projectsData } from '../../data/portfolioData';
import type { ProjectItem } from '../../types';
import Reveal from '../common/Reveal';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['Semua', 'Web App', 'Mobile App', 'Sistem Informasi'];

  const filteredProjects =
    selectedCategory === 'Semua'
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section
      id="proyek"
      className="py-20 md:py-28 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Reveal animation="fade-down">
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full bg-[#4A7FA7]/15 border border-[#4A7FA7]/30 text-[#60A5FA]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" />
              Portofolio Unggulan
            </span>
          </Reveal>

          <Reveal animation="fade-up" delay={150}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 mb-4 tracking-tight text-[#F6FAFD]">
              Proyek Pilihan
            </h2>
            <p className="text-base sm:text-lg text-[#B3CFE5]">
              Berikut adalah proyek pengembangan perangkat lunak dan aplikasi yang telah saya rancang serta kembangkan.
            </p>
          </Reveal>
        </div>

        {/* Category Filter Pills */}
        <Reveal animation="fade-up" delay={250}>
          <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
            {categories.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#4A7FA7] to-[#2563EB] text-white shadow-[0_4px_18px_rgba(37,99,235,0.4)] scale-105'
                      : 'bg-[#1A3D63]/50 text-[#B3CFE5] border border-[#4A7FA7]/30 hover:border-[#60A5FA]/60 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, idx) => (
            <Reveal
              key={project.id}
              animation="fade-up"
              delay={idx * 120}
            >
              <div
                className="h-full rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-400 group hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(74,127,167,0.22)] bg-gradient-to-b from-[#1A3D63]/70 via-[#132d4a]/75 to-[#0b1c31]/85 backdrop-blur-xl border border-[#4A7FA7]/25 hover:border-[#60A5FA]/60"
              >
                {/* Card Header */}
                <div className="p-7 sm:p-8 bg-gradient-to-b from-white/5 to-transparent border-b border-[#4A7FA7]/15">
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="px-3.5 py-1 rounded-full text-xs font-semibold bg-[#0A1931]/70 text-[#93C5FD] border border-[#4A7FA7]/35 shadow-inner">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2.5 rounded-xl transition-all duration-300 hover:scale-110 bg-[#0A1931]/60 text-[#B3CFE5] hover:text-white border border-[#4A7FA7]/25 hover:border-[#60A5FA]"
                          title="Source Code"
                        >
                          <IconGithub className="w-4 h-4" />
                        </a>
                      )}
                      {project.demoUrl && (
                        <button
                          type="button"
                          onClick={() => setActiveModalProject(project)}
                          className="p-2.5 rounded-xl transition-all duration-300 hover:scale-110 cursor-pointer bg-[#0A1931]/60 text-[#B3CFE5] hover:text-white border border-[#4A7FA7]/25 hover:border-[#60A5FA]"
                          title="Detail Proyek"
                        >
                          <IconExternalLink className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-[#F6FAFD] group-hover:text-sky-300 transition-colors">
                    {project.title}
                  </h3>
                </div>

                {/* Card Body */}
                <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
                  <p className="text-sm sm:text-base leading-relaxed mb-6 text-[#B3CFE5]/90">
                    {project.summary}
                  </p>

                  <div className="space-y-5 pt-4 border-t border-[#4A7FA7]/15">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs font-medium px-3 py-1 rounded-full bg-[#0A1931]/50 text-[#B3CFE5] border border-[#4A7FA7]/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <button
                        type="button"
                        onClick={() => setActiveModalProject(project)}
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-all duration-300 cursor-pointer text-[#60A5FA] hover:text-sky-300 group/btn"
                      >
                        Pelajari Selengkapnya
                        <span className="transition-transform group-hover/btn:translate-x-1.5">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>

      {/* ── Modal Project Detail ── */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/60 animate-fadeIn"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0d2238]/95 border border-[#4A7FA7]/40 shadow-[0_25px_80px_rgba(0,0,0,0.8)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-xl transition-all duration-300 hover:scale-110 cursor-pointer text-[#B3CFE5] hover:text-white bg-[#0A1931]/60 border border-[#4A7FA7]/30"
            >
              <IconX className="w-5 h-5" />
            </button>

            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold mb-3 bg-[#4A7FA7]/20 text-[#60A5FA] border border-[#4A7FA7]/40">
              {activeModalProject.category}
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold mb-4 text-[#F6FAFD]">
              {activeModalProject.title}
            </h3>

            <p className="leading-relaxed mb-6 text-[#B3CFE5]">
              {activeModalProject.fullDescription}
            </p>

            <h4 className="text-sm font-bold uppercase tracking-wider mb-3 text-[#60A5FA]">
              Fitur &amp; Kemampuan Utama:
            </h4>
            <div className="space-y-2.5 mb-6">
              {activeModalProject.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2.5 text-sm text-[#B3CFE5]">
                  <IconCheckCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#38BDF8]" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <h4 className="text-sm font-bold uppercase tracking-wider mb-3 text-[#60A5FA]">
              Teknologi Digunakan:
            </h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {activeModalProject.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-xs font-medium px-3 py-1.5 rounded-full bg-[#1A3D63]/60 text-[#93C5FD] border border-[#4A7FA7]/30"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#4A7FA7]/20">
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="px-5 py-2.5 text-sm font-semibold rounded-xl transition-colors cursor-pointer text-[#B3CFE5] hover:text-white bg-[#0A1931]/60"
              >
                Tutup
              </button>
              {activeModalProject.githubUrl && (
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-[#4A7FA7] to-[#2563EB] text-white shadow-lg"
                >
                  <IconGithub className="w-4 h-4" />
                  Lihat Repository
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
