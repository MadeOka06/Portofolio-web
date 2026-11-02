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
import Reveal from '../common/Reveal';

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
      icon: <IconLinkedin className="w-5 h-5 text-[#60A5FA]" />,
    },
    {
      name: 'GitHub',
      value: 'github.com/MadeOka06',
      href: contactData.githubUrl,
      icon: <IconGithub className="w-5 h-5 text-[#F6FAFD]" />,
    },
    {
      name: 'Email Pribadi',
      value: contactData.email,
      href: `mailto:${contactData.email}`,
      icon: <IconMail className="w-5 h-5 text-[#60A5FA]" />,
    },
    {
      name: 'WhatsApp / Telepon',
      value: contactData.whatsappFormatted,
      href: `https://wa.me/${contactData.whatsappNumber}`,
      icon: <IconPhone className="w-5 h-5 text-[#60A5FA]" />,
    },
  ];

  return (
    <section id="kontak" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Reveal animation="fade-down">
            <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold uppercase tracking-wider px-4 py-1.5 rounded-full bg-[#4A7FA7]/15 border border-[#4A7FA7]/30 text-[#60A5FA]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA]" />
              Komunikasi &amp; Peluang
            </span>
          </Reveal>

          <Reveal animation="fade-up" delay={150}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mt-3 mb-4 tracking-tight text-[#F6FAFD]">
              Mari Terhubung &amp; Berkolaborasi!
            </h2>
            <p className="text-base sm:text-lg text-[#B3CFE5]">
              Saya terbuka untuk diskusi peluang magang semester 6, proyek kolaborasi, maupun sekadar bertukar wawasan seputar teknologi.
            </p>
          </Reveal>
        </div>

        {/* Content Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto items-start">

          {/* Kolom Kiri: Kontak */}
          <div className="lg:col-span-5 space-y-4">
            <Reveal animation="fade-right" delay={200}>
              <h3 className="text-2xl font-bold mb-2 text-[#F6FAFD]">
                Saluran Kontak Langsung
              </h3>
              <p className="text-sm sm:text-base mb-6 text-[#B3CFE5]/90">
                Jangan ragu untuk menghubungi melalui salah satu kanal berikut. Saya biasanya merespons dalam waktu 24 jam.
              </p>

              <div className="space-y-3.5">
                {contactLinks.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-4 p-4.5 rounded-2xl transition-all duration-300 group hover:-translate-y-1 hover:border-[#60A5FA]/60 bg-gradient-to-r from-[#1A3D63]/70 to-[#122b46]/70 border border-[#4A7FA7]/25 shadow-md hover:shadow-[0_10px_25px_rgba(74,127,167,0.2)]"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 bg-[#0A1931]/70 border border-[#4A7FA7]/30 shadow-inner"
                    >
                      {item.icon}
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#60A5FA]">
                        {item.name}
                      </p>
                      <p className="text-sm sm:text-base font-bold truncate text-[#F6FAFD] group-hover:text-sky-300 transition-colors">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Kolom Kanan: Form */}
          <div className="lg:col-span-7">
            <Reveal animation="fade-left" delay={300}>
              <div
                className="rounded-3xl p-7 sm:p-9 bg-gradient-to-b from-[#1A3D63]/75 via-[#132d4a]/75 to-[#0b1c31]/85 backdrop-blur-xl border border-[#4A7FA7]/25 shadow-[0_20px_45px_rgba(10,25,49,0.5)]"
              >
                <h3 className="text-2xl font-bold mb-2 text-[#F6FAFD]">
                  Kirimkan Pesan Terhubung
                </h3>
                <p className="text-sm sm:text-base mb-6 text-[#B3CFE5]/90">
                  Formulir ini secara otomatis memformat pesan Anda dan membuka obrolan langsung via WhatsApp.
                </p>

                {submitted ? (
                  <div
                    className="p-6 rounded-2xl flex items-start gap-3.5 animate-fadeIn bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 shadow-lg"
                  >
                    <IconCheckCircle className="w-6 h-6 shrink-0 mt-0.5 text-emerald-400" />
                    <div>
                      <h4 className="font-bold text-[#F6FAFD]">Pesan Berhasil Diproses!</h4>
                      <p className="text-sm mt-1 text-emerald-200/90">
                        WhatsApp obrolan telah dibuka. Terima kasih telah menghubungi!
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-[#B3CFE5]">
                          Nama Lengkap
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Masukkan nama Anda"
                          className="w-full px-4 py-3 rounded-2xl bg-[#0A1931]/60 border border-[#4A7FA7]/30 text-[#F6FAFD] text-sm focus:outline-none focus:border-[#60A5FA] focus:ring-2 focus:ring-[#60A5FA]/30 transition-all placeholder:text-[#B3CFE5]/40"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-[#B3CFE5]">
                          Alamat Email
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="nama@perusahaan.com"
                          className="w-full px-4 py-3 rounded-2xl bg-[#0A1931]/60 border border-[#4A7FA7]/30 text-[#F6FAFD] text-sm focus:outline-none focus:border-[#60A5FA] focus:ring-2 focus:ring-[#60A5FA]/30 transition-all placeholder:text-[#B3CFE5]/40"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider mb-2 text-[#B3CFE5]">
                        Pesan atau Peluang Magang
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Ceritakan proyek, topik kolaborasi, atau kriteria magang semester 6 Anda di sini..."
                        className="w-full px-4 py-3 rounded-2xl bg-[#0A1931]/60 border border-[#4A7FA7]/30 text-[#F6FAFD] text-sm focus:outline-none focus:border-[#60A5FA] focus:ring-2 focus:ring-[#60A5FA]/30 transition-all placeholder:text-[#B3CFE5]/40 resize-y"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-shimmer w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl font-semibold text-sm transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer bg-gradient-to-r from-[#4A7FA7] to-[#2563EB] text-white shadow-[0_8px_25px_rgba(37,99,235,0.4)]"
                    >
                      Kirim Pesan via WhatsApp
                      <IconArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 text-center border-t border-[#4A7FA7]/15">
        <p className="text-sm font-medium text-[#B3CFE5]/80">
          &copy; {new Date().getFullYear()} {profileData.name}. Dibuat dengan penuh dedikasi 💙
        </p>
      </footer>
    </section>
  );
}
