import { motion } from "framer-motion";

export default function Loader() {
    return (
        <motion.div
            className="h-screen w-screen flex items-center justify-center bg-gray-900 fixed inset-0 z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
        >
            <div className="flex flex-col items-center">
                {/* Spinning circle */}
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-white text-lg font-semibold">Loading Abednego's Portfolio...</p>
            </div>
        </motion.div>
    );
}
