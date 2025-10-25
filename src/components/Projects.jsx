function Projects() {
  const projects = [
    {
      title: "Online Catalogue System",
      description:
        "Developed during internship using Java Spring Boot and React. Enables product management and catalog browsing.",
      link: "https://github.com/Abednego254/store",
    },
    {
      title: "Kiswahili Teaching System",
      description:
        "An AI-assisted platform for teaching Kiswahili through interactive content and assessments.",
      link: "https://github.com/Abednego254/soma-swahili"
    },
    {
      title: "M-Pesa Payment App (In Progress)",
      description:
        "A mobile/web app designed to help sellers manage M-Pesa transactions efficiently.",
      link: "https://github.com/Abednego254/Mpesa-API",
    },
    {
      title: "BMI Calculator Mobile App",
      description:
        "A cross-platform mobile app built with Flutter in Android Studio to calculate and display users’ BMI with an interactive UI.",
      link: "https://github.com/Abednego254/bmi-tracker",
    },
    {
      title: "Lost and Found Items Tracking Tool",
      description:
        "A web-based platform for reporting and recovering lost items efficiently with offline support.",
    },
    {
      title: "Brainspark (Offline AI Assistant)",
      description:
        "An AI-powered academic assistant designed to help students study and find quick academic answers offline.",
    },
    {
      title: "Smart BMI Device (Prototype)",
      description:
        "A physical device under development that automates BMI calculation and displays results instantly.",
    },
    {
      title: "SamCafe Website (Live)",
      description:
        "Business website built for a local café using modern web technologies.",
      link: "https://samcafe-ce959.web.app/",
    },
    {
      title: "Rental App (Live)",
      description:
        "Rental management platform with both admin and tenant login features, hosted on Render. The Username is Abedie and the password is Ciumbe@254",
      link: "https://rental-app-n5dp.onrender.com/",
    },
    {
      title: "Smart Intern App",
      description: "An app that integrates AI to help companies and fresh interns from school find each other.",
      link: "https://github.com/Abedie254/smart-intern",
    },
    {
      title: "Nexora Website",
      description: "A website designed for Nexora Tech Solutions for their advertising the company",
      link: "https://github.com/Abednego254/nexora",
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">My Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-2 text-blue-400">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                >
                  View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
