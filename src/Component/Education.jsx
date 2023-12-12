import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
	return (
		<div
			id="Education"
			className="flex gap-5 flex-col md:flex-row h-screen max-h-[500px]  text-white "
		>
			<div className="md:w-1/2 pb-5  flex  justify-center items-center  bg-[#61CE61]">
				<div data-aos="zoom-out">
					<FaGraduationCap size={200} className="text-black" />
					<h1 className="text-5xl -mt-10 text-black ">Education</h1>
				</div>
			</div>
			<div className="md:w-1/2 overflow-hidden text-center md:text-left text-xl flex flex-col justify-center items-center">
				<div data-aos="fade-left" className="space-y-4 md:space-y-10">
					<div>
						<h1 className="text-3xl mb-2">Currently Studying </h1>
						<p>Rangpur Polytechnic Institute , Rangpur</p>
					</div>
					<div>
						<h1 className="text-3xl mb-2"> Completed SSC from</h1>
						<p> RCCI Public School and College , Rangpur</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Education;
