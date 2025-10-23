import { motion } from "framer-motion";

export default function Loader() {
  return (
    <motion.div
      className="h-screen w-screen flex items-center justify-center bg-gray-900 fixed inset-0 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col items-center">
        {/* Animated spinning ring */}
        <motion.div
          className="w-14 h-14 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1 }}
        ></motion.div>

        {/* Text */}
        <motion.p
          className="mt-6 text-white text-lg font-semibold tracking-wide"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Loading Abednego’s Portfolio...
        </motion.p>
      </div>
    </motion.div>
  );
}
