import { useState } from 'react';
import { IconExternalLink, IconGithub, IconX, IconCheckCircle } from '../common/Icons';
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
    <section
      id="proyek"
      className="py-20 md:py-28"
      style={{ borderBottom: '1px solid rgba(74,127,167,0.15)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span
            className="text-xs sm:text-sm font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
            style={{
              color: '#4A7FA7',
              backgroundColor: 'rgba(74, 127, 167, 0.12)',
              border: '1px solid rgba(74, 127, 167, 0.3)',
            }}
          >
            Portofolio Unggulan
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold mt-3 mb-4 tracking-tight"
            style={{ color: '#F6FAFD' }}
          >
            Proyek Pilihan
          </h2>
          <p className="text-base sm:text-lg" style={{ color: '#B3CFE5' }}>
            Berikut adalah proyek pengembangan perangkat lunak dan aplikasi yang telah saya rancang serta kembangkan.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => {
            const isSelected = selectedCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className="px-4 py-2 text-sm font-semibold rounded-xl transition-all cursor-pointer hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: isSelected ? '#4A7FA7' : 'rgba(26, 61, 99, 0.7)',
                  color: isSelected ? '#F6FAFD' : '#B3CFE5',
                  border: isSelected
                    ? '1px solid #4A7FA7'
                    : '1px solid rgba(74, 127, 167, 0.2)',
                  boxShadow: isSelected ? '0 4px 16px rgba(74,127,167,0.35)' : 'none',
                }}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 group hover:-translate-y-2"
              style={{
                backgroundColor: 'rgba(26, 61, 99, 0.7)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(74, 127, 167, 0.2)',
                boxShadow: '0 4px 24px rgba(10,25,49,0.3)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.border = '1px solid rgba(74, 127, 167, 0.5)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 48px rgba(74,127,167,0.2)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.border = '1px solid rgba(74, 127, 167, 0.2)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(10,25,49,0.3)';
              }}
            >
              {/* Card Header */}
              <div
                className="p-6 sm:p-8"
                style={{
                  background: `linear-gradient(135deg, rgba(26,61,99,0.9) 0%, rgba(10,25,49,0.6) 100%)`,
                  borderBottom: '1px solid rgba(74, 127, 167, 0.15)',
                }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: 'rgba(10, 25, 49, 0.7)',
                      color: '#4A7FA7',
                      border: '1px solid rgba(74, 127, 167, 0.35)',
                    }}
                  >
                    {project.category}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-lg transition-colors"
                        style={{
                          backgroundColor: 'rgba(10,25,49,0.6)',
                          color: '#B3CFE5',
                          border: '1px solid rgba(74,127,167,0.2)',
                        }}
                        title="Source Code"
                      >
                        <IconGithub className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <button
                        type="button"
                        onClick={() => setActiveModalProject(project)}
                        className="p-2 rounded-lg transition-colors cursor-pointer"
                        style={{
                          backgroundColor: 'rgba(10,25,49,0.6)',
                          color: '#B3CFE5',
                          border: '1px solid rgba(74,127,167,0.2)',
                        }}
                        title="Detail Proyek"
                      >
                        <IconExternalLink className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                </div>

                <h3
                  className="text-2xl font-bold transition-colors"
                  style={{ color: '#F6FAFD' }}
                >
                  {project.title}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex flex-col justify-between flex-1">
                <p className="text-sm sm:text-base leading-relaxed mb-6" style={{ color: '#B3CFE5' }}>
                  {project.summary}
                </p>

                <div
                  className="space-y-5 pt-4"
                  style={{ borderTop: '1px solid rgba(74,127,167,0.15)' }}
                >
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-xs font-medium px-2.5 py-1 rounded-md"
                        style={{
                          backgroundColor: 'rgba(10, 25, 49, 0.5)',
                          color: '#B3CFE5',
                          border: '1px solid rgba(74,127,167,0.15)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold transition-colors cursor-pointer group/btn"
                      style={{ color: '#4A7FA7' }}
                      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#6098bf'; }}
                      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#4A7FA7'; }}
                    >
                      Pelajari Selengkapnya
                      <span className="transition-transform group-hover/btn:translate-x-1">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ── Modal Project Detail ── */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn"
          style={{ backgroundColor: 'rgba(10, 25, 49, 0.8)' }}
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="max-w-2xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto rounded-2xl"
            style={{
              backgroundColor: '#1A3D63',
              border: '1px solid rgba(74, 127, 167, 0.3)',
              boxShadow: '0 24px 80px rgba(10,25,49,0.7)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setActiveModalProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg transition-colors cursor-pointer"
              style={{ color: '#B3CFE5', backgroundColor: 'rgba(10,25,49,0.4)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#F6FAFD'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#B3CFE5'; }}
            >
              <IconX className="w-5 h-5" />
            </button>

            <span
              className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-3"
              style={{
                backgroundColor: 'rgba(74, 127, 167, 0.15)',
                color: '#4A7FA7',
                border: '1px solid rgba(74, 127, 167, 0.3)',
              }}
            >
              {activeModalProject.category}
            </span>

            <h3 className="text-2xl sm:text-3xl font-extrabold mb-4" style={{ color: '#F6FAFD' }}>
              {activeModalProject.title}
            </h3>

            <p className="leading-relaxed mb-6" style={{ color: '#B3CFE5' }}>
              {activeModalProject.fullDescription}
            </p>

            <h4
              className="text-sm font-bold uppercase tracking-wider mb-3"
              style={{ color: '#4A7FA7' }}
            >
              Fitur &amp; Kemampuan Utama:
            </h4>
            <div className="space-y-2 mb-6">
              {activeModalProject.features.map((feat, fIdx) => (
                <div key={fIdx} className="flex items-start gap-2.5 text-sm" style={{ color: '#B3CFE5' }}>
                  <IconCheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#4A7FA7' }} />
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <h4
              className="text-sm font-bold uppercase tracking-wider mb-3"
              style={{ color: '#4A7FA7' }}
            >
              Teknologi Digunakan:
            </h4>
            <div className="flex flex-wrap gap-2 mb-8">
              {activeModalProject.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="text-xs font-medium px-3 py-1 rounded-lg"
                  style={{
                    backgroundColor: 'rgba(74, 127, 167, 0.12)',
                    color: '#4A7FA7',
                    border: '1px solid rgba(74, 127, 167, 0.3)',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            <div
              className="flex items-center justify-end gap-3 pt-4"
              style={{ borderTop: '1px solid rgba(74,127,167,0.2)' }}
            >
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer"
                style={{ color: '#B3CFE5', backgroundColor: 'rgba(10,25,49,0.4)' }}
              >
                Tutup
              </button>
              {activeModalProject.githubUrl && (
                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold rounded-lg shadow-sm transition-all hover:scale-105"
                  style={{
                    backgroundColor: '#4A7FA7',
                    color: '#F6FAFD',
                    boxShadow: '0 4px 16px rgba(74,127,167,0.35)',
                  }}
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
