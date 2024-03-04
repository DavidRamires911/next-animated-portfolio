"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className=" h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
        {/* Image Container mt-[-1%] */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative mt-[-1%]  ">
          <Image
            src="/hero.png"
            alt="hero"
            className="object-contain "
            fill
            priority
          />
        </div>
        {/* text container*/}
        <div className="h-1/2 lg:h-full lg:w-1/2  flex flex-col gap-8 items-center justify-center">
          {/* Title */}
          <h1 className="text-4xl md:text-6xl  font-bold">
            Shaping the Future of Digital Interactions
          </h1>
          {/* desc */}
          <p className="md:text-xl">
            As a highly motivated fullstack web developer, I bring over a year
            of freelance experience and dedicated constant formation in both
            front-end and back-end technologies. With strong resilience and
            diverse background  i thrive in collaborative settings and adapt
            swiftly to new challenges.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="hover:bg-gray-800 hover:scale-105 p-4 rounded-lg ring-1 ring-black bg-black text-white">
              <Link href="/portfolio">View My Work</Link>
            </button>
            <button className="hover:bg-gray-100 hover:scale-105 p-4 rounded-lg ring-1 ring-black ">
              <Link href="/contact">Contact Me</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
