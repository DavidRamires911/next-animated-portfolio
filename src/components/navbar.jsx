"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./navLink";

const links = [
  { url: "/", name: "Home" },
  { url: "/about", name: "About" },
  { url: "/portfolio", name: "Portfolio" },
  { url: "/contact", name: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
          <Image src="/instagram.png" alt="" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="#">
          <Image src="/github.png" alt="" width={24} height={24} />
        </Link>
      </div>
      {/* Responsive Menu */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative "
          onClick={() => setOpen((prev) => !prev)}
        >
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
          <div className="w-10 h-1 bg-white rounded"></div>
        </button>
        {/* Menu LIST */}
        {open && (
          <div
            className="absolute top-0 left-0 w-screen h-screen bg-black
         text-white flex flex-col items-center justify-center gap-8 text-4xl"
          >
            {links.map((link) => (
              <Link href={link.url} key={link.name}>
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
