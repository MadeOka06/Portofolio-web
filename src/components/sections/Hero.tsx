import { useState, useEffect } from 'react';
import { IconArrowRight, IconDownload } from '../common/Icons';
import { profileData } from '../../data/portfolioData';

export default function Hero() {
  const roles = profileData.roles || [];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    if (roles.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [roles.length]);

  const displayRole = roles.length > 0 ? roles[currentRoleIndex % roles.length] : '';

  return (
    <section
      id="beranda"
      className="relative border-b border-[#DDD9CD] pt-24 md:pt-32 pb-16 md:pb-24"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Index Header ── */}
        <div className="grid grid-cols-12 pb-6 mb-8 border-b border-[#DDD9CD] text-[11px] font-mono-swiss text-[#585752]">
          <div className="col-span-12 sm:col-span-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#D84227]" />
            <span>SEC. 01 — PROFIL &amp; MANIFESTO</span>
          </div>
          <div className="col-span-12 sm:col-span-8 sm:text-right mt-1 sm:mt-0 text-[#87857E]">
            POLINEMA // TEKNOLOGI INFORMASI // 2026
          </div>
        </div>

        {/* ── Monumental Editorial Display Headline ── */}
        <div className="grid grid-cols-12 gap-y-8 lg:gap-8 items-start">
          
          {/* Main Statement (Columns 1-8) */}
          <div className="col-span-12 lg:col-span-8 space-y-8 pr-0 lg:pr-8">
            <div className="space-y-4">
              <span className="font-mono-swiss text-xs text-[#D84227] tracking-[0.1em] block">
                TERBUKA UNTUK MAGANG // SEMESTER 6
              </span>
              <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.035em] leading-[0.98] text-[#121212]">
                {profileData.name}
              </h1>
            </div>

            {/* Dynamic Discipline & Education */}
            <div className="border-t border-b border-[#DDD9CD] py-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <p className="font-mono-swiss text-[11px] text-[#87857E] mb-1">
                  BIDANG KEAHLIAN / FOKUS
                </p>
                <p className="font-display text-xl sm:text-2xl font-bold text-[#121212]">
                  {displayRole}
                </p>
              </div>
              <div>
                <p className="font-mono-swiss text-[11px] text-[#87857E] mb-1">
                  PENDIDIKAN &amp; KAMPUS
                </p>
                <p className="font-body text-sm font-medium text-[#121212] leading-snug">
                  {profileData.education} — <span className="font-semibold">{profileData.campus}</span>
                </p>
              </div>
            </div>

            {/* Editorial Bio Paragraph */}
            <div className="space-y-4">
              <p className="font-mono-swiss text-[11px] text-[#87857E]">
                MANIFESTO PROFIL
              </p>
              <p className="font-body text-base sm:text-lg text-[#585752] leading-[1.65] max-w-3xl">
                {profileData.bio}
              </p>
            </div>

            {/* Editorial Actions (Flat, Strict Monospace) */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <a
                href="#kontak"
                className="font-mono-swiss text-xs tracking-[0.08em] px-6 py-3.5 bg-[#121212] text-[#F5F3EC] hover:bg-[#D84227] transition-colors flex items-center gap-2"
              >
                <span>HUBUNGI SAYA</span>
                <IconArrowRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={profileData.resumeUrl}
                className="font-mono-swiss text-xs tracking-[0.08em] px-6 py-3.5 border border-[#121212] text-[#121212] hover:bg-[#EFECE3] transition-colors flex items-center gap-2"
              >
                <IconDownload className="w-3.5 h-3.5" />
                <span>UNDUH RESUME / CV</span>
              </a>
            </div>

            {/* Swiss Grid Metrics Bar */}
            <div className="grid grid-cols-3 border-t border-[#DDD9CD] pt-6 mt-8">
              <div className="border-r border-[#DDD9CD] pr-4">
                <p className="font-display text-3xl font-extrabold text-[#121212] leading-none mb-1">
                  {profileData.metrics.semester.replace('Semester ', 'S.')}
                </p>
                <p className="font-mono-swiss text-[10px] text-[#87857E]">
                  TEKNOLOGI INFORMASI
                </p>
              </div>
              <div className="border-r border-[#DDD9CD] px-4">
                <p className="font-display text-3xl font-extrabold text-[#D84227] leading-none mb-1">
                  {profileData.metrics.projectsCount}
                </p>
                <p className="font-mono-swiss text-[10px] text-[#87857E]">
                  WEB &amp; MOBILE APPS
                </p>
              </div>
              <div className="pl-4">
                <p className="font-display text-3xl font-extrabold text-[#121212] leading-none mb-1">
                  HMTI
                </p>
                <p className="font-mono-swiss text-[10px] text-[#87857E]">
                  {profileData.metrics.organization.toUpperCase()}
                </p>
              </div>
            </div>

          </div>

          {/* Visual Column / Architectural Crop (Columns 9-12) */}
          <div className="col-span-12 lg:col-span-4 border-l-0 lg:border-l border-[#DDD9CD] lg:pl-8">
            <div className="bg-[#EFECE3] border border-[#DDD9CD] p-3">
              {/* Picture Frame with Hairline Border */}
              <div className="border border-[#DDD9CD] overflow-hidden bg-[#DDD9CD]">
                <img
                  src={profileData.avatarUrl}
                  alt={`${profileData.name} - POLINEMA`}
                  className="w-full h-[400px] sm:h-[460px] object-cover filter grayscale contrast-105 hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Colophon Card Label */}
              <div className="pt-3 pb-1 border-t border-[#DDD9CD] mt-3 flex items-center justify-between font-mono-swiss text-[11px] text-[#585752]">
                <div>
                  <span className="text-[#121212] font-semibold">{profileData.shortname.toUpperCase()}</span>
                  <span className="block text-[9px] text-[#87857E]">POLITEKNIK NEGERI MALANG</span>
                </div>
                <div className="text-right">
                  <span className="text-[#D84227] font-semibold">2026 // ED.</span>
                  <span className="block text-[9px] text-[#87857E]">PORTFOLIO</span>
                </div>
              </div>
            </div>

            {/* Asymmetrical Folio Marker */}
            <div className="mt-6 border-t border-[#DDD9CD] pt-4 hidden lg:block">
              <p className="font-display text-5xl font-extrabold text-[#DDD9CD] tracking-[-0.03em] leading-none select-none">
                FOLIO.26
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
