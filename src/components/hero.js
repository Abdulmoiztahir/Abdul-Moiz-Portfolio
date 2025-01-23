"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center  bg-gradient-to-b from-black to-gray-900 text-white px-6">
            <div className="text-center max-w-3xl my-5">
                <motion.h1  initial={{ scale: 1.1 }} animate={{ scale: [1.1, 0.95, 1.1] }} // Loop the scale animation
      transition={{
        duration: 2, // duration for one cycle of the animation
        repeat: Infinity, // This will make the animation loop indefinitely
        repeatType: 'loop', // You can also use 'reverse' if you want it to reverse direction
        ease: 'easeInOut' // Add easing to make the animation smooth
      }} className={" text-2xl  md:text-5xl lg:text-6xl font-bold text-blue-500 leading-tight"} >
                {/* <h1 className={" text-4xl md:text-5xl lg:text-6xl font-bold text-blue-500 leading-tight"}> */}
                    Hi&#44; I&apos;m Abdul <br></br> Moiz Tahir
                {/* </h1> */}
                </motion.h1>
                <h2 className="text-xl md:text-2xl lg:text-3xl mt-4 text-gray-300 font-medium">
                    A Passionate Web Developer
                </h2>
                <p className="text-gray-400 mt-6 text-lg md:text-xl leading-relaxed">
                    I specialize in building high-quality web applications using HTML&#44; CSS&#44; JavaScript&#44; Tailwind CSS&#44; Firebase&#44; MongoDB&#44; Next.js&#44; React.js&#44; and Bootstrap.
                </p>
                <div className="mt-8">
                    <a href="#contact" className="px-8 py-3 text-lg font-medium bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition">
                        Contact Me
                    </a>
                </div>
            </div>
            <div className="mt-10 relative w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 mb-10">
                <Image
                    src={"/images/profile.jpg"}  // Update this path to your actual image path
                    alt="Abdul Moiz Tahir"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-full border-4 border-blue-500"
                    priority
                />
            </div>
        </section >
    );
}
