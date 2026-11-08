import {
  IconLinkedin,
  IconGithub,
  IconMail,
  IconPhone,
} from '../common/Icons';
import { contactData, profileData } from '../../data/portfolioData';
import Reveal from '../common/Reveal';

export default function Contact() {
  const contactLinks = [
    {
      name: 'EMAIL PRIBADI',
      value: contactData.email,
      href: `mailto:${contactData.email}`,
      icon: <IconMail className="w-5 h-5" />,
    },
    {
      name: 'WHATSAPP / TELEPON',
      value: contactData.whatsappFormatted,
      href: `https://wa.me/${contactData.whatsappNumber}`,
      icon: <IconPhone className="w-5 h-5" />,
    },
    {
      name: 'LINKEDIN PROFILE',
      value: 'linkedin.com/madeoka',
      href: contactData.linkedinUrl,
      icon: <IconLinkedin className="w-5 h-5" />,
    },
    {
      name: 'GITHUB REPOSITORY',
      value: 'github.com/MadeOka06',
      href: contactData.githubUrl,
      icon: <IconGithub className="w-5 h-5" />,
    },
  ];

  return (
    <section id="kontak" className="pt-16 md:pt-24 bg-[#F5F3EC]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Index Header ── */}
        <Reveal animation="fade-down">
          <div className="grid grid-cols-12 pb-6 mb-12 border-b border-[#DDD9CD] text-[11px] font-mono-swiss text-[#585752]">
            <div className="col-span-12 sm:col-span-4 flex items-center gap-2">
              <span className="w-2 h-2 bg-[#D84227]" />
              <span>SEC. 07 — KOMUNIKASI &amp; INISIASI KOLABORASI</span>
            </div>
            <div className="col-span-12 sm:col-span-8 sm:text-right mt-1 sm:mt-0 text-[#87857E]">
              HUBUNGI // PELUANG MAGANG SEMESTER 6
            </div>
          </div>
        </Reveal>

        {/* ── Main Communication Hub with Scroll Reveal ── */}
        <div className="pb-20 max-w-5xl mx-auto space-y-10">
          <Reveal animation="fade-up" delay={100}>
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="font-mono-swiss text-xs text-[#D84227] tracking-[0.1em] block">
                SALURAN TERBUKA // RESPONS 24 JAM
              </span>
              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#121212] tracking-[-0.035em] leading-[1.05]">
                Mari Terhubung dan Berkolaborasi.
              </h2>
              <p className="font-body text-base sm:text-lg text-[#585752] leading-relaxed">
                Terbuka untuk diskusi penempatan magang industri semester 6, pengembangan aplikasi web/mobile, maupun pertukaran wawasan seputar teknologi analitis.
              </p>
            </div>
          </Reveal>

          {/* Massive Interactive Mail Link */}
          <Reveal animation="fade-up" delay={200}>
            <div className="border border-[#DDD9CD] bg-[#EFECE3] p-8 sm:p-10 text-center">
              <span className="font-mono-swiss text-[11px] text-[#87857E] tracking-[0.1em] block mb-2">
                KIRIM SUREL / EMAIL LANGSUNG:
              </span>
              <a
                href={`mailto:${contactData.email}`}
                className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#121212] hover:text-[#D84227] transition-colors break-all inline-block"
              >
                {contactData.email}
              </a>
              <div className="mt-4">
                <a
                  href={`mailto:${contactData.email}`}
                  className="font-mono-swiss text-xs tracking-[0.08em] px-6 py-3 bg-[#121212] text-[#F5F3EC] hover:bg-[#D84227] transition-colors inline-flex items-center gap-2"
                >
                  <span>BUKA APLIKASI EMAIL</span>
                  <span>→</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Channel Links Stack */}
          <Reveal animation="fade-up" delay={300}>
            <div className="space-y-3">
              <span className="font-mono-swiss text-[11px] text-[#87857E] tracking-[0.08em] block text-center">
                KANAL KOMUNIKASI &amp; PROFIL RESMI:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {contactLinks.map((item, idx) => (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="editorial-row border border-[#DDD9CD] p-5 bg-[#EFECE3] hover:border-[#121212] hover:bg-[#F5F3EC] transition-all flex flex-col justify-between group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono-swiss text-[10px] text-[#87857E]">
                        {item.name}
                      </span>
                      <div className="text-[#121212] group-hover:text-[#D84227] transition-colors">
                        {item.icon}
                      </div>
                    </div>
                    <p className="font-body text-sm font-semibold text-[#121212] truncate group-hover:text-[#D84227] transition-colors">
                      {item.value}
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Academic Office Base */}
          <Reveal animation="fade-up" delay={400}>
            <div className="border-t border-[#DDD9CD] pt-6 font-mono-swiss text-[11px] text-[#585752] text-center space-y-1">
              <p className="font-semibold text-[#121212]">LOKASI INSTITUSI AKADEMIK:</p>
              <p>Jurusan Teknologi Informasi — Politeknik Negeri Malang</p>
              <p className="text-[#87857E]">Jl. Soekarno Hatta No.9, Jatimulyo, Lowokwaru, Malang, Jawa Timur</p>
            </div>
          </Reveal>
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
            SET IN PLUS JAKARTA SANS, INTER &amp; IBM PLEX MONO
          </div>
        </div>
      </footer>
    </section>
  );
}
