"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Globe, BarChart2 } from "lucide-react";

const services = [
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Mobile Apps",
    desc: "iOS & Android apps with React Native & Flutter.",
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Web Development",
    desc: "Fast, responsive websites with Next.js.",
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Custom Software",
    desc: "Tailored solutions for your business.",
  },
  {
    icon: <BarChart2 className="w-8 h-8" />,
    title: "AI Solutions",
    desc: "Machine learning & automation.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            We deliver cutting-edge digital solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
