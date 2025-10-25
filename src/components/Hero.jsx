import { motion } from "framer-motion";
import heroImage from "../assets/profile.jpeg"; // use your photo from assets

function Hero() {
  // Smooth scroll to the Projects section
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.querySelector("#projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row justify-center items-center bg-gray-900 text-white text-center md:text-left px-6"
    >
      {/* Left Section: Text */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="md:w-1/2 space-y-4"
      >
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I’m <span className="text-blue-400">Abednego</span> 👋
        </h1>
        <p className="text-lg text-gray-300">
          IT Student | Developer | Tech Enthusiast
        </p>
        <p className="text-sm text-gray-400 max-w-md mx-auto md:mx-0">
          Passionate about creating innovative solutions and exploring modern
          technologies in mobile, web, and software development.
        </p>
        <button
          onClick={handleScrollToProjects}
          className="inline-block mt-4 px-6 py-3 bg-blue-500 rounded-full hover:bg-blue-600 transition"
        >
          View My Work
        </button>
      </motion.div>

      {/* Right Section: Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="md:w-1/2 flex justify-center mt-10 md:mt-0"
      >
        <img
          src={heroImage}
          alt="Abednego"
          className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-blue-500 shadow-lg"
        />
      </motion.div>
    </section>
  );
}

export default Hero;
