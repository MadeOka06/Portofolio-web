import { useState } from 'react';
import { IconExternalLink, IconX } from '../common/Icons';
import { certificatesData } from '../../data/portfolioData';
import type { CertificateItem } from '../../types';
import Reveal from '../common/Reveal';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <section id="sertifikasi" className="border-b border-[#DDD9CD] py-16 md:py-24 bg-[#EFECE3]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Index Header ── */}
        <Reveal animation="fade-down">
          <div className="grid grid-cols-12 pb-6 mb-12 border-b border-[#DDD9CD] text-[11px] font-mono-swiss text-[#585752]">
            <div className="col-span-12 sm:col-span-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#D84227]" />
              <span>SEC. 06 — KREDENSIAL &amp; VALIDASI PROFESIONAL</span>
            </div>
            <div className="col-span-12 sm:col-span-8 sm:text-right mt-1 sm:mt-0 text-[#87857E]">
              SERTIFIKASI TERVERIFIKASI // ARCHIVE
            </div>
          </div>
        </Reveal>

        {/* Section Title */}
        <Reveal animation="fade-up" delay={100}>
          <div className="grid grid-cols-12 gap-8 mb-16">
            <div className="col-span-12 lg:col-span-6">
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121212] tracking-[-0.03em] leading-tight">
                Sertifikasi &amp; Kurikulum Terakreditasi.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-6 flex flex-col justify-end">
              <p className="font-body text-base text-[#585752] leading-relaxed max-w-2xl">
                Bukti kompetensi terstruktur dan validasi keahlian di bidang pengembangan web, rekayasa data analitis, dan produktivitas digital.
              </p>
            </div>
          </div>
        </Reveal>

        {/* ── Certificates Grid with Scroll Reveal (Full Uncropped Images) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certificatesData.map((cert, idx) => (
            <Reveal key={cert.id} animation="fade-up" delay={idx * 100}>
              <div
                className="editorial-row border border-[#DDD9CD] bg-[#F5F3EC] p-6 sm:p-8 flex flex-col justify-between h-full group"
              >
                <div>
                  {/* Meta Top Bar */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#DDD9CD] font-mono-swiss text-[11px]">
                    <span className="text-[#D84227] font-semibold">
                      CERT.0{idx + 1} // {cert.year}
                    </span>
                    <span className="text-[#87857E]">
                      ISSUER: {cert.issuer.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-[#121212] mb-3 group-hover:text-[#D84227] transition-colors">
                    {cert.title}
                  </h3>

                  <p className="font-body text-sm text-[#585752] leading-relaxed mb-6">
                    {cert.description}
                  </p>

                  {/* Certificate Image Frame (Full & Completely Uncropped) */}
                  {cert.image && (
                    <div
                      className="border border-[#DDD9CD] p-2 bg-[#EFECE3] mb-6 cursor-pointer group/frame transition-colors hover:border-[#121212]"
                      onClick={() => setSelectedCert(cert)}
                      title="Klik untuk memperbesar sertifikat"
                    >
                      <div className="border border-[#DDD9CD]/80 overflow-hidden bg-white">
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className="w-full h-auto object-contain block transition-transform duration-300 group-hover/frame:scale-[1.01]"
                          loading="lazy"
                        />
                      </div>
                      <div className="pt-2 text-right">
                        <span className="font-mono-swiss text-[10px] text-[#87857E] group-hover/frame:text-[#121212]">
                          [ KLIK UNTUK RESOLUSI PENUH ↗ ]
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Skills and Link */}
                <div className="pt-6 border-t border-[#DDD9CD] space-y-4">
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="font-mono-swiss text-[10px] px-2 py-0.5 bg-[#EFECE3] border border-[#DDD9CD] text-[#121212]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setSelectedCert(cert)}
                      className="font-mono-swiss text-xs tracking-[0.08em] font-semibold text-[#121212] border-b border-[#121212] pb-0.5 hover:text-[#D84227] hover:border-[#D84227] transition-colors cursor-pointer"
                    >
                      DETAIL KREDENSIAL →
                    </button>

                    {cert.verifyUrl && (
                      <a
                        href={cert.verifyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono-swiss text-[11px] text-[#585752] hover:text-[#121212] flex items-center gap-1 transition-colors"
                      >
                        <span>VERIFIKASI RESMI</span>
                        <IconExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>

      {/* ── Modal Preview Kredensial (Full High-Res Display) ── */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#121212]/75 overflow-y-auto"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="max-w-3xl w-full p-6 sm:p-10 bg-[#F5F3EC] border-2 border-[#121212] relative max-h-[95vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCert(null)}
              className="absolute top-6 right-6 p-2 border border-[#DDD9CD] hover:border-[#121212] text-[#121212] transition-colors cursor-pointer bg-[#EFECE3]"
              aria-label="Tutup"
            >
              <IconX className="w-5 h-5" />
            </button>

            <span className="font-mono-swiss text-xs font-semibold text-[#D84227] block mb-2">
              VERIFIKASI SERTIFIKASI // {selectedCert.year}
            </span>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#121212] mb-2">
              {selectedCert.title}
            </h3>

            <p className="font-mono-swiss text-xs text-[#585752] mb-6">
              PENERBIT: {selectedCert.issuer.toUpperCase()} ({selectedCert.year})
            </p>

            {/* High-Res Full Certificate Image Display in Modal */}
            {selectedCert.image && (
              <div className="border border-[#DDD9CD] p-2 bg-[#EFECE3] mb-6">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto object-contain block border border-[#DDD9CD]/80 bg-white"
                />
              </div>
            )}

            <div className="border border-[#DDD9CD] p-4 bg-[#EFECE3] mb-6 font-mono-swiss text-xs space-y-2 text-[#585752]">
              <div className="flex justify-between">
                <span>STATUS VERIFIKASI:</span>
                <span className="text-[#2E6930] font-semibold">VALID // TERVERIFIKASI</span>
              </div>
              {selectedCert.idCredential && (
                <div className="flex justify-between">
                  <span>ID KREDENSIAL:</span>
                  <span className="text-[#121212]">{selectedCert.idCredential}</span>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between border-t border-[#121212] pt-6">
              <button
                type="button"
                onClick={() => setSelectedCert(null)}
                className="font-mono-swiss text-xs tracking-[0.08em] text-[#585752] hover:text-[#121212] cursor-pointer"
              >
                [ TUTUP ]
              </button>

              {selectedCert.verifyUrl && (
                <a
                  href={selectedCert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono-swiss text-xs tracking-[0.08em] px-5 py-2.5 bg-[#121212] text-[#F5F3EC] hover:bg-[#D84227] transition-colors flex items-center gap-2"
                >
                  <span>BUKA LINK PENERBIT →</span>
                  <IconExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
