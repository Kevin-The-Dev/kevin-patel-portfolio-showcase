
import { motion } from 'framer-motion';
import { Mic, Users, Code } from 'lucide-react';

const Activities = () => {
  const activities = [
    {
      title: 'Speaker at GDG Web Development Workshops',
      icon: Mic,
    },
    {
      title: 'Volunteer Mentor for College Hackathons',
      icon: Users,
    },
    {
      title: 'Active Open Source Contributor',
      icon: Code,
    },
  ];

  return (
    <section id="activities" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-800 mb-12 text-center"
        >
          Extracurricular Activities
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center text-purple-600"
              >
                <activity.icon className="w-8 h-8" />
              </motion.div>
              <h3 className="text-lg font-semibold text-gray-800">{activity.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
