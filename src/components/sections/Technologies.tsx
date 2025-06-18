"use client";

import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiFlutter,
  SiLaravel,
  SiMongodb,
  SiPostgresql,
  SiTypescript,
} from "react-icons/si";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const technologies = [
  {
    name: "Next.js",
    icon: <SiNextdotjs className="w-10 h-10" />,
    category: "Frontend",
  },
  {
    name: "React",
    icon: <FaReact className="w-10 h-10" />,
    category: "Frontend",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="w-10 h-10" />,
    category: "Language",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-10 h-10" />,
    category: "Styling",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="w-10 h-10" />,
    category: "Backend",
  },
  {
    name: "Firebase",
    icon: <SiFirebase className="w-10 h-10" />,
    category: "Backend",
  },
  {
    name: "Flutter",
    icon: <SiFlutter className="w-10 h-10" />,
    category: "Mobile",
  },
  {
    name: "Laravel",
    icon: <SiLaravel className="w-10 h-10" />,
    category: "Backend",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="w-10 h-10" />,
    category: "Database",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql className="w-10 h-10" />,
    category: "Database",
  },
];

export function Technologies() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="technologies" className="py-20 bg-gray-200 dark:bg-gray-950">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technologies We Use</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Modern tech stack for high-performance applications
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl mb-3 text-primary">{tech.icon}</div>
              <h3 className="font-semibold text-center">{tech.name}</h3>
              <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {tech.category}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
