import { useState, useEffect } from 'react';
import { IconArrowRight, IconDownload } from '../common/Icons';
import { profileData } from '../../data/portfolioData';

export default function Hero() {
  const roles = profileData.roles || [];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [fadeState, setFadeState] = useState(true);

  useEffect(() => {
    if (roles.length <= 1) return;

    const interval = setInterval(() => {
      setFadeState(false);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setFadeState(true);
      }, 300);
    }, 3200);

    return () => clearInterval(interval);
  }, [roles.length]);

  const displayRole = roles.length > 0 ? roles[currentRoleIndex % roles.length] : '';

  return (
    <section
      id="beranda"
      className="relative pt-8 pb-20 md:pt-16 md:pb-28 overflow-hidden"
    >
      {/* Hero-level ambient blob ornaments */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/3 right-10 w-[550px] h-[550px] rounded-full opacity-25 animate-blob"
          style={{ background: 'radial-gradient(circle, #4A7FA7 0%, transparent 70%)', filter: 'blur(70px)' }}
        />
        <div
          className="absolute -top-10 left-10 w-72 h-72 rounded-full opacity-20 animate-blob"
          style={{ background: 'radial-gradient(circle, #1A3D63 0%, transparent 70%)', filter: 'blur(50px)', animationDelay: '2s' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ── Kolom Teks (Kiri) ── */}
          <div className="lg:col-span-7 text-left space-y-6 animate-fadeIn">
            
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide bg-[#1A3D63]/70 border border-[#4A7FA7]/35 text-[#F6FAFD] shadow-[0_4px_16px_rgba(74,127,167,0.15)] backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_#34d399]" />
              <span>Terbuka untuk Peluang &amp; Magang</span>
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-[#F6FAFD]">
                Halo, Saya{' '}
                <span className="relative inline-block text-[#60A5FA]">
                  {profileData.name.split(' ')[profileData.name.split(' ').length - 2]}{' '}
                  {profileData.name.split(' ')[profileData.name.split(' ').length - 1]}
                  <span
                    className="absolute -bottom-1 left-0 w-full h-1.5 rounded-full bg-gradient-to-r from-[#4A7FA7] to-[#38BDF8] opacity-70"
                  />
                </span>
              </h1>

              {/* Dynamic Sub-Headline */}
              <div className="h-10 mt-3 flex items-center gap-2">
                <span className="text-lg sm:text-xl font-medium text-[#B3CFE5]">
                  Fokus Bidang:
                </span>
                <span
                  className={`text-lg sm:text-xl font-bold transition-all duration-300 text-sky-400 ${
                    fadeState ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                  }`}
                >
                  {displayRole}
                </span>
              </div>
            </div>

            {/* Subtitle & Education */}
            <p className="text-base sm:text-lg font-medium leading-snug text-[#E2E8F0]">
              {profileData.education} di{' '}
              <span className="text-[#60A5FA] font-semibold">{profileData.campus}</span>.
            </p>

            {/* Bio */}
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl text-[#B3CFE5]/90">
              {profileData.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#kontak"
                className="btn-shimmer inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl font-semibold text-base transition-all duration-300 hover:scale-105 active:scale-95 bg-gradient-to-r from-[#4A7FA7] to-[#2563EB] text-white shadow-[0_8px_25px_rgba(37,99,235,0.35)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.5)]"
              >
                Hubungi Saya
                <IconArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href={profileData.resumeUrl}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl font-semibold text-base transition-all duration-300 hover:scale-105 active:scale-95 bg-[#1A3D63]/50 text-[#F6FAFD] border border-[#4A7FA7]/40 hover:bg-[#4A7FA7]/20 backdrop-blur-md"
              >
                <IconDownload className="w-4 h-4 text-[#60A5FA]" />
                Unduh CV
              </a>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-6 pt-6 max-w-lg border-t border-[#4A7FA7]/20">
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-extrabold text-[#F6FAFD]">
                  {profileData.metrics.semester}
                </p>
                <p className="text-xs sm:text-sm font-medium text-[#B3CFE5]">
                  Teknologi Informasi
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-extrabold text-[#38BDF8]">
                  {profileData.metrics.projectsCount}
                </p>
                <p className="text-xs sm:text-sm font-medium text-[#B3CFE5]">
                  Web &amp; Mobile Apps
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-2xl sm:text-3xl font-extrabold text-[#F6FAFD]">
                  HMTI
                </p>
                <p className="text-xs sm:text-sm font-medium text-[#B3CFE5]">
                  {profileData.metrics.organization}
                </p>
              </div>
            </div>
          </div>

          {/* ── Kolom Visual / Avatar (Kanan) ── */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fadeIn">
            <div className="relative group">
              
              {/* Organic blob glow behind avatar */}
              <div
                className="absolute -inset-8 rounded-full opacity-40 animate-blob pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, #38BDF8 0%, #1A3D63 60%, transparent 80%)',
                  filter: 'blur(35px)',
                }}
              />

              {/* Floating Decorative Badge 1: Top-Right */}
              <div className="absolute -top-4 -right-4 sm:-right-6 z-20 animate-float pointer-events-none">
                <div className="px-4 py-2 rounded-2xl bg-[#0A1931]/90 border border-[#38BDF8]/40 shadow-[0_8px_20px_rgba(0,0,0,0.4)] backdrop-blur-md flex items-center gap-2">
                  <span className="text-base">🚀</span>
                  <span className="text-xs sm:text-sm font-bold text-[#F6FAFD]">Full Stack &amp; Mobile</span>
                </div>
              </div>

              {/* Floating Decorative Badge 2: Bottom-Left */}
              <div className="absolute -bottom-5 -left-4 sm:-left-6 z-20 animate-float-slow pointer-events-none">
                <div className="px-4 py-2 rounded-2xl bg-[#0A1931]/90 border border-[#4A7FA7]/40 shadow-[0_8px_20px_rgba(0,0,0,0.4)] backdrop-blur-md flex items-center gap-2">
                  <span className="text-base">📊</span>
                  <span className="text-xs sm:text-sm font-bold text-[#60A5FA]">Data &amp; BI Enthusiast</span>
                </div>
              </div>

              {/* Softer Image Container */}
              <div
                className="relative w-72 h-84 sm:w-80 sm:h-96 rounded-[2.5rem] overflow-hidden flex flex-col items-center justify-end p-5 transition-transform duration-500 group-hover:scale-[1.02]"
                style={{
                  background: 'linear-gradient(160deg, #1A3D63 0%, #0d213f 50%, #0A1931 100%)',
                  border: '2px solid rgba(74, 127, 167, 0.4)',
                  boxShadow: '0 25px 60px -15px rgba(10, 25, 49, 0.8), 0 0 30px rgba(74, 127, 167, 0.2)',
                }}
              >
                <img
                  src={profileData.avatarUrl}
                  alt={`${profileData.name} - Mahasiswa IT POLINEMA`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-106 transition-transform duration-700 ease-out"
                />

                {/* Subtle gradient vignette overlay at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/90 via-[#0A1931]/20 to-transparent pointer-events-none" />

                {/* Floating pill info at the bottom */}
                <div
                  className="relative z-10 w-full backdrop-blur-xl py-3 px-4 rounded-2xl flex items-center justify-between shadow-lg"
                  style={{
                    backgroundColor: 'rgba(10, 25, 49, 0.82)',
                    border: '1px solid rgba(74, 127, 167, 0.35)',
                  }}
                >
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-[#60A5FA]">
                      Status Akademik
                    </p>
                    <p className="text-sm font-bold text-[#F6FAFD]">
                      Mahasiswa Aktif
                    </p>
                  </div>
                  <span className="px-3 py-1 text-xs font-bold rounded-full bg-[#4A7FA7]/30 text-[#60A5FA] border border-[#4A7FA7]/50 shadow-inner">
                    POLINEMA
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
