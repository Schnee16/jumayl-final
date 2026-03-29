import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

import PetirImg from "@/assets/petir.png";
import WeatherImg from "@/assets/weather.gif";
import JoinUsGif from "@/assets/joinus.gif";

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: { zIndex: 1, x: 0, opacity: 1 },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 100 : -100,
    opacity: 0,
  }),
};

const CardCarousel = ({ images }: { images: string[] }) => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const imageIndex = Math.abs(page % images.length);

  const paginate = useCallback((newDirection: number) => {
    setPage(([p]) => [p + newDirection, newDirection]);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => paginate(1), 4000);
    return () => clearInterval(timer);
  }, [paginate]);

  return (
    <div className="relative group/carousel w-full h-full overflow-hidden rounded-xl bg-[#204030]/10">
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          src={images[imageIndex]}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={(_, { offset }) => {
            if (Math.abs(offset.x) > 50) paginate(offset.x > 0 ? -1 : 1);
          }}
          className="absolute w-full h-full object-cover cursor-grab"
        />
      </AnimatePresence>

      {/* ARROW */}
      <div className="absolute inset-0 flex justify-between items-center px-2 opacity-0 group-hover/carousel:opacity-100 transition">
        <button className="p-1 rounded-full bg-[#b57e4c]/70 text-white">
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button className="p-1 rounded-full bg-[#b57e4c]/70 text-white">
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      {/* DOT */}
      <div className="absolute bottom-2 flex gap-1 justify-center w-full">
        {images.map((_, i) => (
          <div
            key={i}
            className={`h-1 rounded-full ${
              i === imageIndex ? "w-4 bg-[#b57e4c]" : "w-1 bg-[#204030]/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const projects = [
  {
    title: "Parabolic Motion Simulation",
    description: "Adjustable Angle and Velocity",
    tags: ["React", "Physics"],
    image: [PetirImg, WeatherImg, JoinUsGif],
    demo: "/parabola",
  },
  {
    title: "Ohm's Law Calculator",
    description: "Calculate Voltage, Current, and Resistance",
    tags: ["JavaScript", "Physics"],
    image: [JoinUsGif, PetirImg, WeatherImg],
    demo: "/ohm",
  },
  {
    title: "Wave Simulation",
    description: "Interactive sinusoidal wave simulation",
    tags: ["Canvas", "Physics"],
    image: [WeatherImg, PetirImg, JoinUsGif],
    demo: "/wave",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-20 md:py-32 bg-[#f5f5f0] dark:bg-[#203020]"
    >
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <span className="text-[#b57e4c] font-medium mb-2 block uppercase text-sm">
            Portfolio
          </span>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-[#204030] dark:text-[#e6f2e6]">
            Projects & Works
          </h2>

          <div className="w-20 h-1 bg-[#b57e4c] mx-auto rounded-full" />
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              {/* 🔥 GLASS CARD FIX */}
              <div
                className="
                h-full p-6 rounded-2xl
                backdrop-blur-xl
                bg-gradient-to-br from-[#204030]/60 to-[#b57e4c]/20
                border border-white/10
                shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                hover:shadow-[0_20px_50px_rgba(181,126,76,0.4)]
                transition-all duration-300
                flex flex-col
              "
              >
                {/* IMAGE */}
                <div className="aspect-video mb-4">
                  <CardCarousel images={project.image} />
                </div>

                {/* CONTENT */}
                <div className="space-y-3 flex-grow">
                  <h3 className="text-lg font-bold text-[#e6f2e6] group-hover:text-[#b57e4c] transition">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[#c8e6c9]">
                    {project.description}
                  </p>

                  {/* TAG */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-[#b57e4c]/20 text-[#e6f2e6]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* BUTTON */}
                <div className="pt-5 mt-auto">
                  <Button
                    size="sm"
                    className="rounded-full w-full bg-[#b57e4c] hover:bg-[#9c6a3f] text-white"
                    asChild
                  >
                    <Link to={project.demo}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Link>
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