"use client";

import { useSectionInView } from "@/lib/hook";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section ref={ref} id="about">
      <main className="bg-[#1b4275] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center container">

          <div className="md:w-1/2 p-16">
            <Image
              src="/assets/breeze.jpg"
              alt="BR"
              quality={100}
              width={300}
              height={300}
              className="rounded border-2 border-[#91becf]"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-serif mb-4 text-yellow-50">About Me</h2>
            <p className="text-[#d1d9e3] mb-4">
              As a developer, I have always been passionate about creating
              elegant and effective solutions to complex problems. I have a
              strong foundation in software development, with a focus on web
              technologies such as HTML, CSS, and JavaScript. I enjoy working on
              both the front-end and back-end of applications, and I am always
              looking for ways to optimize performance, improve user experience,
              and ensure the highest level of code quality.
            </p>
            <p className="text-[#d1d9e3] mb-4">
              Throughout my career, I have worked on a wide range of projects,
              from simple static websites to complex enterprise-level
              applications. I am experienced in working with a variety of
              development tools and frameworks, including React, Angular,
              Vue.js, Node.js, and Laravel. I am always eager to learn and
              explore new technologies, and I am constantly seeking out
              opportunities to improve my skills and knowledge.
            </p>
          </div>
        </div>
      </main>
    </motion.section>
  );
}
