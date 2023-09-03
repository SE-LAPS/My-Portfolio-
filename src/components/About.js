import React from "react";

export default function About() {
  // Replace 'your-youtube-channel-link' with your actual YouTube channel link
  const youtubeChannelLink = "https://www.youtube.com/@CodeShowLapZ";

  return (
    <section id="about" className="bg-black"> {/* Add the bg-black class here */}
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm <a href={youtubeChannelLink} style={{ color: "yellow" }}>CodeShow LapZ</a>.
            <br className="hidden lg:inline-block" />Full-Stack Software Development.
            
          </h1>
          <p className="mb-8 leading-relaxed">
            Experienced with all stages of the development cycle for dynamic Java projects.
            Well-versed in numerous programming languages including Java, Python, PHP,
            JavaScript, My-Sql, Flutter, C#, React js, Express jx, Node js, Mongo db. Strong
            background in project management and customer relations.
          </p>
          <div className="flex justify-center">
          <a
              href="#contact"
              className="inline-flex text-black bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./about.gif"
          />
        </div>
      </div>
    </section>
  );
}
