import { IconUsers, IconCheckCircle } from '../common/Icons';
import { experienceData } from '../../data/portfolioData';
import Reveal from '../common/Reveal';

export default function Experience() {
  return (
    <section
      id="pengalaman"
      className="py-20 md:py-28 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal animation="fade-down">
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full bg-[#4A7FA7]/15 border border-[#4A7FA7]/30 text-[#60A5FA]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" />
              Kepemimpinan &amp; Organisasi
            </span>
          </Reveal>

          <Reveal animation="fade-up" delay={150}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 mb-4 tracking-tight text-[#F6FAFD]">
              Pengalaman Organisasi
            </h2>
            <p className="text-base sm:text-lg text-[#B3CFE5]">
              Pengalaman dalam memimpin tim, komunikasi profesional, dan menjalin hubungan kemitraan strategis.
            </p>
          </Reveal>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">

          {/* Vertical Glowing Line */}
          <div
            className="hidden sm:block absolute left-8 top-6 bottom-6 w-1 rounded-full bg-gradient-to-b from-[#38BDF8] via-[#4A7FA7]/50 to-transparent shadow-[0_0_12px_rgba(56,189,248,0.4)]"
          />

          <div className="space-y-10">
            {experienceData.map((exp, idx) => (
              <div key={exp.id} className="relative sm:pl-20">

                {/* Timeline Dot Icon */}
                <div
                  className="hidden sm:flex absolute left-0 top-3 w-16 h-16 rounded-2xl items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 bg-[#0d213b] border-2 border-[#60A5FA] text-[#60A5FA] shadow-[0_0_20px_rgba(96,165,250,0.3)] z-10"
                >
                  <IconUsers className="w-7 h-7" />
                </div>

                {/* Experience Card */}
                <Reveal animation="fade-left" delay={idx * 150}>
                  <div
                    className="rounded-3xl p-7 sm:p-8 transition-all duration-400 group hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(74,127,167,0.22)] bg-gradient-to-b from-[#1A3D63]/70 via-[#132d4a]/75 to-[#0b1c31]/85 backdrop-blur-xl border border-[#4A7FA7]/25 hover:border-[#60A5FA]/60"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                      <span className="inline-block px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#0A1931]/70 text-[#93C5FD] border border-[#4A7FA7]/35 shadow-inner">
                        {exp.period}
                      </span>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#4A7FA7]/15 text-[#B3CFE5] border border-[#4A7FA7]/20">
                        {exp.type}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#F6FAFD] group-hover:text-sky-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-base font-semibold mb-4 text-[#60A5FA]">
                      {exp.organization}
                    </p>

                    <p className="text-sm sm:text-base leading-relaxed mb-6 text-[#B3CFE5]/90">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <div className="space-y-3 pt-5 border-t border-[#4A7FA7]/20">
                      {exp.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-3 text-sm text-[#B3CFE5]">
                          <IconCheckCircle className="w-5 h-5 shrink-0 mt-0.5 text-[#38BDF8]" />
                          <span className="leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
