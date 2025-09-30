import { useEffect, useState } from "react";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Summary from "./components/Summary";
import Skills from "./components/Skills";
import Timeline from "./components/Timeline";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function App() {
  const [section, setSection] = useState("summary");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setSection(e.target.id));
      },
      { threshold: 0.4 }
    );
    ["summary", "skills", "experience", "education", "projects"].forEach((id) =>
      observer.observe(document.getElementById(id))
    );
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex">
      <Nav active={section} />
      <main className="flex-1 lg:ml-80">
        <Header />
        <Summary />
        <Skills />
        <Timeline />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}