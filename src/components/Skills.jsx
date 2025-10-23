// Skills.jsx
import { motion } from "framer-motion";

function Skills() {
  const skills = [
    { category: "Languages", items: ["Python", "Java", "Kotlin", "C", "C++"] },
    { category: "Web Technologies", items: ["HTML", "CSS", "JavaScript", "React", "Flask", "Django"] },
    { category: "Databases", items: ["MySQL", "Firebase", "Oracle"] },
    { category: "Mobile Development", items: ["Flutter", "Android Studio (Kotlin)"] },
    { category: "Tools & Others", items: ["Git & GitHub", "VS Code", "PyCharm", "Figma", "Termux", "Linux"] },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-bold mb-10"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-blue-600">
                {skill.category}
              </h3>
              <ul className="space-y-2 text-gray-700">
                {skill.items.map((item, i) => (
                  <li key={i} className="hover:text-blue-500 transition">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
