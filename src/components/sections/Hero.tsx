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
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const displayRole = roles.length > 0 ? roles[currentRoleIndex % roles.length] : '';

  return (
    <section
      id="beranda"
      className="relative pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden"
      style={{ backgroundColor: 'transparent' }}
    >
      {/* Hero-level blob ornaments */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Glowing circle behind avatar */}
        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-30 animate-blob"
          style={{ background: 'radial-gradient(circle, #1A3D63 0%, transparent 70%)', filter: 'blur(50px)', animationDelay: '1s' }}
        />
        {/* Small accent orb top-left */}
        <div
          className="absolute top-10 left-10 w-56 h-56 rounded-full opacity-20 animate-blob"
          style={{ background: 'radial-gradient(circle, #4A7FA7 0%, transparent 70%)', filter: 'blur(40px)', animationDelay: '3s' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* ── Kolom Teks (Kiri) ── */}
          <div className="lg:col-span-7 text-left space-y-6">


            {/* Headline */}
            <div>
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
                style={{ color: '#F6FAFD' }}
              >
                Saya{' '}
                <span
                  className="relative"
                  style={{ color: '#4A7FA7' }}
                >
                  {profileData.name.split(' ')[profileData.name.split(' ').length - 2]}{' '}
                  {profileData.name.split(' ')[profileData.name.split(' ').length - 1]}
                  {/* Underline accent */}
                  <span
                    className="absolute bottom-0 left-0 w-full h-1 rounded-full opacity-50"
                    style={{ backgroundColor: '#4A7FA7' }}
                  />
                </span>
              </h1>

              {/* Dynamic Sub-Headline */}
              <div className="h-9 mt-3 flex items-center gap-2">
                <span className="text-lg sm:text-xl font-semibold" style={{ color: '#B3CFE5' }}>
                  Fokus:
                </span>
                <span
                  className={`text-lg sm:text-xl font-bold transition-all duration-300 ${
                    fadeState ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-1'
                  }`}
                  style={{ color: '#4A7FA7' }}
                >
                  {displayRole}
                </span>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-lg font-semibold leading-snug" style={{ color: '#F6FAFD' }}>
              {profileData.education} di{' '}
              <span style={{ color: '#4A7FA7' }}>{profileData.campus}</span>.
            </p>

            {/* Bio */}
            <p className="text-base sm:text-lg leading-relaxed max-w-2xl" style={{ color: '#B3CFE5' }}>
              {profileData.bio}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#kontak"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-base transition-all hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: '#4A7FA7',
                  color: '#F6FAFD',
                  boxShadow: '0 4px 20px rgba(74,127,167,0.4)',
                }}
              >
                Hubungi Saya
                <IconArrowRight className="w-4 h-4" />
              </a>

              <a
                href={profileData.resumeUrl}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-base transition-all hover:scale-105 active:scale-95"
                style={{
                  backgroundColor: 'transparent',
                  color: '#F6FAFD',
                  border: '2px solid #4A7FA7',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(74,127,167,0.15)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent';
                }}
              >
                <IconDownload className="w-4 h-4" />
                Unduh CV
              </a>
            </div>

            {/* Dynamic Metrics */}
            <div
              className="grid grid-cols-3 gap-4 pt-6 max-w-lg"
              style={{ borderTop: '1px solid rgba(74, 127, 167, 0.2)' }}
            >
              <div>
                <p className="text-2xl font-bold" style={{ color: '#F6FAFD' }}>
                  {profileData.metrics.semester}
                </p>
                <p className="text-xs sm:text-sm font-medium" style={{ color: '#B3CFE5' }}>
                  Teknologi Informasi
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold" style={{ color: '#4A7FA7' }}>
                  {profileData.metrics.projectsCount}
                </p>
                <p className="text-xs sm:text-sm font-medium" style={{ color: '#B3CFE5' }}>
                  Web &amp; Mobile Apps
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold" style={{ color: '#F6FAFD' }}>
                  HMTI
                </p>
                <p className="text-xs sm:text-sm font-medium" style={{ color: '#B3CFE5' }}>
                  {profileData.metrics.organization}
                </p>
              </div>
            </div>
          </div>

          {/* ── Kolom Visual / Avatar (Kanan) ── */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative group">

              {/* Organic blob shape behind avatar */}
              <div
                className="absolute -inset-6 rounded-full opacity-40 animate-float pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 60% 40%, #1A3D63 0%, transparent 70%)',
                  filter: 'blur(20px)',
                  borderRadius: '60% 40% 55% 45% / 45% 55% 40% 60%',
                }}
              />

              {/* Decorative rings */}
              <div
                className="absolute -inset-4 -rotate-3 scale-105 pointer-events-none group-hover:rotate-0 transition-transform duration-500 rounded-3xl"
                style={{ background: 'linear-gradient(135deg, rgba(26,61,99,0.6), rgba(74,127,167,0.15))' }}
              />
              <div
                className="absolute -inset-1 rotate-2 pointer-events-none group-hover:rotate-0 transition-transform duration-500 rounded-3xl"
                style={{ backgroundColor: 'rgba(74,127,167,0.1)' }}
              />

              {/* Decorative plus icons */}
              <div
                className="absolute -top-3 -right-3 w-6 h-6 text-xl font-bold leading-none pointer-events-none"
                style={{ color: '#4A7FA7', opacity: 0.7 }}
              >
                +
              </div>
              <div
                className="absolute -bottom-3 -left-3 w-5 h-5 rounded-full border-2 pointer-events-none"
                style={{ borderColor: '#4A7FA7', opacity: 0.5 }}
              />

              {/* Main Card Image */}
              <div
                className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden flex flex-col items-center justify-end p-6"
                style={{
                  background: 'linear-gradient(to bottom, #1A3D63, #0A1931)',
                  border: '2px solid rgba(74, 127, 167, 0.3)',
                  boxShadow: '0 20px 60px rgba(10, 25, 49, 0.6)',
                }}
              >
                <img
                  src={profileData.avatarUrl}
                  alt={`${profileData.name} - Mahasiswa IT POLINEMA`}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                {/* Floating pill badge on image */}
                <div
                  className="relative z-10 w-full backdrop-blur-md py-3 px-4 rounded-xl flex items-center justify-between"
                  style={{
                    backgroundColor: 'rgba(10, 25, 49, 0.85)',
                    border: '1px solid rgba(74, 127, 167, 0.3)',
                  }}
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#4A7FA7' }}>
                      Status
                    </p>
                    <p className="text-sm font-bold" style={{ color: '#F6FAFD' }}>
                      Mahasiswa Aktif
                    </p>
                  </div>
                  <span
                    className="px-2.5 py-1 text-xs font-semibold rounded-full"
                    style={{ backgroundColor: 'rgba(74, 127, 167, 0.25)', color: '#4A7FA7', border: '1px solid rgba(74,127,167,0.4)' }}
                  >
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
