"use client";
import { motion } from "framer-motion";
import { FaChartLine, FaLightbulb, FaRocket, FaUsers } from "react-icons/fa";

export function ProcessSection() {
  const processes = [
    {
      icon: <FaLightbulb className="w-8 h-8" />,
      title: "Discovery",
      description:
        "We analyze your requirements and plan the perfect solution.",
    },
    {
      icon: <FaRocket className="w-8 h-8" />,
      title: "Development",
      description: "Agile development process with continuous iterations.",
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Testing",
      description: "Rigorous QA testing to ensure flawless performance.",
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Deployment",
      description: "Smooth launch with ongoing support and maintenance.",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Process</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A proven methodology for successful project delivery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processes.map((process, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl hover:shadow-lg transition-shadow"
            >
              <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-6 mx-auto">
                {process.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-center">
                {process.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                {process.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
