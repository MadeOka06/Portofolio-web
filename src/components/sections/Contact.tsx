import React, { useState } from 'react';
import {
  IconLinkedin,
  IconGithub,
  IconMail,
  IconPhone,
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
      name: 'EMAIL PRIBADI',
      value: contactData.email,
      href: `mailto:${contactData.email}`,
      icon: <IconMail className="w-4 h-4" />,
    },
    {
      name: 'WHATSAPP / TELEPON',
      value: contactData.whatsappFormatted,
      href: `https://wa.me/${contactData.whatsappNumber}`,
      icon: <IconPhone className="w-4 h-4" />,
    },
    {
      name: 'LINKEDIN PROFILE',
      value: 'linkedin.com/madeoka',
      href: contactData.linkedinUrl,
      icon: <IconLinkedin className="w-4 h-4" />,
    },
    {
      name: 'GITHUB REPOSITORY',
      value: 'github.com/MadeOka06',
      href: contactData.githubUrl,
      icon: <IconGithub className="w-4 h-4" />,
    },
  ];

  return (
    <section id="kontak" className="pt-16 md:pt-24 bg-[#F5F3EC]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Index Header ── */}
        <div className="grid grid-cols-12 pb-6 mb-12 border-b border-[#DDD9CD] text-[11px] font-mono-swiss text-[#585752]">
          <div className="col-span-12 sm:col-span-4 flex items-center gap-2">
            <span className="w-2 h-2 bg-[#D84227]" />
            <span>SEC. 07 — KOMUNIKASI &amp; INISIASI KOLABORASI</span>
          </div>
          <div className="col-span-12 sm:col-span-8 sm:text-right mt-1 sm:mt-0 text-[#87857E]">
            HUBUNGI // PELUANG MAGANG SEMESTER 6
          </div>
        </div>

        {/* ── Main Communication Hub Grid ── */}
        <div className="grid grid-cols-12 gap-y-12 lg:gap-12 pb-20">

          {/* Left Block: Direct Mail & Channels (Cols 1-6) */}
          <div className="col-span-12 lg:col-span-6 space-y-8 pr-0 lg:pr-8 border-b lg:border-b-0 lg:border-r border-[#DDD9CD] pb-12 lg:pb-0">
            <div>
              <span className="font-mono-swiss text-xs text-[#D84227] tracking-[0.1em] block mb-2">
                SALURAN TERBUKA // RESPONS 24 JAM
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-extrabold text-[#121212] tracking-[-0.035em] leading-[1.05] mb-6">
                Mari Terhubung dan Berkolaborasi.
              </h2>
              <p className="font-body text-base text-[#585752] leading-relaxed max-w-lg mb-8">
                Terbuka untuk diskusi penempatan magang industri semester 6, pengembangan aplikasi web/mobile, maupun pertukaran wawasan seputar teknologi analitis.
              </p>
            </div>

            {/* Massive Interactive Mail Link */}
            <div className="border-t border-b border-[#DDD9CD] py-6">
              <span className="font-mono-swiss text-[10px] text-[#87857E] block mb-1">
                KIRIM SUREL LANGSUNG:
              </span>
              <a
                href={`mailto:${contactData.email}`}
                className="font-display text-2xl sm:text-3xl font-bold text-[#121212] hover:text-[#D84227] transition-colors break-all"
              >
                {contactData.email}
              </a>
            </div>

            {/* Channel Links Stack */}
            <div className="space-y-4 pt-2">
              <span className="font-mono-swiss text-[10px] text-[#87857E] block">
                KANAL KOMUNIKASI RESMI:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {contactLinks.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="editorial-row border border-[#DDD9CD] p-4 bg-[#EFECE3] hover:border-[#121212] transition-colors flex items-start justify-between"
                  >
                    <div>
                      <p className="font-mono-swiss text-[10px] text-[#87857E]">
                        {item.name}
                      </p>
                      <p className="font-body text-xs font-semibold text-[#121212] mt-0.5 truncate max-w-[170px]">
                        {item.value}
                      </p>
                    </div>
                    <div className="text-[#121212] mt-0.5">
                      {item.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Academic Office Base */}
            <div className="border-t border-[#DDD9CD] pt-4 font-mono-swiss text-[11px] text-[#585752] space-y-1">
              <p className="font-semibold text-[#121212]">LOKASI INSTITUSI:</p>
              <p>Jurusan Teknologi Informasi — Politeknik Negeri Malang</p>
              <p className="text-[#87857E]">Jl. Soekarno Hatta No.9, Jatimulyo, Lowokwaru, Malang, Jawa Timur</p>
            </div>
          </div>

          {/* Right Block: Minimal Single-Line Underline Input Form (Cols 7-12) */}
          <div className="col-span-12 lg:col-span-6 pl-0 lg:pl-6 space-y-6">
            <div>
              <span className="font-mono-swiss text-xs text-[#D84227] tracking-[0.1em] block mb-2">
                TRANSMISI PESAN INTERAKTIF
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#121212] mb-3">
                Kirimkan Pesan Terstruktur.
              </h3>
              <p className="font-body text-sm text-[#585752] leading-relaxed">
                Formulir ini memformat pesan Anda secara otomatis dan membuka obrolan langsung via WhatsApp ke nomor saya.
              </p>
            </div>

            {submitted ? (
              <div className="border border-[#2E6930] bg-[#EFECE3] p-8 text-[#2E6930]">
                <p className="font-mono-swiss text-xs font-semibold tracking-[0.08em] mb-2">
                  STATUS // BERHASIL DITERUSKAN
                </p>
                <p className="font-body text-sm text-[#121212]">
                  WhatsApp obrolan telah dibuka. Terima kasih telah menghubungi!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8 pt-4">
                {/* Single-Line Underline Inputs */}
                <div className="space-y-6">
                  <div>
                    <label className="block font-mono-swiss text-[10px] text-[#87857E] mb-2">
                      NAMA LENGKAP PENGIRIM *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Nama Anda atau Instansi"
                      className="underline-input w-full py-2 font-mono-swiss text-xs placeholder:text-[#87857E]/50"
                    />
                  </div>

                  <div>
                    <label className="block font-mono-swiss text-[10px] text-[#87857E] mb-2">
                      ALAMAT SUREL / EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. nama@perusahaan.com"
                      className="underline-input w-full py-2 font-mono-swiss text-xs placeholder:text-[#87857E]/50"
                    />
                  </div>

                  <div>
                    <label className="block font-mono-swiss text-[10px] text-[#87857E] mb-2">
                      PESAN ATAU SPESIFIKASI PELUANG MAGANG *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ceritakan proyek, topik kolaborasi, atau kriteria magang semester 6..."
                      className="underline-input w-full py-2 font-mono-swiss text-xs placeholder:text-[#87857E]/50 resize-y"
                    />
                  </div>
                </div>

                {/* Inline Submission Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="font-mono-swiss text-xs tracking-[0.08em] font-semibold px-8 py-4 bg-[#121212] text-[#F5F3EC] hover:bg-[#D84227] transition-colors flex items-center gap-3 cursor-pointer"
                  >
                    <span>KIRIM VIA WHATSAPP</span>
                    <IconArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>

      {/* ── Swiss Colophon Bar (Utility Footer with Distributed Metadata) ── */}
      <footer className="border-t border-[#DDD9CD] bg-[#EFECE3] py-6">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-3 gap-4 items-center font-mono-swiss text-[10px] text-[#585752]">
          <div>
            &copy; {new Date().getFullYear()} {profileData.name.toUpperCase()}. ALL RIGHTS RESERVED.
          </div>
          <div className="sm:text-center text-[#87857E]">
            GRID SPEC: C12:R∞ // 0PX RADIUS
          </div>
          <div className="sm:text-right text-[#87857E]">
            SET IN FRAUNCES, INTER &amp; IBM PLEX MONO
          </div>
        </div>
      </footer>
    </section>
  );
}
