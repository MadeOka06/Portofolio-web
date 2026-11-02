import { IconCode, IconSmartphone, IconDatabase, IconWrench } from '../common/Icons';
import { skillsData } from '../../data/portfolioData';
import Reveal from '../common/Reveal';

export default function Skills() {
  const renderIcon = (iconName: string) => {
    const cls = "w-6 h-6";
    switch (iconName) {
      case 'code':       return <IconCode className={cls} style={{ color: '#60A5FA' }} />;
      case 'smartphone': return <IconSmartphone className={cls} style={{ color: '#60A5FA' }} />;
      case 'database':   return <IconDatabase className={cls} style={{ color: '#60A5FA' }} />;
      case 'wrench':
      default:           return <IconWrench className={cls} style={{ color: '#60A5FA' }} />;
    }
  };

  return (
    <section
      id="keahlian"
      className="py-20 md:py-28 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal animation="fade-down">
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full bg-[#4A7FA7]/15 border border-[#4A7FA7]/30 text-[#60A5FA]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] animate-ping" />
              Kemampuan Teknis
            </span>
          </Reveal>

          <Reveal animation="fade-up" delay={150}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 mb-4 tracking-tight text-[#F6FAFD]">
              Keahlian &amp; Tech Stack
            </h2>
            <p className="text-base sm:text-lg text-[#B3CFE5]">
              Kombinasi teknologi yang telah saya kuasai dan terapkan dalam berbagai proyek perkuliahan, organisasi, dan eksplorasi mandiri.
            </p>
          </Reveal>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {skillsData.map((cat, idx) => (
            <Reveal
              key={cat.id}
              className={`${cat.colSpan} flex`}
              animation="fade-up"
              delay={idx * 120}
            >
              <div
                className="w-full rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-400 group hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(74,127,167,0.22)] bg-gradient-to-b from-[#1A3D63]/70 via-[#142f4c]/75 to-[#0b1c31]/85 backdrop-blur-xl border border-[#4A7FA7]/25 hover:border-[#60A5FA]/60"
              >
                <div>
                  {/* Icon with soft circular backdrop */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-inner bg-[#0A1931]/70 border border-[#4A7FA7]/30 group-hover:border-[#60A5FA]/50"
                  >
                    {renderIcon(cat.iconName)}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#F6FAFD] group-hover:text-sky-300 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-sm sm:text-base leading-relaxed mb-6 text-[#B3CFE5]/90">
                    {cat.description}
                  </p>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2 pt-5 border-t border-[#4A7FA7]/20">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs sm:text-sm font-medium px-3.5 py-1.5 rounded-full transition-all duration-300 hover:scale-105 bg-[#0A1931]/60 text-[#93C5FD] border border-[#4A7FA7]/30 hover:border-[#60A5FA] hover:text-white hover:bg-[#4A7FA7]/30"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
