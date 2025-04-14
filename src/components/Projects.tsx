
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projectsData = [
  {
    title: "Inspire 2025 Tech Fest Website",
    description: "Built and led official website for tech fest with 5.7K+ views, 28+ events.",
    link: "https://kevinpatel.me/inspire2025",
    demo: true
  },
  {
    title: "Sports Week Registration System",
    description: "Automated participant management system for college sports week.",
    link: "https://kevinpatel.me/sportsweek",
    demo: true
  },
  {
    title: "Google Cloud Study Jam Leaderboard",
    description: "Real-time leaderboard tracker using auto CSV uploads.",
    link: "https://kevinpatel.me/gcpjam",
    demo: true
  },
  {
    title: "Student Collaboration Platform",
    description: "React + Node.js platform with real-time messaging for 200+ students.",
    link: "https://github.com/Kevin-The-Dev/student-collab",
    github: true
  },
  {
    title: "Certificate Management System (SIH)",
    description: "Blockchain-powered system for secure certificate issuance using Solidity.",
    link: "https://github.com/Kevin-The-Dev/sih-certificates",
    github: true
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-800 mb-12 text-center"
        >
          Projects
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  {project.demo && (
                    <a
                      href={project.link}
                      className="inline-flex items-center text-purple-600 hover:text-purple-700"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.link}
                      className="inline-flex items-center text-gray-600 hover:text-gray-700"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
