import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToAbout = () => {
    const el = document.querySelector("#about");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f5f5f0] dark:bg-[#203020]"
    >
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-12 z-10 relative min-h-screen">
        
        {/* FOTO */}
        <motion.img
          src="/foto_akun1.jpg"
          alt="Profile"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-[#b57e4c] shadow-glow"
        />

        {/* TEXT */}
        <div className="max-w-2xl text-center lg:text-left">
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span className="text-gradient">
              Friendly Neighborhood Physics Enthusiast
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-[#204030] dark:text-[#d0e0c0] mb-8"
          >
            I am a student at MAN 1 Banda Aceh who is passionate about science olympiads and coding.
            Physics X Coding = Solution to real world problems.
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-10">
            <Button
              size="lg"
              className="rounded-full px-8 glass shadow-glow"
              onClick={scrollToAbout}
            >
              My Projects
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="rounded-full px-8 glass"
              onClick={scrollToAbout}
            >
              Get In Touch
            </Button>
          </div>

          <motion.button
            onClick={scrollToAbout}
            className="p-3 rounded-full glass animate-float"
          >
            <ArrowDown className="h-5 w-5 text-[#b57e4c]" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}