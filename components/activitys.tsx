"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { activityData } from "@/lib/data";
import Activity from "./activity";
import { useSectionInView } from "@/lib/hook";

export default function Activitys() {
  const { ref } = useSectionInView("Activity", 0.5);

  return (
    <section ref={ref} id="activity" className="scroll-mt-28 mb-28">
      <SectionHeading>My Activity</SectionHeading>
      {/* ROUTE */}
      <div>
        {activityData.map((project, index) => (
          <React.Fragment key={index}>
            <Activity {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
