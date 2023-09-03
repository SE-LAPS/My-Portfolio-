import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills" className="bg-black">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          I have developed proficiency in a wide range of skills and technologies crucial
          for both front-end and back-end software development. My skill set includes expertise
          in HTML, CSS, and JavaScript for creating responsive and visually appealing user interfaces.
          On the back end, I excel in Node.js, Python, and database management, enabling me to build
          robust server-side systems and APIs. Additionally, I am well-versed in various programming
          languages, including Java, Python, PHP, and C#. My commitment to best practices, continuous
          learning, and mastering full-stack development drives me to deliver high-quality, user-centric
          software solutions while embracing challenges as opportunities for growth.
          </p>
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-gray-800 bg-opacity-50 rounded flex p-4 h-full items-center">
              <BadgeCheckIcon className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}