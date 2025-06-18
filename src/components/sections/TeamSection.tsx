"use client";
import { motion } from "framer-motion";

export function TeamSection() {
  const team = [
    {
      name: "Alex Turner",
      role: "CEO & Founder",
      image: "/team1.jpg",
    },
    {
      name: "Maria Garcia",
      role: "CTO",
      image: "/team2.jpg",
    },
    {
      name: "James Wilson",
      role: "Lead Developer",
      image: "/team3.jpg",
    },
    {
      name: "Priya Patel",
      role: "UX Designer",
      image: "/team4.jpg",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            The talented people behind your success
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gray-200 dark:bg-gray-800 overflow-hidden">
                {/* Replace with actual Image component */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
              </div>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
