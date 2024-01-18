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
      {/* CARD */}
      <div className="grid gap-6 grid-cols-l md:grid-cols-2 lg:grid-cols-2">
        <div className="card">
          <div className="p-5 flex flex-col">
            <div className="ronnded-xl overflow-hidden">
              <Image
                src="/assets/gov.jpg"
                alt="Road"
                width={300}
                height={300}
              />
            </div>
            <h5 className="text-2xl md:text-3xl font-serif mt-3">PromptDov</h5>
            <p className="text-slate-500 text-lg mt-3">
             website สร้างเอกสารทางการ ที่ช่วยคุณลดเวลาและความยุ่งยากในการเขียนเอกสารลง โดยใช้ AI generate ข้อความ
            </p>
          </div>
        </div>

        <div className="card">
          <div className="p-5 flex flex-col">
            <div className="ronnded-xl overflow-hidden">
              <Image
                src="/assets/pu.jpg"
                alt="Road"
                width={300}
                height={300}
              />
            </div>
            <h5 className="text-2xl md:text-3xl font-serif mt-3">Renewable Energy Prices</h5>
            <p className="text-slate-500 text-lg mt-3">
             ทำนายราคาพลังงานหมุนเวียนโดยใช้ model machine learning
            </p>
          </div>
        </div>

        <div className="card">
          <div className="p-5 flex flex-col">
            <div className="ronnded-xl overflow-hidden">
              <Image
                src="/assets/object.png"
                alt="Road"
                width={300}
                height={300}
              />
            </div>
            <h5 className="text-2xl md:text-3xl font-serif mt-3">Detect Depression</h5>
            <p className="text-slate-500 text-lg mt-3">
             ตรวจจับใบหน้าเพื่อแสดงผลเบื้องต้นในการตรวจโรคซึมเศร้า ใช้ Object detection
            </p>
          </div>
        </div>

        <div className="card">
          <div className="p-5 flex flex-col">
            <div className="ronnded-xl overflow-hidden">
              <Image
                src="/assets/mis.jpg"
                alt="Road"
                width={300}
                height={300}
              />
            </div>
            <h5 className="text-2xl md:text-3xl font-serif mt-3">EFF Prediction</h5>
            <p className="text-slate-500 text-lg mt-3">
             ตรวจวัดปริมาณน้ำตาลในอ้อย และ ประสิทธิภาพการทำงานของคนในโรงงาน โดยใช้ model machine learning
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
