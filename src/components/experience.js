import Image from 'next/image';

const Experience = () => {
  return (
    <section id="experience" className="bg-background text-foreground py-12">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className=" text-primary text-4xl font-bold mb-8 ">
          Experience
        </h2>

        {/* Experience Entry */}
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          {/* Logo / Company Image */}
          <div className="flex-shrink-0">
            <Image
              src="/images/codeaplha.png"
              alt="Company Logo"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          {/* Role and Details */}
          <div>
            <h3 className="text-foreground text-2xl font-semibold">
              Frontend Intern
            </h3>
            <p className="text-muted-foreground italic">Code Alpha | 15 oct - Completed</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-muted-foreground">
              <li>Developed responsive web applications using React and Next.js.</li>
              <li>Buildin project using Mongodb and Firebase .</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        {/* Experience Entry */}
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          {/* Logo / Company Image */}
          <div className="flex-shrink-0">
            <Image
              src="/images/clustervalley.png"
              alt="Company Logo"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          {/* Role and Details */}
          <div>
            <h3 className="text-foreground text-2xl font-semibold">
              Web Developer Intern
            </h3>
            <p className="text-muted-foreground italic">Cluster Valley | April 2025 - Completed</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-muted-foreground">
              <li>Developed responsive web applications using React and Next.js.</li>
              <li>Buildin project using Mongodb and Firebase .</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        {/* Experience Entry */}
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          {/* Logo / Company Image */}
          <div className="flex-shrink-0">
            <Image
              src="/images/clustervalley.png"
              alt="Company Logo"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          {/* Role and Details */}
          <div>
            <h3 className="text-foreground text-2xl font-semibold">
              Junior Web Developer
            </h3>
            <p className="text-muted-foreground italic">June 2025 - Dec 2025</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-muted-foreground">
              <li>Developed responsive web applications using React and Next.js.</li>
              <li>Buildin project using Mongodb and Firebase .</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Experience;
