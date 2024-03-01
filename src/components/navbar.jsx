"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./navLink";
import { motion } from "framer-motion";

const links = [
  { url: "/", name: "Home" },
  { url: "/about", name: "About" },
  { url: "/portfolio", name: "Portfolio" },
  { url: "/contact", name: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Motion for the menu button
  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: "rgb(255,255,255)",
    },
  };
  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
      
    },
  };
  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: "rgb(255,255,255)",
    },
  };

  // Motion for the menu list, staggerChildren is used to animate the children of the list
  const listVariants={
    closed:{
     x:"100vw",

    },
    opened:{
     
      x:0,
      transition:{
        when:"beforeChildren",
        staggerChildren:0.2,
      }
    }

  } 
  // Motion for the menu list items
  const listItemVariants={
    closed:{
      x:-10,
      opacity:0
    },
    opened:{
      x:0,
      opacity:1
    }
  }

  return (
    <div className=" h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl ">
      {/* LINKS */}
      <div className="hidden md:flex gap-4 w-1/3 justify-center">
        {" "}
        {links.map((link) => (
          <NavLink link={link} key={link.name} />
        ))}{" "}
      </div>
      {/* LOGO */}
      <div className="md:hidden lg:flex xl:w-1/3 items-center xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span className="text-white mr-1">David</span>
          <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center ">
            .dev
          </span>
        </Link>
      </div>
      {/* SOCIAL ICONS */}
      <div className="hidden md:flex gap-4 items-center justify-center w-1/3">
        <Link href="#">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
     
        <Link href="#">
          <Image src="/linkedin.png" alt="" width={24} height={24} />
        </Link>
       
      </div>
      {/* Responsive Menu mobile */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative "
          onClick={() => setOpen((prev) => !prev)}
        >
          <motion.div
            variants={topVariants} animate= {open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants} animate= {open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants} animate= {open ? "opened" : "closed"}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* Menu LIST */}
        {open && (
          <motion.div
          variants={listVariants} initial="closed" animate={"opened"}
            className="absolute top-0 left-0 w-screen h-screen bg-black
         text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {links.map((link) => (
              <motion.div variants={listItemVariants} key={link.name}>
              <Link href={link.url} >
                {link.name}
              </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
