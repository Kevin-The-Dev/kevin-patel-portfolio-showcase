
import { motion } from 'framer-motion';
import kevinImg from './kevin.PNG';

const About = () => {
  const hobbies = [
    'Web Designing',
    'Photography',
    'Exploring new tech'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="relative">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src="/kevin.PNG"
                alt="Kevin Patel"
                className="w-full h-[400px] object-cover"
              />


            </motion.div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
            <p className="text-gray-600 mb-8 text-lg">
              I'm a results-driven Computer Engineering student passionate about web development, UI/UX design, and cloud tech. Currently leading as Tech Head at GDG CKPCET.
            </p>

            <h3 className="text-2xl font-bold text-gray-800 mb-4">Hobbies</h3>
            <ul className="space-y-3">
              {hobbies.map((hobby, index) => (
                <motion.li
                  key={hobby}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center text-gray-600"
                >
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3" />
                  {hobby}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
