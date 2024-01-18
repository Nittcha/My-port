"use client";

import React from "react";
import Image from "next/image";
import { motion, useTransform, useViewportScroll } from "framer-motion";
import { useSectionInView } from "@/lib/hook";

const intro = () => {
  const { scrollY } = useViewportScroll();

  const bgY = useTransform(scrollY, [0, 1000], [0, -500]);
  const moonX = useTransform(scrollY, [0, 1000], [0, -150]);
  const mountainY = useTransform(scrollY, [0, 1200], [-50, 0]);
  const roadY = useTransform(scrollY, [0, 1000], [0, 150]);
  const textY = useTransform(scrollY, [0, 1000], [0, 900]);

  const { ref } = useSectionInView("Home", 0.5);

  return (
    <div ref={ref} id="home" className=" scroll-mt-[100rem]">
      <section className="relative w-full h-screen overflow-hidden flex justify-center items-center">
       
        <motion.div
          style={{ y: bgY }}
          className="absolute top-0 left-0 h-full w-full object-cover pointer-events-none"
        >
          <Image
            src="/assets/bg.jpg"
            alt="Background"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>

        <motion.div
          style={{ x: moonX }}
          className="absolute top-0 left-0 h-full w-full object-cover pointer-events-none"
        >
          <Image
            src="/assets/moon.png"
            alt="Moon"
            layout="fill"
            objectFit="cover"

          />
        </motion.div>

        <motion.div
          style={{ y: mountainY }}
          className="absolute top-0 left-0 h-full w-full object-cover pointer-events-none"
        >
          <Image
            src="/assets/mountain5.png"
            alt="Mountain"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>

        <motion.p
          style={{ y: textY }}
          className="relative text-white font-serif text-7xl md:text-8xl lg:text-9xl/10"
        >
          My journey
        </motion.p>

        <motion.div
          style={{ y: roadY }}
          className="absolute top-0 left-0 h-full w-full object-cover pointer-events-none"
        >
          <Image
            src="/assets/road5.png"
            alt="Road"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      </section>
    </div>
  );
};

export default intro;
