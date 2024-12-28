import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaStar } from "react-icons/fa6";
import pdf from "../assets/resume-of-mustafiz.pdf";

import "./banner.css";
import ProfileImage from "../assets/profile-picture.webp";

const Banner = () => {
  const [isPreparing, setIsPreparing] = useState(false); // Loading state

  const handleDownload = () => {
    setIsPreparing(true); // Set loading state
    // Simulate a small delay for "preparing" (optional)
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = pdf;
      link.download = "resume-of-mustafiz.pdf";
      link.click();
      setIsPreparing(false); // Reset loading state
    }, 1000); // Adjust delay as needed
  };

  return (
    <div id="home">
      <div className="w-full bg-transparent p-5 h-screen max-h-[700px] flex flex-col-reverse md:flex-row items-center justify-center gap-28 md:gap-20">
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            HI, I'M Mustafiz!
          </h1>

          <TypeAnimation
            sequence={[
              "junior Web Developer",
              1000,
              "Front end Developer",
              2000,
              "Junior Mern Developer",
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
            Welcome to my corner of the web! I'm a dedicated web developer with
            expertise in HTML, CSS, JavaScript, React, and more. I bring
            creativity and technical skill to every project, ensuring a seamless
            and engaging user experience.
          </p>

          <button
            onClick={handleDownload}
            data-aos="zoom-in"
            className="btn mt-5 btn-outline text-[#61CE70] hover:bg-[#61CE70] hover:text-black "
          >
            {isPreparing ? "Preparing to download..." : "Download Resume"}
          </button>
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
