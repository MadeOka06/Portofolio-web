import {
  IconUsers,
  IconPuzzle,
  IconMessageSquare,
  IconClock,
  IconTarget,
  IconLightbulb,
} from '../common/Icons';
import { softSkillsData } from '../../data/portfolioData';
import Reveal from '../common/Reveal';

export default function SoftSkills() {
  const renderIcon = (iconName?: string) => {
    const cls = "w-6 h-6";
    const style = { color: '#60A5FA' };
    switch (iconName) {
      case 'users':     return <IconUsers className={cls} style={style} />;
      case 'puzzle':    return <IconPuzzle className={cls} style={style} />;
      case 'chat':      return <IconMessageSquare className={cls} style={style} />;
      case 'clock':     return <IconClock className={cls} style={style} />;
      case 'target':    return <IconTarget className={cls} style={style} />;
      case 'lightbulb':
      default:          return <IconLightbulb className={cls} style={style} />;
    }
  };

  return (
    <section
      id="soft-skills"
      className="py-20 md:py-24 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal animation="fade-down">
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full bg-[#4A7FA7]/15 border border-[#4A7FA7]/30 text-[#60A5FA]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" />
              Kompetensi Interpersonal
            </span>
          </Reveal>

          <Reveal animation="fade-up" delay={150}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 mb-4 tracking-tight text-[#F6FAFD]">
              Soft Skills &amp; Kepribadian
            </h2>
            <p className="text-base sm:text-lg text-[#B3CFE5]">
              Keterampilan non-teknis yang mendukung kolaborasi produktif, kepemimpinan adaptif, dan eksekusi proyek yang terarah.
            </p>
          </Reveal>
        </div>

        {/* Soft Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkillsData.map((item, idx) => (
            <Reveal
              key={item.id}
              animation="fade-up"
              delay={idx * 90}
            >
              <div
                className="h-full rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-400 group hover:-translate-y-2 hover:shadow-[0_16px_36px_rgba(74,127,167,0.2)] bg-gradient-to-b from-[#1A3D63]/60 via-[#132c48]/70 to-[#0A1931]/80 backdrop-blur-xl border border-[#4A7FA7]/20 hover:border-[#60A5FA]/50"
              >
                <div>
                  <div className="w-13 h-13 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 bg-[#0A1931]/80 border border-[#4A7FA7]/30 shadow-inner">
                    {renderIcon(item.iconName)}
                  </div>
                  <h3 className="text-lg font-bold mb-2.5 text-[#F6FAFD] group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#B3CFE5]/85">
                    {item.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
