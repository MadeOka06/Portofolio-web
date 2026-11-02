import React, { useState } from 'react';
import {
  IconLinkedin,
  IconGithub,
  IconMail,
  IconPhone,
  IconCheckCircle,
  IconArrowRight,
} from '../common/Icons';
import { contactData, profileData } from '../../data/portfolioData';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    const messageText = `Halo Dinar,%0A%0ASaya *${encodeURIComponent(
      formData.name
    )}* (${encodeURIComponent(formData.email)}).%0A%0A*Pesan / Penawaran Magang:*%0A${encodeURIComponent(
      formData.message
    )}`;
    const waUrl = `https://wa.me/${contactData.whatsappNumber}?text=${messageText}`;
    window.open(waUrl, '_blank');

    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 6000);
  };

  const contactLinks = [
    {
      name: 'LinkedIn',
      value: 'linkedin.com/madeoka',
      href: contactData.linkedinUrl,
      icon: <IconLinkedin className="w-5 h-5" style={{ color: '#4A7FA7' }} />,
    },
    {
      name: 'GitHub',
      value: 'github.com/MadeOka06',
      href: contactData.githubUrl,
      icon: <IconGithub className="w-5 h-5" style={{ color: '#F6FAFD' }} />,
    },
    {
      name: 'Email Pribadi',
      value: contactData.email,
      href: `mailto:${contactData.email}`,
      icon: <IconMail className="w-5 h-5" style={{ color: '#4A7FA7' }} />,
    },
    {
      name: 'WhatsApp / Telepon',
      value: contactData.whatsappFormatted,
      href: `https://wa.me/${contactData.whatsappNumber}`,
      icon: <IconPhone className="w-5 h-5" style={{ color: '#4A7FA7' }} />,
    },
  ];

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.625rem 1rem',
    borderRadius: '0.5rem',
    backgroundColor: 'rgba(10, 25, 49, 0.5)',
    border: '1px solid rgba(74, 127, 167, 0.3)',
    color: '#F6FAFD',
    fontSize: '0.875rem',
    outline: 'none',
    transition: 'border-color 0.2s',
  };

  return (
    <section id="kontak" className="py-20 md:py-28">
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
            Komunikasi &amp; Peluang
          </span>
          <h2
            className="text-3xl sm:text-4xl font-extrabold mt-3 mb-4 tracking-tight"
            style={{ color: '#F6FAFD' }}
          >
            Mari Terhubung dan Berkolaborasi!
          </h2>
          <p className="text-base sm:text-lg" style={{ color: '#B3CFE5' }}>
            Saya terbuka untuk diskusi peluang magang semester 6, proyek kolaborasi, maupun sekadar bertukar wawasan seputar teknologi.
          </p>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">

          {/* Kolom Kiri: Kontak */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-xl font-bold mb-2" style={{ color: '#F6FAFD' }}>
              Saluran Kontak Langsung
            </h3>
            <p className="text-sm mb-6" style={{ color: '#B3CFE5' }}>
              Jangan ragu untuk menghubungi melalui salah satu kanal berikut. Saya biasanya merespons dalam waktu 24 jam.
            </p>

            <div className="space-y-3">
              {contactLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 group"
                  style={{
                    backgroundColor: 'rgba(26, 61, 99, 0.7)',
                    border: '1px solid rgba(74, 127, 167, 0.2)',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.border = '1px solid rgba(74, 127, 167, 0.5)';
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(26, 61, 99, 0.9)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(74,127,167,0.15)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.border = '1px solid rgba(74, 127, 167, 0.2)';
                    (e.currentTarget as HTMLElement).style.backgroundColor = 'rgba(26, 61, 99, 0.7)';
                    (e.currentTarget as HTMLElement).style.boxShadow = 'none';
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                    style={{
                      backgroundColor: 'rgba(10, 25, 49, 0.5)',
                      border: '1px solid rgba(74,127,167,0.2)',
                    }}
                  >
                    {item.icon}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#4A7FA7' }}>
                      {item.name}
                    </p>
                    <p className="text-sm sm:text-base font-bold truncate" style={{ color: '#F6FAFD' }}>
                      {item.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Form */}
          <div
            className="lg:col-span-7 rounded-2xl p-6 sm:p-8"
            style={{
              backgroundColor: 'rgba(26, 61, 99, 0.7)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(74, 127, 167, 0.2)',
              boxShadow: '0 4px 24px rgba(10,25,49,0.3)',
            }}
          >
            <h3 className="text-xl font-bold mb-2" style={{ color: '#F6FAFD' }}>
              Kirimkan Pesan Terhubung
            </h3>
            <p className="text-sm mb-6" style={{ color: '#B3CFE5' }}>
              Formulir ini secara otomatis memformat pesan Anda dan membuka obrolan langsung via WhatsApp/Email.
            </p>

            {submitted ? (
              <div
                className="p-6 rounded-xl flex items-start gap-3 animate-fadeIn"
                style={{
                  backgroundColor: 'rgba(74, 127, 167, 0.12)',
                  border: '1px solid rgba(74, 127, 167, 0.35)',
                  color: '#4A7FA7',
                }}
              >
                <IconCheckCircle className="w-6 h-6 shrink-0 mt-0.5" style={{ color: '#4A7FA7' }} />
                <div>
                  <h4 className="font-bold" style={{ color: '#F6FAFD' }}>Pesan Berhasil Diproses!</h4>
                  <p className="text-sm mt-1" style={{ color: '#B3CFE5' }}>
                    WhatsApp obrolan telah dibuka. Terima kasih telah menghubungi Dinar!
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                      style={{ color: '#B3CFE5' }}
                    >
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Masukkan nama Anda"
                      style={{ ...inputStyle }}
                      onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#4A7FA7'; }}
                      onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(74, 127, 167, 0.3)'; }}
                    />
                  </div>
                  <div>
                    <label
                      className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                      style={{ color: '#B3CFE5' }}
                    >
                      Alamat Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="nama@perusahaan.com"
                      style={{ ...inputStyle }}
                      onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#4A7FA7'; }}
                      onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(74, 127, 167, 0.3)'; }}
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-xs font-semibold uppercase tracking-wider mb-1.5"
                    style={{ color: '#B3CFE5' }}
                  >
                    Pesan atau Peluang Magang
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Ceritakan proyek, topik kolaborasi, atau kriteria magang semester 6 Anda di sini..."
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={(e) => { (e.currentTarget as HTMLElement).style.borderColor = '#4A7FA7'; }}
                    onBlur={(e) => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(74, 127, 167, 0.3)'; }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-semibold text-sm transition-all hover:scale-105 active:scale-95 cursor-pointer"
                  style={{
                    backgroundColor: '#4A7FA7',
                    color: '#F6FAFD',
                    boxShadow: '0 4px 20px rgba(74,127,167,0.4)',
                  }}
                >
                  Kirim Pesan via WhatsApp
                  <IconArrowRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="mt-20 pt-8 text-center"
        style={{ borderTop: '1px solid rgba(74,127,167,0.2)' }}
      >
        <p className="text-sm font-medium" style={{ color: '#B3CFE5' }}>
          &copy; {new Date().getFullYear()} {profileData.name}. Dibuat dengan penuh semangat 💙
        </p>
      </footer>
    </section>
  );
}
