import Image from 'next/image';

const Experience = () => {
  return (
    <section id="experience" className="bg-black text-light-gray py-12">
      <div className="container mx-auto px-6">
        {/* Section Heading */}
        <h2 className=" text-blue-500 text-4xl font-bold mb-8 ">
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
            <h3 className="text-white text-2xl font-semibold">
              Frontend Intern
            </h3>
            <p className="text-gray-200 italic">Code Alpha | 15 oct - Present</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-300">
              <li>Developed responsive web applications using React and Next.js.</li>
              <li>Buildin project using Mongodb and Firebase .</li>
            </ul>
          </div>
        </div>

        {/* Additional Experience Entries - Repeat structure for each role */}
        {/* Example Entry */}
        {/* <div className="flex flex-col md:flex-row gap-8 mb-10">
          <div className="flex-shrink-0">
            <Image 
              src="/images/previous-company-logo.png" 
              alt="Previous Company Logo"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          <div>
            <h3 className="text-gray-300 text-2xl font-semibold">
              Frontend Developer
            </h3>
            <p className="text-gray-400 italic">ABC Solutions | 2020 - 2022</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-300">
              <li>Collaborated on design and development of client-facing applications.</li>
              <li>Implemented UI components and handled API integration.</li>
              <li>Managed cross-browser compatibility and debugging.</li>
            </ul>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Experience;
