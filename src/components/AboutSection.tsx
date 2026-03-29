import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Trophy, FolderKanban, ChevronDown } from "lucide-react";

export default function AboutSection() {
  const [activeAccordion, setActiveAccordion] = useState(0);

  const stats = [
    { icon: Trophy, value: "30+", label: "Competitions" },
    { icon: FolderKanban, value: "10+", label: "Projects Built" },
  ];

  const accordionData = [
    {
      title: "Physics Enthusiast & Olympiad Aspirant",
      content:
        "I am a high school student who is deeply passionate about physics and scientific problem solving.",
      content2:
        "I actively study advanced topics such as mechanics, electricity, and mathematical physics to prepare for competitions.",
      content3:
        "My main goal is to qualify for the Physics Olympiad (OSN) and build strong analytical thinking skills.",
    },
    {
      title: "Coding & Technology",
      content:
        "I enjoy coding as a way to combine logic and creativity, allowing me to build useful and meaningful digital projects.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-[#f5f5f0] dark:bg-[#203020]"
    >
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-[#b57e4c] font-medium mb-2 block uppercase tracking-widest text-sm">
            More About Me
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#204030] dark:text-[#d0e0c0]">
            Discover Me
          </h2>

          <div className="w-20 h-1 bg-[#b57e4c] mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* FOTO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative group">

              <div className="
                aspect-square rounded-3xl overflow-hidden
                shadow-[0_20px_50px_rgba(181,126,76,0.4)]
                transition-all duration-500 hover:scale-105
              ">
                <img
                  src="/profile.png.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* BADGE (GLASS FIXED) */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="
                  absolute -bottom-6 -right-6 z-20 p-5
                  
                  bg-[#204030]/50
                  backdrop-blur-xl
                  
                  border border-[#b57e4c]/30
                  
                  rounded-2xl shadow-lg
                  hover:shadow-[0_10px_30px_rgba(181,126,76,0.4)]
                  
                  transition-all
                "
              >
                <p className="font-bold text-2xl text-[#b57e4c]">
                  2+ Years
                </p>
                <p className="text-xs text-[#d0e0c0] uppercase">
                  Learning Physics & Coding
                </p>
              </motion.div>

              <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#b57e4c]/20 blur-3xl rounded-full" />
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <div className="space-y-8">

            {/* ACCORDION */}
            <div className="space-y-4">
              {accordionData.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="
                    rounded-xl overflow-hidden
                    
                    bg-[#204030]/40
                    backdrop-blur-xl
                    
                    border border-[#b57e4c]/30
                    
                    shadow-md
                    hover:shadow-[0_15px_40px_rgba(181,126,76,0.35)]
                    
                    transition-all
                  "
                >
                  <button
                    onClick={() =>
                      setActiveAccordion(
                        activeAccordion === index ? -1 : index
                      )
                    }
                    className="
                      w-full p-4 flex items-center justify-between
                      hover:bg-[#b57e4c]/10 transition
                    "
                  >
                    <span className="font-bold text-[#e6f0e6]">
                      {item.title}
                    </span>

                    <ChevronDown
                      className={`text-[#b57e4c] transition-transform duration-300 ${
                        activeAccordion === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {activeAccordion === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                      >
                        <div className="p-4 pt-0 text-[#d0e0c0]/90">
                          {item.content}
                        </div>
                        {item.content2 && (
                          <div className="p-4 pt-0 text-[#d0e0c0]/90">
                            {item.content2}
                          </div>
                        )}
                        {item.content3 && (
                          <div className="p-4 pt-0 text-[#d0e0c0]/90">
                            {item.content3}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="
                    p-4 rounded-xl text-center
                    
                    bg-[#204030]/40
                    backdrop-blur-xl
                    
                    border border-[#b57e4c]/30
                    
                    shadow-md
                    hover:shadow-[0_15px_40px_rgba(181,126,76,0.35)]
                    
                    transition-all
                  "
                >
                  <stat.icon className="h-6 w-6 text-[#b57e4c] mx-auto mb-2" />

                  <p className="text-2xl font-bold text-[#e6f0e6]">
                    {stat.value}
                  </p>

                  <p className="text-xs uppercase text-[#d0e0c0]/70">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}