import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#f5f5f0] dark:bg-[#203020]">
      
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-2xl md:text-3xl font-bold text-[#b57e4c]">
          Initializing Experience.....
        </h1>

        {/* ANIMASI DOT */}
        <div className="flex justify-center gap-2 mt-4">
          {[0,1,2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-[#3a8d55] rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>

    </div>
  );
}