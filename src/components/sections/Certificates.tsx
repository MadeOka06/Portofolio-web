import { useState } from 'react';
import { IconAward, IconCheckCircle, IconExternalLink, IconX } from '../common/Icons';
import { certificatesData } from '../../data/portfolioData';
import type { CertificateItem } from '../../types';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  return (
    <section
      id="sertifikasi"
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
            Kredensial Profesional
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold mt-3 mb-4 tracking-tight"
            style={{ color: '#F6FAFD' }}
          >
            Sertifikat &amp; Bootcamp
          </h2>
          <p className="text-base sm:text-lg" style={{ color: '#B3CFE5' }}>
            Bukti kompetensi terstruktur dan validasi keahlian di bidang pengembangan web serta manajemen basis data.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {certificatesData.map((cert) => (
            <div
              key={cert.id}
              className="rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 group hover:-translate-y-2"
              style={{
                backgroundColor: 'rgba(26, 61, 99, 0.7)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(74, 127, 167, 0.2)',
                boxShadow: '0 4px 24px rgba(10,25,49,0.3)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.border = '1px solid rgba(74, 127, 167, 0.5)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 16px 48px rgba(74,127,167,0.2)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.border = '1px solid rgba(74, 127, 167, 0.2)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 24px rgba(10,25,49,0.3)';
              }}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform"
                    style={{
                      backgroundColor: 'rgba(10, 25, 49, 0.6)',
                      border: '1px solid rgba(74, 127, 167, 0.3)',
                      color: '#4A7FA7',
                    }}
                  >
                    <IconAward className="w-6 h-6" />
                  </div>
                  <span
                    className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{
                      backgroundColor: 'rgba(10, 25, 49, 0.5)',
                      color: '#B3CFE5',
                      border: '1px solid rgba(74,127,167,0.2)',
                    }}
                  >
                    {cert.year}
                  </span>
                </div>

                {(cert.status || cert.idCredential) && (
                  <div className="flex items-center gap-2 mb-2">
                    {cert.status && (
                      <span
                        className="inline-flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full"
                        style={{
                          color: '#4A7FA7',
                          backgroundColor: 'rgba(74,127,167,0.12)',
                          border: '1px solid rgba(74,127,167,0.3)',
                        }}
                      >
                        <IconCheckCircle className="w-3 h-3" />
                        {cert.status}
                      </span>
                    )}
                    {cert.idCredential && (
                      <span className="text-xs font-mono" style={{ color: '#B3CFE5' }}>
                        ID: {cert.idCredential}
                      </span>
                    )}
                  </div>
                )}

                <h3 className="text-xl font-bold mb-1 transition-colors" style={{ color: '#F6FAFD' }}>
                  {cert.title}
                </h3>
                <p className="text-sm font-medium mb-4" style={{ color: '#4A7FA7' }}>
                  {cert.issuer}
                </p>
                <p className="text-sm leading-relaxed mb-6" style={{ color: '#B3CFE5' }}>
                  {cert.description}
                </p>
              </div>

              {cert.image && (
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-80 object-cover rounded-xl mb-4"
                  style={{ border: '1px solid rgba(74,127,167,0.2)' }}
                />
              )}

              {/* Tags & Verify */}
              <div
                className="pt-4 space-y-4"
                style={{ borderTop: '1px solid rgba(74,127,167,0.15)' }}
              >
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-medium px-2 py-0.5 rounded-md"
                      style={{
                        backgroundColor: 'rgba(74, 127, 167, 0.12)',
                        color: '#4A7FA7',
                        border: '1px solid rgba(74, 127, 167, 0.3)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {cert.idCredential && (
                  <button
                    type="button"
                    onClick={() => setSelectedCert(cert)}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
                    style={{ color: '#4A7FA7' }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = '#6098bf'; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = '#4A7FA7'; }}
                  >
                    Lihat Kredensial Asli
                    <IconExternalLink className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ── Modal Preview Kredensial ── */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn"
          style={{ backgroundColor: 'rgba(10, 25, 49, 0.8)' }}
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="max-w-lg w-full p-6 sm:p-8 relative text-center rounded-2xl"
            style={{
              backgroundColor: '#1A3D63',
              border: '1px solid rgba(74, 127, 167, 0.3)',
              boxShadow: '0 24px 80px rgba(10,25,49,0.7)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 p-2 rounded-lg transition-colors cursor-pointer"
              style={{ color: '#B3CFE5', backgroundColor: 'rgba(10,25,49,0.4)' }}
            >
              <IconX className="w-5 h-5" />
            </button>

            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{
                backgroundColor: 'rgba(10,25,49,0.6)',
                border: '2px solid #4A7FA7',
                color: '#4A7FA7',
                boxShadow: '0 0 20px rgba(74,127,167,0.3)',
              }}
            >
              <IconAward className="w-8 h-8" />
            </div>

            {selectedCert.status && (
              <div
                className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold mb-3"
                style={{
                  backgroundColor: 'rgba(74,127,167,0.12)',
                  color: '#4A7FA7',
                  border: '1px solid rgba(74,127,167,0.3)',
                }}
              >
                <IconCheckCircle className="w-3.5 h-3.5" />
                {selectedCert.status}
              </div>
            )}

            <h3 className="text-xl font-bold mb-1" style={{ color: '#F6FAFD' }}>
              {selectedCert.title}
            </h3>
            <p className="text-sm font-medium mb-3" style={{ color: '#4A7FA7' }}>
              Diterbitkan oleh: {selectedCert.issuer}
            </p>

            {selectedCert.idCredential && (
              <p
                className="text-xs font-mono py-1 px-3 rounded-lg inline-block mb-4"
                style={{
                  color: '#B3CFE5',
                  backgroundColor: 'rgba(10,25,49,0.5)',
                  border: '1px solid rgba(74,127,167,0.2)',
                }}
              >
                Nomor Kredensial: {selectedCert.idCredential}
              </p>
            )}

            {selectedCert.image && (
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full max-h-64 object-contain rounded-xl mb-4"
                style={{
                  border: '1px solid rgba(74,127,167,0.2)',
                  backgroundColor: 'rgba(10,25,49,0.3)',
                }}
              />
            )}

            <p className="text-sm leading-relaxed mb-6" style={{ color: '#B3CFE5' }}>
              {selectedCert.description}
            </p>

            <button
              type="button"
              onClick={() => setSelectedCert(null)}
              className="w-full py-2.5 rounded-xl font-semibold text-sm transition-all shadow-sm cursor-pointer hover:scale-105"
              style={{
                backgroundColor: '#4A7FA7',
                color: '#F6FAFD',
                boxShadow: '0 4px 16px rgba(74,127,167,0.35)',
              }}
            >
              Selesai Memeriksa
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
