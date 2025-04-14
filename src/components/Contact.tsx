
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, FileText } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    {
      name: 'Email',
      href: 'mailto:kevin@example.com',
      icon: Mail,
      color: 'text-red-500',
    },
    {
      name: 'GitHub',
      href: '#',
      icon: Github,
      color: 'text-gray-800',
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: Linkedin,
      color: 'text-blue-600',
    },
    {
      name: 'Resume',
      href: '#',
      icon: FileText,
      color: 'text-green-600',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-800 mb-12 text-center"
        >
          Get in Touch
        </motion.h2>

        <div className="flex justify-center space-x-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className={`${link.color} hover:opacity-80 transition-opacity`}
            >
              <link.icon className="w-8 h-8" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
