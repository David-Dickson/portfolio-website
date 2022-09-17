import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            / / I am not your average developer
          </p>
          <p className="py-2 text-gray-600">
            I have spent the last 15 years in the U.S. Navy with the first 11
            working on and repairing various aircraft electronics. I have always
            had a knack for technology and working with computers so I
            transitioned into the IT field in 2017. Having first starting out
            performing helpdesk functions, I eventually moved up to the position
            of System Administrator and Communication Watch Officer. During my
            last deployment I started learning HTML, CSS, and JavaScript which
            quickly turned into a love for programming.
          </p>
          <p className="py-2 text-gray-600">
            Fascinated with how intricate and how fun programming can be I was
            quickly drawn to learn more. I decided to end my military career at
            the end of my contract to pursue becoming a software developer. I
            then started working with The Institute to Advance Diversity
            building full-stack components using React JS, C# and MS SQL Server.
            I am now spending my time building projects with Astro, Next JS,
            React JS, C#, and learning new and exciting technologies.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
