import { experienceData } from '../../data/portfolioData';
import Reveal from '../common/Reveal';

export default function Experience() {
  return (
    <section id="pengalaman" className="border-b border-[#DDD9CD] py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Index Header ── */}
        <Reveal animation="fade-down">
          <div className="grid grid-cols-12 pb-6 mb-12 border-b border-[#DDD9CD] text-[11px] font-mono-swiss text-[#585752]">
            <div className="col-span-12 sm:col-span-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#D84227]" />
              <span>SEC. 04 — REKAM JEJAK ORGANISASI</span>
            </div>
            <div className="col-span-12 sm:col-span-8 sm:text-right mt-1 sm:mt-0 text-[#87857E]">
              KEPEMIMPINAN &amp; TANGGUNG JAWAB SOSIAL
            </div>
          </div>
        </Reveal>

        {/* Section Intro */}
        <Reveal animation="fade-up" delay={100}>
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 lg:col-span-5">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121212] tracking-[-0.03em] leading-tight">
                PENGALAMAN ORGANISASI
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7 flex flex-col justify-end">
              <p className="font-body text-base sm:text-lg text-[#585752] leading-relaxed max-w-2xl">
                Pengalaman dalam mengarahkan divisi, merancang diplomasi kelembagaan, serta menjaga konsistensi narasi publik pada ekosistem kemahasiswaan Politeknik Negeri Malang.
              </p>
            </div>
          </div>
        </Reveal>

        {/* ── Editorial Timeline Rows with Scroll Reveal ── */}
        <div className="border-t border-[#DDD9CD]">
          {experienceData.map((exp, idx) => (
            <Reveal key={exp.id} animation="fade-up" delay={idx * 100}>
              <div
                className="editorial-row border-b border-[#DDD9CD] py-10 grid grid-cols-12 gap-y-6 lg:gap-8 items-start group"
              >
                {/* Period & Reference (Cols 1-3) */}
                <div className="col-span-12 sm:col-span-3 space-y-2">
                  <span className="font-mono-swiss text-xs font-semibold text-[#D84227] block">
                    EXP.0{idx + 1} // {exp.period}
                  </span>
                  <span className="font-mono-swiss text-[11px] text-[#87857E] px-2 py-0.5 border border-[#DDD9CD] inline-block bg-[#EFECE3]">
                    {exp.type.toUpperCase()}
                  </span>
                </div>

                {/* Role & Organization (Cols 4-7) */}
                <div className="col-span-12 sm:col-span-4 space-y-2">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#121212] group-hover:text-[#D84227] transition-colors">
                    {exp.role}
                  </h3>
                  <p className="font-mono-swiss text-xs text-[#585752]">
                    {exp.organization.toUpperCase()}
                  </p>
                </div>

                {/* Description & Concrete Highlights (Cols 8-12) */}
                <div className="col-span-12 sm:col-span-5 space-y-4">
                  <p className="font-body text-sm text-[#585752] leading-relaxed">
                    {exp.description}
                  </p>

                  <div className="border-t border-[#DDD9CD]/80 pt-4 space-y-2">
                    <span className="font-mono-swiss text-[10px] text-[#87857E] block mb-2">
                      KONTRIBUSI UTAMA // DELIVERABLES:
                    </span>
                    {exp.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-3 font-body text-xs text-[#121212]">
                        <span className="font-mono-swiss text-[#D84227] text-[11px] mt-0.5">→</span>
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
