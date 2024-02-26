"use client";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="">
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 ">
        <div className="">{/* BIOGRAPHY CONTAINER */}
      BIOGRAPHY
        </div>
        <div className="">{/* KILLS CONTAINER */}
        SKILLS</div>
        <div className="">{/* EXPERIENCE */}
        EXPERIENCE</div>
        </div>
        {/* Svg container */}
        <div className="hidden"></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
