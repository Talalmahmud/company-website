"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[600px]">
        <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>

        <form className="space-y-6 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input placeholder="Your Name" />
            <Input placeholder="Email" type="email" />
          </div>
          <Input placeholder="Subject" />
          <Textarea placeholder="Your Message" rows={5} />
          <Button type="submit" className="w-full md:w-auto">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
}
