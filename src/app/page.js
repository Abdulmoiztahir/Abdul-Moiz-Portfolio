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
        {/* Primary large cyan blob with inner light gradient */}
        <div className="absolute -left-28 top-16 h-96 w-96 rounded-full -z-10">
          <div className="absolute inset-0 rounded-full bg-cyan-300/[0.06] blur-[160px]" />
          <div className="absolute inset-8 rounded-full mix-blend-screen opacity-60" style={{ background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.22), rgba(115,232,255,0.08) 35%, transparent 60%)', filter: 'blur(20px)'}} />
        </div>

        {/* Indigo mid blob */}
        <div className="absolute right-[-8rem] top-[18%] h-96 w-96 rounded-full -z-10">
          <div className="absolute inset-0 rounded-full bg-indigo-300/[0.05] blur-[170px]" />
          <div className="absolute inset-10 rounded-full mix-blend-screen opacity-55" style={{ background: 'radial-gradient(circle at 40% 40%, rgba(255,255,255,0.18), rgba(164,148,255,0.06) 36%, transparent 62%)', filter: 'blur(22px)'}} />
        </div>

        {/* Sky bottom blob */}
        <div className="absolute bottom-20 left-1/3 h-88 w-88 rounded-full -z-10">
          <div className="absolute inset-0 rounded-full bg-sky-300/[0.05] blur-[150px]" />
          <div className="absolute inset-8 rounded-full mix-blend-screen opacity-5" style={{ background: 'radial-gradient(circle at 50% 40%, rgba(255,255,255,0.12), rgba(135,206,250,0.04) 34%, transparent 60%)', filter: 'blur(18px)'}} />
        </div>

        {/* Small blue accent blob */}
        <div className="absolute left-[14%] top-[46%] h-72 w-72 rounded-full -z-10">
          <div className="absolute inset-0 rounded-full bg-blue-200/[0.04] blur-[140px]" />
          <div className="absolute inset-6 rounded-full mix-blend-screen opacity-60" style={{ background: 'radial-gradient(circle at 35% 35%, rgba(255,255,255,0.16), rgba(173,216,230,0.06) 36%, transparent 60%)', filter: 'blur(16px)'}} />
        </div>

        {/* Right cyan accent blob */}
        <div className="absolute right-[16%] bottom-[12%] h-80 w-80 rounded-full -z-10">
          <div className="absolute inset-0 rounded-full bg-cyan-200/[0.04] blur-[150px]" />
          <div className="absolute inset-8 rounded-full mix-blend-screen opacity-6" style={{ background: 'radial-gradient(circle at 40% 30%, rgba(255,255,255,0.14), rgba(173,255,238,0.05) 34%, transparent 60%)', filter: 'blur(18px)'}} />
        </div>

        {/* Additional subtle background blobs to enhance depth */}
        <div className="absolute -right-40 top-48 h-64 w-64 rounded-full -z-20">
          <div className="absolute inset-0 rounded-full bg-violet-300/[0.03] blur-[180px]" />
        </div>
        <div className="absolute left-10 bottom-40 h-60 w-60 rounded-full -z-20">
          <div className="absolute inset-0 rounded-full bg-emerald-300/[0.03] blur-[170px]" />
        </div>
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
