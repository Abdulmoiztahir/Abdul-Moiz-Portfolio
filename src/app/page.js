import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Projects from "@/components/project";
import Skills from "@/components/skills";

export default function Home() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Abdul Moiz',
    url: 'https://abdulmoizdev.me',
    image: 'https://abdulmoizdev.me/images/profile.jpg',
    jobTitle: 'MERN Stack Developer',
    sameAs: [
      'https://www.linkedin.com/in/abdull-moiz-b27438313/',
      'https://github.com/Abdulmoiztahir',
    ],
    knowsAbout: [
      'Next.js',
      'React',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Tailwind CSS',
    ],
  };

  return (
    <div className="relative overflow-x-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-cyan-300/[0.12] blur-[120px]" />
        <div className="absolute right-[-7rem] top-[20%] h-80 w-80 rounded-full bg-indigo-300/[0.12] blur-[130px]" />
        <div className="absolute bottom-24 left-1/3 h-72 w-72 rounded-full bg-sky-300/[0.1] blur-[120px]" />
        <div className="absolute left-[14%] top-[46%] h-64 w-64 rounded-full bg-blue-200/[0.08] blur-[110px]" />
        <div className="absolute right-[16%] bottom-[12%] h-72 w-72 rounded-full bg-cyan-200/[0.08] blur-[120px]" />
      </div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
