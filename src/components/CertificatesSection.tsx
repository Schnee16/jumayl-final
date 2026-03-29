import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certificates = [
  {
    title: 'Medali Perak Fisika Terpadu Tk. Nasional',
    issuer: 'Pekan Olimpiade Nasional',
    date: '2025',
    credentialId: 'ID-001',
    image: '⚛️',
    link: '#',
  },
  {
    title: 'Medali Perunggu IPS Aceh Science Olympiad',
    issuer: 'POSI',
    date: '2025',
    credentialId: 'ID-002',
    image: '☁️',
    link: '#',
  },
  {
    title: 'Siswa Berprestasi SMP',
    issuer: 'Dinas Pendidikan Aceh',
    date: '2024',
    credentialId: 'ID-003',
    image: '🏆',
    link: '#',
  },
  {
    title: 'Peringkat 4 KSM IPS Kota',
    issuer: 'Kementrian Agama',
    date: '2024',
    credentialId: 'ID-004',
    image: '🍃',
    link: '#',
  },
  {
    title: 'Peringkat 9 OSN IPS Kota',
    issuer: 'Dinas Pendidikan',
    date: '2024',
    credentialId: 'ID-005',
    image: '⚙️',
    link: '#',
  },
  {
    title: 'Nurul Fikri Award',
    issuer: 'Nurul Fikri',
    date: '2023',
    credentialId: 'ID-006',
    image: '📋',
    link: '#',
  },
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-20 md:py-32 bg-[#203020]">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#b57e4c] font-medium mb-2 block">
            Achievements
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-[#e6f2e6]">
            Certificates & Awards
          </h2>

          <div className="w-20 h-1 bg-[#b57e4c] mx-auto rounded-full" />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="
                h-full p-6 rounded-2xl
                backdrop-blur-xl
                bg-gradient-to-br from-[#204030]/70 to-[#b57e4c]/20
                border border-white/10
                shadow-card
                hover:shadow-card-hover
                hover:-translate-y-2
                transition-all duration-300
              ">

                {/* ICON */}
                <div className="
                  w-16 h-16 rounded-xl mb-4 flex items-center justify-center
                  bg-gradient-to-br from-[#b57e4c]/30 to-[#204030]/40
                ">
                  <span className="text-3xl">{cert.image}</span>
                </div>

                {/* CONTENT */}
                <div className="space-y-3">

                  <div className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-[#b57e4c] mt-0.5 shrink-0" />

                    <h3 className="
                      font-display text-lg font-bold
                      text-[#e6f2e6]
                      group-hover:text-[#b57e4c]
                      transition-colors
                    ">
                      {cert.title}
                    </h3>
                  </div>

                  <p className="text-sm text-[#c8e6c9]">
                    {cert.issuer}
                  </p>

                  <div className="flex items-center gap-2 text-sm text-[#c8e6c9]">
                    <Calendar className="h-4 w-4" />
                    <span>{cert.date}</span>
                  </div>

                  <p className="text-xs text-[#a5d6a7] font-mono">
                    ID: {cert.credentialId}
                  </p>

                  {/* BUTTON */}
                  <Button
                    size="sm"
                    className="
                      rounded-full mt-2
                      bg-[#b57e4c]
                      text-white
                      hover:bg-[#9c6236]
                      transition
                    "
                    asChild
                  >
                    <a href={cert.link}>
                      <ExternalLink className="h-4 w-4 mr-1" />
                      View
                    </a>
                  </Button>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}