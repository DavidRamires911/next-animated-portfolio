"use client";
import Brain from "@/components/brain";
import { SkillScroll } from "@/components/skillScroll";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const AboutPage = () => {
  const containerRef = useRef();

  // scroll in this case is a value that goes from 0 to 1 as the user scrolls down the page. It is a value that represents the scroll position of the container.
  const { scrollYProgress } = useScroll({ container: containerRef });
  // console.log(scrollYProgress);
  //useInView is a hook that returns a boolean value that tells us if the element is in view or not.
  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });
  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div
        className="h-full  overflow-scroll lg:flex custom-scrollbar"
        ref={containerRef}
      >
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            <Image
              src="/foto-update.jpg"
              alt=""
              width={112}
              height={112}
              className="w-30 h-28 rounded-full object-cover"
            />
            {/* TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* DESCRIPTION */}
            <p className="text-sm md:text-lg">
              David Correia: A Hotel Management graduate 
            but since young with a fascination for
              both hardware and software, leading me to pursue further education
              in full stack development through bootcamp courses at Ironhack and Udemy.
              From managing inventory and F&B in hospitality to hands-on roles at the
              airport, I've cultivated resilience and adaptability along the
              way. Outside of work, I'm a gym enthusiast who relishes outdoor
              adventures with my loyal companion. In the workplace, I thrive on
              fostering a positive atmosphere, believing in the transformative
              power of good vibes. My innate curiosity keeps me abreast of the
              latest tech trends, enabling me to quickly grasp new tools and
              technologies. With a diverse background, strong interpersonal
              skills, and unwavering passion for technology, I bring a unique
              perspective to any team.
            </p>

            {/* SIGNATURE SVG */}
            <div className="self-end">
              <svg
                width="185"
                height="77"
                viewBox="0 0 390 150"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M93 53C102.096 53 97.4704 88.9308 95.3333 93.8889C92.8632 99.6195 89.3352 104.108 82.7778 104C77.9552 103.921 76.1012 99.6769 76 95.2222C75.8884 90.3121 81.4756 97.4755 82.5556 98.5C89.2615 104.862 96.5676 107 105.667 107C137.893 107 170.24 72.7356 159.5 39.6667C149.323 8.33369 89.8612 -10.2247 64.8889 12.6667C52.9963 23.5682 50.6049 43.1326 57 57.5556C64.308 74.0375 80.7185 76.6028 96.7778 76.9445C98.0658 76.9719 114 78.1063 114 76C114 74.3973 108.81 74.8538 107.778 75.2222C99.8447 78.0555 101 93.4833 101 100C101 107.816 108.058 101.969 111.444 98.3889C115.18 94.4397 118.856 88.6714 119.778 83.2222C120.279 80.2634 120.13 71.2241 120 74.2222C119.79 79.0444 112.71 104 119.5 104C125.466 104 126.823 93.8349 127 89.2222C127.102 86.5677 126.789 79.4095 129.722 78.0556C136.626 74.8693 137 75.912 137 83.5C137 86.7587 134.88 102.445 139 103.778C147.734 106.604 153.21 95.1466 155.389 88.6111C155.936 86.9688 157.243 75.1319 155 75C151.797 74.8116 148.845 75.3484 149 79.2222C149.12 82.2318 159.053 81.7099 161.056 80.3333C163.401 78.7211 165.478 75.1358 166.889 72.6667C168.676 69.5396 164.557 79.4849 163.556 82.9445C162.832 85.4439 157.955 102.807 162.778 103C170.201 103.297 172.35 98.4749 177 93.2222C182.615 86.8792 191 83.744 191 74.5556C191 68.8997 184.656 68.5808 180.222 71.2222C172.95 75.5546 165.6 92.5675 169.167 100.889C171.622 106.618 181.293 96.3673 182.5 94.7778C190.375 84.4055 192.855 71.6899 195.944 59.3333C198.06 50.8722 200.729 42.612 203.778 34.4445C206.086 28.2612 206.028 30.2886 204 35.4445C200.526 44.2785 198.4 53.1371 195.778 62.2222C193.079 71.5724 190.102 80.0662 190 89.8889C189.965 93.2032 189.131 98.091 190.111 101.278C190.534 102.652 194.804 102 196 102C201.175 102 201.966 100.494 206.111 97.5C218.632 88.4573 230.453 76.7751 241.111 65.6667C249.046 57.3962 257.376 49.4562 264.222 40.2222C269.051 33.7089 269 27.8184 269 20.0556C269 16.4446 269.906 11.4787 268.778 8.00001C267.381 3.69341 258.548 4.9713 255.333 5.00001C230.385 5.22276 219.106 25.6788 210.222 46.3333C205.488 57.3405 200.442 68.4865 197.056 80C194.697 88.0175 190.57 96.8435 191.056 105.333C191.396 111.293 202.882 110.048 207.222 110C215.862 109.904 224.109 106.156 232 103C237.708 100.717 243.724 98.6688 249 95.4445C251.402 93.9765 254.564 85.575 249.889 85.0556C242.135 84.1941 235.211 83.8524 231 91.2222C227.664 97.0598 224.645 107 233.611 107C237.398 107 242.482 108.094 245 104.556C248.282 99.9429 249.881 94.2651 250 88.6667C250.062 85.7722 249.41 83.1895 246 83C244.834 82.9352 239.889 82.3114 239.222 83.4445C235.435 89.8829 249.445 88.6386 251.944 86.8889C256.303 83.8382 253.212 75.9891 260.444 78.0556C264.404 79.187 253.666 97.1168 253.222 99.7778C252.622 103.379 253.05 105.93 257.222 106C264.147 106.115 268.646 102.444 271 96C272.382 92.2174 275.414 85.161 273.389 81.1111C271.825 77.9825 269.538 79 275.389 79C281.021 79 276.794 84.5703 275.444 87.5556C273.773 91.2522 272.896 98.0205 274.222 102C275.443 105.664 283.98 103.877 286.5 103.333C292.724 101.991 299.788 96.2937 301.389 89.8889C303.941 79.6823 294.745 71.3671 290.111 83.9445C287.247 91.7189 287.986 106.997 300.222 101.111C305.572 98.5379 312.478 90.0527 314.556 84.4445C316.659 78.7655 314.733 83.7464 314 87C312.994 91.4642 312.64 96.2041 313.056 100.778C313.481 105.458 324.72 102.398 327 101.167C332.823 98.0222 337 92.2029 337 85.5556C337 79.2292 337 88.1366 337 89.8889C337 102.205 348.013 95.5325 346.778 85.7778C346.043 79.9727 341.872 78.1111 336.444 78.1111C328.277 78.1111 324.356 84.1916 322.167 91.4445C320.939 95.5114 319.894 101.957 325.222 103.556C332.011 105.592 334.119 98.1977 335.778 93.2222C336.3 91.6552 338 82.2835 338 84.8889C338 89.4181 337.742 94.0328 338 98.5556C338.3 103.811 357.398 91.7571 359.944 90.6111C370.117 86.0333 382.547 99.88 387.278 106.889C392.878 115.185 384.44 118.345 377.111 120.778C342.663 132.212 304.035 129.477 268.333 130.222C206.151 131.52 143.872 138.612 83 151.444C60.2672 156.237 37.415 161.83 15.3333 169.111C9.89294 170.905 5.59334 172.407 2 176"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <SkillScroll />
          </div>

          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="skills">Javascript</div>
              <div className="skills">React</div>
              <div className="skills">Css</div>
              <div className="skills">Tailwind</div>
              <div className="skills">Html</div>
              <div className="skills">Styled Components</div>
              <div className="skills">Framer Motion</div>
              <div className="skills">Angular</div>
              <div className="skills">Redux</div>
              <div className="skills">React Query</div>
              <div className="skills">NextJS</div>
              <div className="skills">ExpressJS</div>
              <div className="skills">NodeJS</div>
              <div className="skills">SupaBase</div>
              <div className="skills">MongoDB</div>
              <div className="skills">Rest API</div>
              <div className="skills">Git/Github</div>
              <div className="skills">Deploy</div>
              <div className="skills">Domain management</div>
              <div className="skills">Typescript</div>
              <div className="skills">Auth 2.0</div>
              <div className="skills">Postman / Tunder Client</div>
            </motion.div>

            <SkillScroll />
          </div>

          {/* SKILL SCROLL SVG */}

          {/* EXPERIENCE */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* TITLE EXPERIENCE */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.div>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Full Stack Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="md:p-3 text-[11px] md:text-sm italic">
                    Experience through freelancing, actively searching online
                    for potential clients in need of websites. Interacting with
                    clients from various sectors allowed me to enhance my
                    communication skills and expand my portfolio.
                  </div>
                  {/* JOB DATE */}
                  <div className="md:p-3 text-red-400 text-[11px] md:text-sm font-semibold">
                    2023 - Present
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Freelancer
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>

              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Rent Service Agent
                  </div>
                  {/* JOB DESC */}
                  <div className="md:p-3 text-[11px] md:text-sm italic">
                    Managed reservations, guest arrivals and departures, explain
                    van systems and contractual rules. Conducted guest
                    registrations, monitored inventory, processed payments, and
                    handled complaints and emergencies.
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-[11px] md:text-sm font-semibold">
                    2019 - 2023{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Soul Campers
                  </div>
                </div>
              </div>

              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48  ">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Hotel Storeroom Manager
                  </div>
                  {/* JOB DESC */}
                  <div className="md:p-3 text-[11px] md:text-sm italic">
                    Managed cost distribution for invoiced items across
                    departments. Proficient in utilizing PMS systems for F&B
                    control and Storeroom management, demonstrated through Excel
                    reporting on internal consumption, waste reduction, and
                    revenue management
                  </div>
                  {/* JOB DATE */}
                  <div className="md:p-3 text-red-400 text-[11px] md:text-sm font-semibold">
                    2018 - 2019{" "}
                  </div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Hotel Ozadi
                  </div>
                </div>

                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>

              <div className="flex justify-between h-48">
                <div className="w-1/3 "></div>

                <div className="w-1/6 flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4  ring-red-400 bg-white -left-2 "></div>

                    {/* <div className="absolute w-5 h-5 rounded-full ring-4  ring-red-400 bg-white -left-2 top-[calc(100%-1rem)]"></div> */}
                  </div>
                </div>

                <div className="w-1/3 ">
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Ground handling Operator
                  </div>
                  <div className="md:p-3 text-[11px] md:text-sm italic">
                    Perform safe loading and unloading and transportation tasks
                    baggage, cargo to and from aeroplanes. Drive vehicles and
                    trailer material and position aircraft support
                    equipment.Reception of passengers.
                  </div>
                  <div className="md:p-3 text-red-400 text-[11px] md:text-sm font-semibold">
                    2012 - 2017{" "}
                  </div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Ryanair
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Svg container */}
        {/*  sticky is for the svg to stick to the right side of the container*/}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
