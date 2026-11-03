import { skillsData } from '../../data/portfolioData';

export default function Skills() {
  return (
    <section id="keahlian" className="border-b border-[#DDD9CD] py-16 md:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Index Header ── */}
        <div className="grid grid-cols-12 pb-6 mb-12 border-b border-[#DDD9CD] text-[11px] font-mono-swiss text-[#585752]">
          <div className="col-span-12 sm:col-span-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#D84227]" />
            <span>SEC. 02 — KEAHLIAN &amp; TECH STACK</span>
          </div>
          <div className="col-span-12 sm:col-span-8 sm:text-right mt-1 sm:mt-0 text-[#87857E]">
            DIREKTORI METODOLOGI &amp; STACK TEKNIS
          </div>
        </div>

        {/* Section Intro Statement */}
        <div className="grid grid-cols-12 gap-8 mb-16">
          <div className="col-span-12 lg:col-span-5">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121212] tracking-[-0.03em] leading-tight">
              Struktur Kompetensi &amp; Rekayasa Teknis.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7 flex flex-col justify-end">
            <p className="font-body text-base sm:text-lg text-[#585752] leading-relaxed max-w-2xl">
              Kombinasi teknologi yang telah saya kuasai dan terapkan dalam berbagai proyek perkuliahan, organisasi, dan eksplorasi mandiri. Setiap alat dipilih atas dasar keandalan sistem dan kemudahan pemeliharaan.
            </p>
          </div>
        </div>

        {/* ── Method & Practice Directory (Structured Rows) ── */}
        <div className="border-t border-[#DDD9CD]">
          {skillsData.map((cat, idx) => (
            <div
              key={cat.id}
              className="editorial-row border-b border-[#DDD9CD] py-8 sm:py-10 grid grid-cols-12 gap-y-4 lg:gap-8 items-start"
            >
              {/* Cell 1: Monospace Index Code (cols 1-2) */}
              <div className="col-span-12 sm:col-span-2 lg:col-span-2">
                <span className="font-mono-swiss text-xs font-semibold text-[#D84227]">
                  S.0{idx + 1} // {cat.id.toUpperCase()}
                </span>
                <span className="block font-mono-swiss text-[10px] text-[#87857E] mt-1">
                  INDEX // REF
                </span>
              </div>

              {/* Cell 2: Discipline Title in Bold Editorial Serif (cols 3-6) */}
              <div className="col-span-12 sm:col-span-4 lg:col-span-4">
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#121212] tracking-[-0.02em]">
                  {cat.title}
                </h3>
              </div>

              {/* Cell 3: Method & Stack Tags (cols 7-12) */}
              <div className="col-span-12 sm:col-span-6 lg:col-span-6 space-y-4">
                <p className="font-body text-sm sm:text-base text-[#585752] leading-relaxed">
                  <span className="font-mono-swiss text-xs text-[#121212] font-semibold mr-2">
                    METODE —
                  </span>
                  {cat.description}
                </p>

                {/* Strict Sharp Monospace Stack Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="font-mono-swiss text-[11px] px-2.5 py-1 bg-[#EFECE3] border border-[#DDD9CD] text-[#121212]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
