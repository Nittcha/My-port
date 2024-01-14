"use client";

import React from "react";
import Image from "next/image";
import { useSectionInView } from "@/lib/hook";

export default function Projects() {
  const { ref } = useSectionInView("Projects");

  return (
    <div
      ref={ref}
      id="projects"
      className="flex items-center justify-center min-h-screen container mx-auto"
    >
      <div className="grid gap-6 grid-cols-l md:grid-cols-2 lg:grid-cols-2">
        {/* CARD */}
        <div className="card">
          <div className="p-5 flex flex-col">
            <div className="ronnded-xl overflow-hidden">
              <Image
                src="/assets/road5.png"
                alt="Road"
                width={300}
                height={300}
              />
            </div>
            <h5 className="text-2xl md:text-3xl font-serif mt-3">Camp TTTA</h5>
            <p className="text-slate-500 text-lg mt-3">
              the text box to be centered on the screen, you should also ensure
              that its parent container allows for centering, which might mean
              that the parent needs to be a flex container as well. If this is
              not working as expected, there could be other styles or HTML
              structure issues affecting the layout. If you can provide more
              details about the surrounding HTML and CSS, I could offer a more
              tailored solution.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="p-5 flex flex-col">
            <div className="ronnded-xl overflow-hidden">
              <Image
                src="/assets/road5.png"
                alt="Road"
                width={300}
                height={300}
              />
            </div>
            <h5 className="text-2xl md:text-3xl font-serif mt-3">Camp TTTA</h5>
            <p className="text-slate-500 text-lg mt-3">
              the text box to be centered on the screen, you should also ensure
              that its parent container allows for centering, which might mean
              that the parent needs to be a flex container as well. If this is
              not working as expected, there could be other styles or HTML
              structure issues affecting the layout. If you can provide more
              details about the surrounding HTML and CSS, I could offer a more
              tailored solution.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="p-5 flex flex-col">
            <div className="ronnded-xl overflow-hidden">
              <Image
                src="/assets/road5.png"
                alt="Road"
                width={300}
                height={300}
              />
            </div>
            <h5 className="text-2xl md:text-3xl font-serif mt-3">Camp TTTA</h5>
            <p className="text-slate-500 text-lg mt-3">
              the text box to be centered on the screen, you should also ensure
              that its parent container allows for centering, which might mean
              that the parent needs to be a flex container as well. If this is
              not working as expected, there could be other styles or HTML
              structure issues affecting the layout. If you can provide more
              details about the surrounding HTML and CSS, I could offer a more
              tailored solution.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="p-5 flex flex-col">
            <div className="ronnded-xl overflow-hidden">
              <Image
                src="/assets/road5.png"
                alt="Road"
                width={300}
                height={300}
              />
            </div>
            <h5 className="text-2xl md:text-3xl font-serif mt-3">Camp TTTA</h5>
            <p className="text-slate-500 text-lg mt-3">
              the text box to be centered on the screen, you should also ensure
              that its parent container allows for centering, which might mean
              that the parent needs to be a flex container as well. If this is
              not working as expected, there could be other styles or HTML
              structure issues affecting the layout. If you can provide more
              details about the surrounding HTML and CSS, I could offer a more
              tailored solution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
