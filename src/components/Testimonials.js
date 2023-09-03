import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-black">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-12">
          References
        </h1>
        
        <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
        The "References" section provides an opportunity to showcase the recommendations and
        endorsements of individuals who have worked closely with you in a professional capacity.
        These testimonials serve as a validation of your skills, work ethic, and character.
        They offer potential employers or collaborators insights into your past achievements and
        the value you bring to a team or project. Building a collection of strong references can
        enhance your credibility and increase your chances of securing job opportunities or partnerships.
        It's essential to maintain positive relationships with colleagues and mentors who can vouch for
        your abilities and contribute to your professional growth.
        </p>

        <div className="flex flex-wrap m-4">
          {testimonials.map((testimonial) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
              <TerminalIcon className="block w-8 text-yellow-400 mb-4" />
                <p className="leading-relaxed mb-6">{testimonial.quote}</p>
                <div className="inline-flex items-left">
                  <img
                    alt="testimonial"
                    src={testimonial.image}
                    className="w-12 rounded-full flex-shrink-0 object-cover object-center"
                  />
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {testimonial.name}
                    </span>
                    <span className="text-gray-500 text-sm uppercase">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}