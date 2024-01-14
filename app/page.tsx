import About from "@/components/about";
import Contact from "@/components/contact";
import Intro from "@/components/Intro";
import Projects from "@/components/projects";
import Activitys from "@/components/activitys";

export default function Home() {
  return (
    <main>
      <Intro />
      <About />
      <Activitys />
      <Projects />
      <Contact />
    </main>
  );
}
