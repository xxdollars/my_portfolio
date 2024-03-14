import React from "react";
import { TypeAnimation } from "react-type-animation";
import { FaStar } from "react-icons/fa6";

import "./banner.css";
import ProfileImage from "../assets/profile-picture.jpeg";
const Banner = () => {
	<style>
		{`
    @media (max-width: 600px) {
      .text-3xl {
        font-size: 30px;
      }
    }
  `}
	</style>;

	return (
		<div id="home">
			<div className="w-full  bg-black p-5 h-screen max-h-[700px] bg-[#54595] flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20">
				<div className="md:w-1/2 space-y-4 ">
					<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold  text-white">
						HI, I'M Mustafiz !
					</h1>

					<TypeAnimation
						sequence={[
							"junior Web Developer", // Types 'One'
							1000, // Waits 1s
							"Front end Developer", // Deletes 'One' and types 'Two'
							2000, // Waits 2s
							"Junior Mern  Developer", // Types 'Three' without deleting 'Two'
							() => {
								console.log("Sequence completed");
							},
						]}
						wrapper="span"
						cursor={true}
						repeat={Infinity}
						// style={{ fontSize: "3rem", lineHeight:"60px", color: "#61CE70", display: "block" , }}
						className="text-3xl md:text-4xl lg:text-5xl text-[#61CE70] block  line"
					/>
					<p className="text-justify pb-5">
						Welcome to my corner of the web! I'm a dedicated web
						developer with expertise in HTML, CSS, JavaScript,
						React, and more. I bring creativity and technical skill
						to every project, ensuring a seamless and engaging user
						experience.
					</p>

					<a href="https://drive.google.com/uc?export=download&id=1Go0eHmY2lYvHcnBpjrwaWOVJ4rlZt_Nf">
						<button
							data-aos="zoom-in"
							className="btn  btn-outline text-[#61CE70] hover:bg-[#61CE70] hover:text-black"
						>
							{" "}
							DownLoad Resume
						</button>
					</a>
				</div>
				<div className="">
					<div
						data-aos="zoom-in"
						className="border-8 p-4 border-[#61CE70] rounded-full w-80 h-80"
					>
						<img
							className="rounded-full h-full object-cover  w-full"
							src={ProfileImage}
							alt=""
						/>
					</div>
				</div>
			</div>
			
			<div className="wrapper">
				<span><FaStar className="i " /></span>
				<span><FaStar className="i " /></span>
				<span><FaStar className=" text-white " /></span>
				<span><FaStar className="i " /></span>
				<span><FaStar className="i " /></span>
				<span><FaStar className="i " /></span>
				<span><FaStar className="i " /></span>
				<span><FaStar className="i " /></span>
				<span><FaStar className="i " /></span>
				<span><FaStar className="i " /></span>
				{/* <!-- stats - count particles --> */}
			</div>

			
			
			
		</div>
	);
};

export default Banner;
