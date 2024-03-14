import html from "../assets/png-transparent-logo-html-html5-removebg-preview.png";
import css from "../assets/png-transparent-logo-css-css3-thumbnail-removebg-preview.png";
import js from "../assets/javascript-logo-javascript-icon-transparent-free-png.webp";
import tailwind from "../assets/png-transparent-tailwind-css-css-framework-customizable-low-level-tailwind-logo-3d-icon-removebg-preview.png";
import react from "../assets/1611079.png";
import mongodb from "../assets/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail-removebg-preview.png";
import node from "../assets/nodejs-logo-FBE122E377-seeklogo.com.png";

import firebase from "../assets/image_processing20210905-11954-syw272.png";
import "./Skills.css";
const Skills = () => {
	// const boxShadowStyle = {
	// 	// boxShadow: "#61CE70 0px 5px 15px",

	// 	// You can add additional styles as needed
	// };

	return (
		<div id="Skills" className=" p-10">
			<div className="text-center">
				<h1 className="text-2xl md:text-4xl lg:text-5xl mb-4">
					My skills
				</h1>
				<p className="text-2xl  md:text-3xl lg:text-5xl text-[#61CE70]">
					-----what I know ------
				</p>
			</div>

			<div className="">
				<div className="grid overflow-hidden grid-cols-1 md:grid-cols-4 gap-10 my-10">
				<div className="mx-auto p-5" data-aos="fade-up">
						<div className=" shady p-5 ">
							<img
								src={html}
								alt="react"
								className="w-56 h-56 md:w-40 md:h-40"
							/>
						</div>
					</div>
					<div className="mx-auto p-5" data-aos="fade-up">
						<div className=" shady p-5 ">
							<img
								src={css}
								alt="css"
								className="w-56 h-56 md:w-40 md:h-40"
							/>
						</div>
					</div>
					<div className="mx-auto p-5" data-aos="fade-up">
						<div className=" shady p-5 ">
							<img
								src={tailwind}
								alt="react"
								className="w-56 h-56 md:w-40 md:h-40"
							/>
						</div>
					</div>
					<div className="mx-auto p-5" data-aos="fade-up">
						<div className=" shady p-5 ">
							<img
								src={js}
								alt="react"
								className="w-56 h-56 md:w-40 md:h-40"
							/>
						</div>
					</div>
					<div className="mx-auto p-5" data-aos="fade-up">
						<div className=" shady p-5 ">
							<img
								src={react}
								alt="react"
								className="w-56 h-56 md:w-40 md:h-40"
							/>
						</div>
					</div>
					<div className="mx-auto p-5" data-aos="fade-up">
						<div className=" shady p-5 ">
							<img
								src={firebase}
								alt="Html"
								className="w-56 h-56 md:w-40 md:h-40"
							/>
						</div>
					</div>
					<div className="mx-auto p-5" data-aos="fade-up">
						<div className=" shady p-5 ">
							<img
								src={node}
								alt="react"
								className="w-56 h-56 md:w-40 md:h-40"
							/>
						</div>
					</div>
					<div className="mx-auto p-5" data-aos="fade-up">
						<div className=" shady p-5 ">
							<img
								src={mongodb}
								alt="react"
								className="w-56  h-56 md:w-40 md:h-40"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
