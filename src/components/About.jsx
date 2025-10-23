import { motion } from "framer-motion";
import logo from "../assets/logo.jpg";

function About() {
  return (
    <section id="about" className="py-20 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Profile Image with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="md:w-1/2 flex justify-center mt-10 md:mt-0"
        >
          <img
            src={logo}
            alt="Abednego"
            className="w-56 h-56 md:w-72 md:h-72 rounded-full object-cover border-4 border-blue-500 shadow-lg"
          />
        </motion.div>

        {/* Right side: Text */}
        <div>
          <h2 className="text-3xl font-bold mb-6">About Me</h2>

          <p className="text-lg leading-relaxed mb-6">
            Hello 👋 I’m <span className="font-semibold">Abednego Kaume</span>,
            an <span className="font-semibold">IT student at Laikipia University</span>,
            passionate about software development, problem-solving, and building
            solutions that make life easier and more efficient.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            My development journey began with <span className="font-semibold">Python</span>,
            where I built small scripts and later advanced into full web applications.
            Over time, I’ve gained skills in <span className="font-semibold">Flask</span>,
            <span className="font-semibold">MySQL</span>, <span className="font-semibold">React</span>,
            <span className="font-semibold">Tailwind CSS</span>, and <span className="font-semibold">Spring Boot</span>.
            I’ve completed several impactful projects such as a
            <span className="font-semibold"> Lost Item Tracking System</span>,
            a <span className="font-semibold"> Local Community Engagement App</span>,
            and a prototype of a <span className="font-semibold"> fully automated BMI calculation device</span>.
            I also built my first <span className="font-semibold">mobile application using Flutter</span>.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Beyond coding, I enjoy <span className="font-semibold">tech discussions</span>,
            <span className="font-semibold">mentoring peers</span>, and constantly learning new technologies.
            My goal is to become a versatile developer who can design and build
            both <span className="font-semibold">web</span> and <span className="font-semibold">mobile applications</span>,
            while contributing to innovative solutions that empower communities.
          </p>

          {/* Glowing CV Button */}
          <a
            href="https://abednego-cv.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md
                       transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.8)]"
          >
            View My CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
