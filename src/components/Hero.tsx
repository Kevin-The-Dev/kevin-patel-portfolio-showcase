
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-blue-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center px-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Kevin Patel
        </h1>
        <div className="text-xl md:text-2xl text-gray-600 mb-6">
          <TypeAnimation
            sequence={[
              'Web Developer',
              2000,
              'UI/UX Enthusiast',
              2000,
              'GDG Tech Head',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
        <p className="text-gray-600 mb-8">Surat, India</p>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-full font-medium hover:shadow-lg transition-shadow duration-300"
        >
          Get in Touch
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
