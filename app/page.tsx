import About from "@/components/about";
import Contact from "@/components/contact";
import Intro from "@/components/Intro";
import Projects from "@/components/project";
import Activity from "@/components/activity";


export default function Home() {
  return (
    <main >
      <Intro />
      <About />
      <Activity />
      <Projects />
      <Contact />
    </main>
  );
}