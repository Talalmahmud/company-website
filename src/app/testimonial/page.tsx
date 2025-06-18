"use client";
import { motion } from "framer-motion";

export default function TestimonialPage() {
  const testimonials = [
    {
      quote:
        "Their mobile app increased our user engagement by 300% in just three months.",
      author: "Sarah Johnson",
      role: "CEO, RetailTech",
    },
    {
      quote:
        "The most professional development team we've worked with. Delivered ahead of schedule!",
      author: "Michael Chen",
      role: "CTO, HealthInnovate",
    },
    {
      quote:
        "Transformed our legacy system into a modern cloud platform seamlessly.",
      author: "David Wilson",
      role: "Director, FinServ Corp",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-950 h-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            What our clients say about working with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-md"
            >
              <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
              <blockquote className="text-lg italic mb-6">
                &quot;{testimonial.quote}&quot;
              </blockquote>
              <div className="font-bold">{testimonial.author}</div>
              <div className="text-gray-500 dark:text-gray-400 text-sm">
                {testimonial.role}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
