"use client";

import { useSectionInView } from "@/lib/hook";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";
import { useState } from "react";

export default function About() {
  const { ref } = useSectionInView("About");
  const [name, setName] = useState("Nittcha Mongkolsaen");
  const [age, setAge] = useState("17");
  const [nationality, setNationality] = useState("Thai");
  const [address, setAddress] = useState("thailand");
  const [phone, setPhone] = useState("095 827 7038");
  const [email, setEmail] = useState("nmongkolsaen@gmail.com");

  return (
    <motion.section ref={ref} id="about">
      <main className="bg-[#1b4275] mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-center container">
          {/* IMAG */}
          <div className="md:w-1/2 p-16">
            <Image
              src="/assets/Breeze.jpg"
              alt="BR"
              quality={100}
              width={300}
              height={300}
              className="rounded border-2 border-[#91becf]"
            />
          </div>

          {/* INFRO */}
          <div className="md:w-1/2">
            <h2 className="text-5xl font-serif mb-4 text-yellow-50">
              About Me
            </h2>
            <div className="text-[#d1d9e3] grid grid-cols-2 gap-4 container mx-auto p-4">
              <p>
                <strong>Name:</strong> {name}
              </p>
              <p>
                <strong>Age:</strong> {age}
              </p>
              <p>
                <strong>Nationality:</strong> {nationality}
              </p>
              <p>
                <strong>Address:</strong> {address}
              </p>
              <p>
                <strong>Phone:</strong> {phone}
              </p>
              <p>
                <strong>Email:</strong> {email}
              </p>
            </div>
            <p className="text-[#d1d9e3] mb-4 pb-8 pt-4">
              ในยุคที่เทคโนโลยีก้าวหน้าอย่างไม่หยุดยั้งเพื่อแก้ปัญหาและพัฒนาโลกให้ไปไกลกว่าที่เป็นอยู่
              ฉันมีความสนใจในสาขาของวิทยาศาสตร์ข้อมูลและปัญญาประดิษฐ์
              (Artificial Intelligence, AI)
              และได้มีโอกาสที่ศึกษาและทำงานในด้านนี้ ในอนาคตอันใกล้ฉันเชื่อว่า
              AI จะเป็นหนึ่งในตัวปฏิวัติเทคโนโลยีที่สำคัญที่สุด
              ที่จะนำพาการเปลี่ยนแปลงที่ยิ่งใหญ่และสร้างผลกระทบอย่างมากต่อวิถีชีวิตและการทำงานของเรา
            </p>
          </div>
        </div>
      </main>
    </motion.section>
  );
}
