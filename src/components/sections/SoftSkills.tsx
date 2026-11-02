import {
  IconUsers,
  IconPuzzle,
  IconMessageSquare,
  IconClock,
  IconTarget,
  IconLightbulb,
} from '../common/Icons';
import { softSkillsData } from '../../data/portfolioData';

export default function SoftSkills() {
  const renderIcon = (iconName?: string) => {
    const cls = "w-6 h-6";
    const style = { color: '#4A7FA7' };
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
      className="py-20 md:py-24"
      style={{ borderBottom: '1px solid rgba(74,127,167,0.15)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className="text-xs sm:text-sm font-semibold uppercase tracking-wider px-3 py-1 rounded-full"
            style={{
              color: '#4A7FA7',
              backgroundColor: 'rgba(74, 127, 167, 0.12)',
              border: '1px solid rgba(74, 127, 167, 0.3)',
            }}
          >
            Kompetensi Interpersonal
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold mt-3 mb-4 tracking-tight"
            style={{ color: '#F6FAFD' }}
          >
            Soft Skills &amp; Kepribadian
          </h2>
          <p className="text-base sm:text-lg" style={{ color: '#B3CFE5' }}>
            Keterampilan non-teknis yang mendukung kolaborasi produktif, kepemimpinan adaptif, dan eksekusi proyek yang terarah.
          </p>
        </div>

        {/* Soft Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {softSkillsData.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-2"
              style={{
                backgroundColor: 'rgba(26, 61, 99, 0.7)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(74, 127, 167, 0.2)',
                boxShadow: '0 4px 24px rgba(10,25,49,0.3)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.border = '1px solid rgba(74, 127, 167, 0.5)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 36px rgba(74,127,167,0.2)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.border = '1px solid rgba(74, 127, 167, 0.2)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(10,25,49,0.3)';
              }}
            >
              <div>
                {/* Icon Container */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-all"
                  style={{
                    backgroundColor: 'rgba(10, 25, 49, 0.6)',
                    border: '1px solid rgba(74, 127, 167, 0.3)',
                  }}
                >
                  {renderIcon(item.iconName)}
                </div>

                <h3
                  className="text-lg font-bold mb-2.5"
                  style={{ color: '#F6FAFD' }}
                >
                  {item.title}
                </h3>

                <p className="text-sm leading-relaxed" style={{ color: '#B3CFE5' }}>
                  {item.description}
                </p>
              </div>

              {/* Decorative bottom bar */}
              <div
                className="h-1 rounded-full mt-6 transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: '#4A7FA7', width: '2rem' }}
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
