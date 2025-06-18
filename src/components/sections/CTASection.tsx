"use client";
import { Button } from "../ui/button";

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px] text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Build Something Amazing?
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let&apos;s discuss how we can help grow your business with custom
          software solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100"
          >
            Get a Free Quote
          </Button>
          <Button
            size="lg"
            variant="outline"
            className=" dark:text-white text-black border-white hover:bg-white/10"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
