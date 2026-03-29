import { motion } from "framer-motion";

const skills = [
  {
    title: "Physics Problem Solving",
    icon: "⚛️",
    description:
      "Understanding and solving physics problems such as Mechanics, Aerodynamics, and Electricity in preparation for the Physics Olympiad.",
  },
  {
    title: "Web Development",
    icon: "💻",
    description:
      "Developing modern, responsive websites with HTML, CSS, JavaScript, and React JS.",
  },
  {
    title: "Analytical Thinking",
    icon: "🧠",
    description:
      "Logical and systematic thinking for solving complex problems and making sound decisions.",
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="py-20 md:py-32 bg-[#f5f5f0] dark:bg-[#203020]"
    >
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-[#b57e4c] font-medium mb-2 block uppercase tracking-widest text-sm">
            Skill
          </span>

          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-[#204030] dark:text-[#d0e0c0]">
            Hard Skills
          </h2>

          <div className="w-20 h-1 bg-[#b57e4c] mx-auto rounded-full" />
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}

              className="
                p-6 rounded-2xl 
                
                /* GLASS FIX (SAMA SEMUA SECTION) */
                bg-[#ffffff10] 
                backdrop-blur-xl

                border border-[#b57e4c]/25
                shadow-[0_8px_30px_rgba(0,0,0,0.15)]

                hover:shadow-[0_15px_45px_rgba(181,126,76,0.35)]
                hover:border-[#b57e4c]/60

                transition-all duration-300
                min-h-[200px]
              "
            >
              {/* ICON */}
              <span className="text-3xl mb-4 block">
                {skill.icon}
              </span>

              {/* TITLE */}
              <h3 className="font-display text-xl font-bold mb-3 text-[#204030] dark:text-[#e0f0d0]">
                {skill.title}
              </h3>

              {/* DESC */}
              <p className="text-[#204030]/80 dark:text-[#d0e0c0]/80">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}