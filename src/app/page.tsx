export const dynamic = "force-dynamic";
import {
  Navigation,
  Hero,
  About,
  Experience,
  Projects,
  Skills,
  Publication,
  Education,
  Certifications,
  ResumeDownload,
  Contact,
  Footer
} from "@/components";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Publication />
      <Education />
      <Certifications />
      <ResumeDownload />
      <Contact />
      <Footer />
    </main>
  );
}