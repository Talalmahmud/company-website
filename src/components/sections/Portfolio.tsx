"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import Image from "next/image";
import { Button } from "../ui/button";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const projects = [
  {
    title: "E-Commerce App",
    desc: "Mobile shopping with AR product preview",
    img: "/healthcare.jpg",
    tags: ["React Native", "Node.js", "MongoDB"],
  },
  {
    title: "Healthcare Dashboard",
    desc: "Real-time patient monitoring system",
    img: "/healthcare.jpg",
    tags: ["Next.js", "Tailwind", "Firebase"],
  },
  {
    title: "Food Delivery Service",
    desc: "On-demand food delivery platform",
    img: "/healthcare.jpg",
    tags: ["Flutter", "Laravel", "MySQL"],
  },
  {
    title: "Food Service",
    desc: "On-demand food delivery platform",
    img: "/healthcare.jpg",
    tags: ["Flutter", "Laravel", "MySQL"],
  },
  {
    title: "Food Delivery ",
    desc: "On-demand food delivery platform",
    img: "/healthcare.jpg",
    tags: ["Flutter", "Laravel", "MySQL"],
  },
];

export function Portfolio() {
  const middleIndex = Math.floor(projects.length / 2);

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-[1200px]">
        <h2 className="text-4xl font-bold text-center mb-16">Our Projects</h2>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          initialSlide={middleIndex}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="portfolio-slider !pb-12"
        >
          {projects.map((project, i) => (
            <SwiperSlide
              key={i}
              className="max-w-md rounded-xl overflow-hidden shadow-lg bg-white dark:bg-gray-800"
            >
              <div className="relative h-64 w-full">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={i < 2} // Only prioritize first 2 images
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="outline" className="w-full">
                  View Case Study
                </Button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
