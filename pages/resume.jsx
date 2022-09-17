import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const resume = () => {
  return (
    <>
      <Head>
        <title>David | Resume</title>
        <meta
          name="description"
          content="I’m a full-stack software engineer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">David Dickson</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/david-dickson-swe-vet/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/David-Dickson"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              Proven Leadership <span className="px-1">|</span> Web Development{" "}
              <span className="px-1">|</span> Complex Problem Solving
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          Analytical, innovative, and motivated web development professional
          with experience in customer service, team leadership, and
          organizational effectiveness in fast-paced and challenging
          environments. Adept at developing strategies and driving streamlined
          operations. Diverse analytical skills, team collaboration, and
          relationship building. Consummate professional, and motivated leader,
          with solid interpersonal abilities and complex problem-solving skills.
          Effective and proven track record of critical thinking, idea
          generation, and optimizing efficiencies.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Client-Side</span>
            <span className="px-2">|</span>Astro
            <span className="px-2">|</span>Next.JS
            <span className="px-2">|</span>TypeScript
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>React
            <span className="px-2">|</span>TailwindCSS
          </p>
          <p className="py-2">
            <span className="font-bold">Server-Side</span>
            <span className="px-2">|</span>Node.JS
            <span className="px-2">|</span>C#
            <span className="px-2">|</span>ASP.NET Core MVC
            <span className="px-2">|</span>ADO.NET
            <span className="px-2">|</span>Transact-SQL
            <span className="px-2">|</span>RESTful API
          </p>
          <p className="py-2">
            <span className="font-bold">Tools</span>
            <span className="px-2">|</span>GitHub
            <span className="px-2">|</span>Git
            <span className="px-2">|</span>Trello
            <span className="px-2">|</span>Chrome Developer Tools
            <span className="px-2">|</span>Postman API
            <span className="px-2">|</span>Agile Methodologies
            <span className="px-2">|</span>Software Development Life Cycle
            (SDLC)
            <span className="px-2">|</span>Object-Oriented Programming (OOP)
            <span className="px-2">|</span>Data Structures
            <span className="px-2">|</span>Algorithms
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">
              The Institute To Advance Diversity
            </span>
            <span className="px-2">|</span>Pacific Palisades, CA
          </p>
          <p className="py-1 italic">
            Full-Stack Software Engineer (Mar. 2022 - Current)
          </p>
          <p>
            The Institute of Advance Diversity is a web application that
            connects mentors and mentees with the objective to provide career
            advancement for underrepresented minorities in the US.
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Implemented higher order components utilizing React and Bootstrap
              5 in order to dynamically display Newsletters and Newsletter
              Templates.
            </li>
            <li>
              Constructed efficient RESTful API controllers, interfaces, and
              managed dependency injection using ASP.NET Core and C# to connect
              application features to SQL Server and Azure SQL Database.
            </li>
            <li>
              Refactor stored procedures, tables, UDTs, and constraints in SQL
              Server using SSMS.
            </li>
            <li>
              Ensured application and data security with front-end validation of
              endpoints and routes via role-based routing and back-end model
              binding.
            </li>
            <li>
              Built look-up services and API controllers in ASP.NET Core to
              dynamically retrieve data from multiple tables in SQL.
            </li>
            <li>
              Managed credentials/roles in system via secure routes using React
              Router to control access to components available based on login
              status and authorization level using AJAX/AXIOS and custom API.
            </li>
            <li>
              Provided maintenance and bug patches to ensure proper functions of
              application.
            </li>
            <li>
              Contributed to a high-energy, fast-paced development team
              utilizing AGILE methodologies by using Trello boards for task
              assignments and updates. Regularly participated in peer code
              reviews, daily stand ups and weekly code talks.
            </li>
            <li>
              Utilized Github as source control to assure code quality and
              stability with working as a team.
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">U.S. Navy </span>
            <span className="px-2">|</span>San Diego, CA
          </p>
          <p className="py-1 italic">
            Communication Watch Officer and System Administrator (Aug. 2018​ to
            Dec. 2021)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Designated as the Communication Watch Officer; managed, planned
              and coordinated unit-level Information Systems Security (ISS) and
              integration across 4 Areas of Responsibilities, and 7 services.
              Oversaw 35 personnel implement security controls and defensive
              counter-measures to defend and preserve data while hostiles were
              in immediate Area of Operation. Published communication plans for
              assigned geographical area of responsibilities during multiple
              tactical operations
            </li>
            <li>
              Served as the System Administrator for Automated Digital Network
              System (ADNS) Increment III, the primary Tactical Wide Area
              Network(WAN) system to monitor network performance and provide
              optimal use of bandwidth, increased throughput, and quality of
              service to Unclassified, Secret, Sensitive Compartmented
              Information, and Joint and Coalition networks.
            </li>
            <li>
              Oversaw 35 personnel in performing 24/7 network maintenance and
              troubleshooting of network connections, printers, phones, and the
              assembly of cables for diverse internal customers resolving
              trouble tickets, resulting in 100 % network availability
            </li>
            <li>
              Monitored network performance/provided performance statistical
              reports for real-time and historical measurements; provided
              continued maintenance and development of bug fixes and patch sets
              for existing web applications
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">U.S. Navy</span>
            <span className="px-2">|</span> San Diego, CA
          </p>
          <p className="py-1 italic">
            Quality Assurance Inspector (Mar. 2014​ to Mar. 2018​)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Ensured continuous improvement of 43 programs across 53 work
              centers; performed 25 maintenance and safety checks, validating 28
              programs for the unit.
            </li>
            <li>
              Project lead for the ALFS Reel and Cable Re-Termination Rapid
              Improvement Event. Using Lean/Six Sigma methodologies to identify
              excess waste and deficiencies resulting in the elimination of 2.2
              days of excessive rework and cost savings of $22.5M in
              Beyond-Capability-Maintenance.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
