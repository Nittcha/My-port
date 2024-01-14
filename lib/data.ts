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
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const activityData = [
  {
    title: "Majukcloud",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    imageUrl: majukImg,
  },
  {
    title: "The Tiger Team Acadamy Camp",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    imageUrl: campImg,
  },
  {
    title: "TINT",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    imageUrl: nucleusImg,
  },
  {
    title: "งานสัมนา",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    imageUrl: origginImg,
  },
  {
    title: "Robotphoenix",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    imageUrl: chinaImg,
  },
  {
    title: "Electron microscope",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    imageUrl: microImg,
  },
] as const;
