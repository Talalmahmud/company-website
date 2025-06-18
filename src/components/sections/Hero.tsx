"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br  from-gray-900 to-gray-800">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Build the Future with{" "}
            <span className="text-yellow-300">TechCraft</span>
          </h1>
          <p className="text-xl text-center text-white/90 mb-8 max-w-2xl mx-auto">
            We craft high-performance mobile apps and websites that drive
            business growth.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href={"https://cal.com/talal-mahmud-t9fdfx"}>
              <Button
                size="lg"
                className="bg-yellow-400 hover:bg-yellow-500 text-gray-900"
              >
                Get Started
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className=" text-purple-950 border-white dark:bg-white dark:text-black hover:bg-white/10"
            >
              View Work
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
