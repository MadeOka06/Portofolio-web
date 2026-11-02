import { useState } from 'react';
import { IconAward, IconCheckCircle, IconExternalLink, IconX } from '../common/Icons';
import { certificatesData } from '../../data/portfolioData';
import type { CertificateItem } from '../../types';
import Reveal from '../common/Reveal';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <section
      id="sertifikasi"
      className="py-20 md:py-28 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal animation="fade-down">
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full bg-[#4A7FA7]/15 border border-[#4A7FA7]/30 text-[#60A5FA]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" />
              Kredensial Profesional
            </span>
          </Reveal>

          <Reveal animation="fade-up" delay={150}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 mb-4 tracking-tight text-[#F6FAFD]">
              Sertifikat &amp; Bootcamp
            </h2>
            <p className="text-base sm:text-lg text-[#B3CFE5]">
              Bukti kompetensi terstruktur dan validasi keahlian di bidang pengembangan web serta manajemen basis data.
            </p>
          </Reveal>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificatesData.map((cert, idx) => (
            <Reveal
              key={cert.id}
              animation="fade-up"
              delay={idx * 140}
            >
              <div
                className="h-full rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-400 group hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(74,127,167,0.22)] bg-gradient-to-b from-[#1A3D63]/70 via-[#132d4a]/75 to-[#0b1c31]/85 backdrop-blur-xl border border-[#4A7FA7]/25 hover:border-[#60A5FA]/60"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 bg-[#0A1931]/70 border border-[#4A7FA7]/30 text-[#60A5FA] shadow-inner"
                    >
                      <IconAward className="w-7 h-7" />
                    </div>
                    <span className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[#0A1931]/60 text-[#B3CFE5] border border-[#4A7FA7]/25">
                      {cert.year}
                    </span>
                  </div>

                  {(cert.status || cert.idCredential) && (
                    <div className="flex items-center gap-2 mb-3">
                      {cert.status && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full text-[#60A5FA] bg-[#4A7FA7]/15 border border-[#4A7FA7]/30">
                          <IconCheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                          {cert.status}
                        </span>
                      )}
                      {cert.idCredential && (
                        <span className="text-xs font-mono text-[#B3CFE5]/80 px-2.5 py-1 rounded-md bg-[#0A1931]/40 border border-[#4A7FA7]/20">
                          ID: {cert.idCredential}
                        </span>
                      )}
                    </div>
                  )}

                  <h3 className="text-xl sm:text-2xl font-bold mb-1.5 text-[#F6FAFD] group-hover:text-sky-300 transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-semibold mb-3 text-[#60A5FA]">
                    {cert.issuer}
                  </p>
                  <p className="text-sm sm:text-base leading-relaxed mb-6 text-[#B3CFE5]/90">
                    {cert.description}
                  </p>
                </div>

                {cert.image && (
                  <div className="overflow-hidden rounded-2xl mb-5 border border-[#4A7FA7]/30 shadow-lg">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-72 sm:h-80 object-cover group-hover:scale-104 transition-transform duration-500 ease-out"
                    />
                  </div>
                )}

                {/* Tags & Verify */}
                <div className="pt-4 space-y-4 border-t border-[#4A7FA7]/15">
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-[#0A1931]/50 text-[#93C5FD] border border-[#4A7FA7]/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {cert.idCredential && (
                    <button
                      type="button"
                      onClick={() => setSelectedCert(cert)}
                      className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer text-[#60A5FA] hover:text-sky-300 group/btn"
                    >
                      Lihat Kredensial Asli
                      <IconExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
                    </button>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>

      {/* ── Modal Preview Kredensial ── */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-md bg-black/60 animate-fadeIn"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="max-w-lg w-full p-7 sm:p-9 relative text-center rounded-3xl bg-[#0d2238]/95 border border-[#4A7FA7]/40 shadow-[0_25px_80px_rgba(0,0,0,0.8)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCert(null)}
              className="absolute top-5 right-5 p-2 rounded-xl transition-all hover:scale-110 cursor-pointer text-[#B3CFE5] hover:text-white bg-[#0A1931]/60 border border-[#4A7FA7]/30"
            >
              <IconX className="w-5 h-5" />
            </button>

            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 bg-[#0A1931]/80 border-2 border-[#60A5FA] text-[#60A5FA] shadow-[0_0_20px_rgba(96,165,250,0.3)]"
            >
              <IconAward className="w-8 h-8" />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold mb-2 text-[#F6FAFD]">
              {selectedCert.title}
            </h3>
            <p className="text-sm font-semibold mb-4 text-[#60A5FA]">
              {selectedCert.issuer} ({selectedCert.year})
            </p>

            <div className="p-4 rounded-2xl mb-6 text-left space-y-2 bg-[#0A1931]/70 border border-[#4A7FA7]/25">
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-[#B3CFE5]">ID Kredensial:</span>
                <span className="font-mono text-[#F6FAFD]">{selectedCert.idCredential}</span>
              </div>
              <div className="flex justify-between text-xs sm:text-sm">
                <span className="text-[#B3CFE5]">Status Verifikasi:</span>
                <span className="font-semibold text-emerald-400 flex items-center gap-1">
                  <IconCheckCircle className="w-3.5 h-3.5" />
                  Terverifikasi
                </span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="px-6 py-2.5 text-sm font-semibold rounded-xl transition-colors cursor-pointer text-[#B3CFE5] hover:text-white bg-[#0A1931]/60"
              >
                Tutup
              </button>
              {selectedCert.verifyUrl && (
                <a
                  href={selectedCert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-semibold rounded-xl transition-all duration-300 hover:scale-105 bg-gradient-to-r from-[#4A7FA7] to-[#2563EB] text-white shadow-lg"
                >
                  Buka Web Penerbit
                  <IconExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
