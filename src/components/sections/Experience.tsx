import { IconUsers, IconCheckCircle } from '../common/Icons';
import { experienceData } from '../../data/portfolioData';

export default function Experience() {
  return (
    <section
      id="pengalaman"
      className="py-20 md:py-28"
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
            Kepemimpinan &amp; Organisasi
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold mt-3 mb-4 tracking-tight"
            style={{ color: '#F6FAFD' }}
          >
            Pengalaman Organisasi
          </h2>
          <p className="text-base sm:text-lg" style={{ color: '#B3CFE5' }}>
            Pengalaman dalam memimpin tim, komunikasi profesional, dan menjalin hubungan kemitraan strategis.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">

          {/* Vertical Line */}
          <div
            className="hidden sm:block absolute left-8 top-3 bottom-3 w-0.5"
            style={{ backgroundColor: 'rgba(74, 127, 167, 0.3)' }}
          />

          <div className="space-y-8">
            {experienceData.map((exp) => (
              <div key={exp.id} className="relative sm:pl-20">

                {/* Timeline Dot Icon */}
                <div
                  className="hidden sm:flex absolute left-0 top-1 w-16 h-16 rounded-2xl items-center justify-center shadow-md"
                  style={{
                    backgroundColor: 'rgba(26, 61, 99, 0.9)',
                    border: '2px solid #4A7FA7',
                    color: '#4A7FA7',
                    boxShadow: '0 0 16px rgba(74,127,167,0.25)',
                  }}
                >
                  <IconUsers className="w-7 h-7" />
                </div>

                {/* Experience Card */}
                <div
                  className="rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1"
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
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <span
                      className="inline-block px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        backgroundColor: 'rgba(10, 25, 49, 0.6)',
                        color: '#4A7FA7',
                        border: '1px solid rgba(74, 127, 167, 0.3)',
                      }}
                    >
                      {exp.period}
                    </span>
                    <span className="text-xs font-medium" style={{ color: '#B3CFE5' }}>
                      {exp.type}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold" style={{ color: '#F6FAFD' }}>
                    {exp.role}
                  </h3>
                  <p className="text-base font-semibold mb-4" style={{ color: '#4A7FA7' }}>
                    {exp.organization}
                  </p>

                  <p className="text-sm sm:text-base leading-relaxed mb-5" style={{ color: '#B3CFE5' }}>
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div
                    className="space-y-2.5 pt-4"
                    style={{ borderTop: '1px solid rgba(74, 127, 167, 0.15)' }}
                  >
                    {exp.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-sm" style={{ color: '#B3CFE5' }}>
                        <IconCheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#4A7FA7' }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
