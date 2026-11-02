import { IconCode, IconSmartphone, IconDatabase, IconWrench } from '../common/Icons';
import { skillsData } from '../../data/portfolioData';

export default function Skills() {
  const renderIcon = (iconName: string) => {
    const cls = "w-6 h-6";
    switch (iconName) {
      case 'code':       return <IconCode className={cls} style={{ color: '#4A7FA7' }} />;
      case 'smartphone': return <IconSmartphone className={cls} style={{ color: '#4A7FA7' }} />;
      case 'database':   return <IconDatabase className={cls} style={{ color: '#4A7FA7' }} />;
      case 'wrench':
      default:           return <IconWrench className={cls} style={{ color: '#4A7FA7' }} />;
    }
  };

  return (
    <section
      id="keahlian"
      className="py-20 md:py-28"
      style={{ borderTop: '1px solid rgba(74,127,167,0.15)', borderBottom: '1px solid rgba(74,127,167,0.15)' }}
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
            Kemampuan Teknis
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold mt-3 mb-4 tracking-tight"
            style={{ color: '#F6FAFD' }}
          >
            Keahlian &amp; Tech Stack
          </h2>
          <p className="text-base sm:text-lg" style={{ color: '#B3CFE5' }}>
            Kombinasi teknologi yang telah saya kuasai dan terapkan dalam berbagai proyek perkuliahan, organisasi, dan eksplorasi mandiri.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {skillsData.map((cat) => (
            <div
              key={cat.id}
              className={`${cat.colSpan} rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1`}
              style={{
                backgroundColor: 'rgba(26, 61, 99, 0.7)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(74, 127, 167, 0.2)',
                boxShadow: '0 4px 24px rgba(10,25,49,0.3)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.border = '1px solid rgba(74, 127, 167, 0.5)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(74,127,167,0.15)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.border = '1px solid rgba(74, 127, 167, 0.2)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(10,25,49,0.3)';
              }}
            >
              <div>
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{
                    backgroundColor: 'rgba(10, 25, 49, 0.6)',
                    border: '1px solid rgba(74, 127, 167, 0.3)',
                  }}
                >
                  {renderIcon(cat.iconName)}
                </div>

                <h3
                  className="text-xl font-bold mb-2 transition-colors"
                  style={{ color: '#F6FAFD' }}
                >
                  {cat.title}
                </h3>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#B3CFE5' }}>
                  {cat.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div
                className="flex flex-wrap gap-2 pt-4"
                style={{ borderTop: '1px solid rgba(74, 127, 167, 0.15)' }}
              >
                {cat.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="text-xs sm:text-sm font-medium px-3 py-1.5 rounded-lg transition-all hover:scale-105"
                    style={{
                      backgroundColor: 'rgba(10, 25, 49, 0.5)',
                      color: '#4A7FA7',
                      border: '1px solid rgba(74, 127, 167, 0.3)',
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
