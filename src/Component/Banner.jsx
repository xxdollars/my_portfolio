import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaStar } from "react-icons/fa6";

import "./banner.css";
import ProfileImage from "../assets/profile-picture.webp";

const Banner = () => {
  const [isPreparing, setIsPreparing] = useState(false); // Loading state

  return (
    <div id="home">
      <div className="w-full bg-transparent p-5 h-screen max-h-[700px] flex flex-col-reverse md:flex-row items-center justify-center gap-28 md:gap-20">
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            HI, I'M Joran!
          </h1>

          <TypeAnimation
            sequence={[
              "Full Stack Developer",
              1000,
              "LLM Engineer",
              2000,
              "Chatbot Developer",
              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="text-3xl md:text-4xl lg:text-5xl text-[#61CE70] block line"
          />
          <p className="text-justify pb-5">
            Welcome to my corner of the web! As a full-stack engineer with extensive experience in Web development, conversational AI, and machine learning, I am passionate about building intelligent systems that enhance productivity and the user experience.
          </p>
        </div>
        <div className="mt-24 lg:mt-0">
          <div
            data-aos="zoom-in"
            className="border-8 hover:translate-y-10 duration-150 p-4 border-[#61CE70] rounded-full w-80 h-80"
          >
            <img
              className="rounded-full h-full object-cover w-full"
              src={ProfileImage}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
