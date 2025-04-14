
import { motion } from 'framer-motion';
import { FileDown } from 'lucide-react';

const FloatingButton = () => {
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-8 right-8 bg-purple-600 text-white p-4 rounded-full shadow-lg flex items-center space-x-2 hover:bg-purple-700 transition-colors duration-300"
    >
      <FileDown className="w-5 h-5" />
      <span className="hidden md:inline">Download Resume</span>
    </motion.a>
  );
};

export default FloatingButton;
