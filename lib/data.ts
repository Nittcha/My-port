import majukImg from "@/public/assets/majuk.jpg";
import campImg from "@/public/assets/camp.jpg";
import nucleusImg from "@/public/assets/nucleus.jpg";
import origginImg from "@/public/assets/origgin.jpg";
import chinaImg from "@/public/assets/china.jpg";
import microImg from "@/public/assets/micro.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Activity",
    hash: "#activity",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
] as const;

export const activityData = [
  {
    title: "Majukcloud",
    description:
      "ร่วมจัดงาน tech มีแนวคิดของ Cloud Native ที่สามารถไปประยุกต์ใช้กับอะไรก็ได้ เพราะ Cloud Native ไม่ใช่ แค่ Cloud แต่เป็นยุคสมัย สถานที่จัด Class Cafe สาขาวัดบูรฬ์ จังหวัดนครราชสีมา",
    imageUrl: majukImg,
  },
  {
    title: "The Tiger Team Acadamy Camp",
    description:
      "จัด camp เกี่ยวกับ Climate change 7 วัน 6 คืน เพื่อปลุกพลัง 'Innopreneurship' ในตัวคุณ ผ่านการสร้างสรรค์นวัตกรรมที่ไม่เพียงแค่ท้าทายแต่ยังมีประโยชน์แก่สังคม",
    imageUrl: campImg,
  },
  {
    title: "TINT",
    description:
      "สถานบันเทคโนโลยีนิวเคลียร์แห่งชาติ ดูเครื่อง tokamak ได้รับมอบจาก สถาบันพลาสมาฟิสิกส์ ประเทศจีน (ASIPP)",
    imageUrl: nucleusImg,
  },
  {
    title: "งานสัมนา",
    description:
      "งานสัมนา การทำ startups จากบริษัทลงทุนในสิงคโปร์ (venture capital) ที่เริ่มจากงานวิจัยผลักดันให้ออกมาเป็นธุระกิจ",
    imageUrl: origginImg,
  },
  {
    title: "Robotphoenix",
    description:
      "ร่วมพูดคุยกับ บริษัทหุ่นยนต์ในประเทศจีนที่มาเยี่ยมชมหุ่นยนต์ที่มหาวิทยาลัยเทคโนโลยีสุรนารี (SUT)",
    imageUrl: chinaImg,
  },
  {
    title: "Electron microscope",
    description:
      "ร่วมพูดคุยกับ Dr. Chiou, Wen-An NanoCenter University of Maryland",
    imageUrl: microImg,
  },
] as const;
