import { softSkillsData } from '../../data/portfolioData';
import Reveal from '../common/Reveal';

export default function SoftSkills() {
  return (
    <section id="soft-skills" className="border-b border-[#DDD9CD] py-16 md:py-24 bg-[#EFECE3]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Index Header ── */}
        <Reveal animation="fade-down">
          <div className="grid grid-cols-12 pb-6 mb-12 border-b border-[#DDD9CD] text-[11px] font-mono-swiss text-[#585752]">
            <div className="col-span-12 sm:col-span-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#D84227]" />
              <span>SEC. 03 — KOMPETENSI INTERPERSONAL</span>
            </div>
            <div className="col-span-12 sm:col-span-8 sm:text-right mt-1 sm:mt-0 text-[#87857E]">
              DISIPLIN KOMUNIKASI &amp; PERILAKU KERJA
            </div>
          </div>
        </Reveal>

        {/* Section Title */}
        <Reveal animation="fade-up" delay={100}>
          <div className="grid grid-cols-12 gap-8 mb-12">
            <div className="col-span-12 lg:col-span-5">
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#121212] tracking-[-0.03em] leading-tight">
                Etos Kerja &amp; Kolaborasi Tim.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7 flex flex-col justify-end">
              <p className="font-body text-base text-[#585752] leading-relaxed max-w-2xl">
                Keterampilan non-teknis yang mendukung sinergi produktif, kepemimpinan adaptif, dan eksekusi proyek berstandar profesional.
              </p>
            </div>
          </div>
        </Reveal>

        {/* ── Swiss Editorial Grid Boxes with Scroll Reveal ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-[#DDD9CD]">
          {softSkillsData.map((item, idx) => (
            <Reveal key={item.id} animation="fade-up" delay={idx * 60}>
              <div
                className="editorial-row border-r border-b border-[#DDD9CD] p-6 sm:p-8 bg-[#F5F3EC] flex flex-col justify-between h-full group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#DDD9CD]/60 font-mono-swiss text-[11px] text-[#87857E]">
                    <span>PRINCIPIUM // 0{idx + 1}</span>
                    <span className="text-[#D84227] group-hover:scale-125 transition-transform">●</span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-[#121212] mb-3 group-hover:text-[#D84227] transition-colors">
                    {item.title}
                  </h3>

                  <p className="font-body text-sm text-[#585752] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#DDD9CD]/40 font-mono-swiss text-[10px] text-[#87857E]">
                  KAPASITAS INTERPERSONAL TERUJI
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
