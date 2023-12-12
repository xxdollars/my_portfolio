import html from "../assets/png-transparent-logo-html-html5-removebg-preview.png";
import css from "../assets/png-transparent-logo-css-css3-thumbnail-removebg-preview.png";
import js from "../assets/javascript-logo-javascript-icon-transparent-free-png.webp";
import tailwind from "../assets/png-transparent-tailwind-css-css-framework-customizable-low-level-tailwind-logo-3d-icon-removebg-preview.png";
import react from "../assets/1611079.png";
import mongodb from "../assets/png-transparent-mongodb-original-wordmark-logo-icon-thumbnail-removebg-preview.png";
import node from "../assets/nodejs-logo-FBE122E377-seeklogo.com.png";

import firebase from "../assets/image_processing20210905-11954-syw272.png";

const Skills = () => {
	const boxShadowStyle = {
		boxShadow: "#61CE70 0px 5px 15px",
		// You can add additional styles as needed
	};

	return (
		<div id="Skills" className=" p-10">
			<div className="text-center">
				<h1 className="text-2xl md:text-4xl lg:text-5xl mb-4">My skills</h1>
				<p className="text-2xl md:text-3xl lg:text-5xl text-[#61CE70]">
					-----what I know ------
				</p>
			</div>

			<div className="">
				<div className="grid overflow-hidden grid-cols-1 md:grid-cols-4 gap-10 my-10">
					<div
						data-aos="fade-down-right"
						className=" p-5 mx-auto"
						style={boxShadowStyle}
					>
						<img src={html} alt="Html" className="w-56 h-56 md:w-40 md:h-40" />
					</div>
					<div
						data-aos="fade-down"
						className="p-5 mx-auto"
						style={boxShadowStyle}
					>
						<img src={css} alt="Html" className="w-56 h-56 md:w-40 md:h-40" />
					</div>
					<div
						data-aos="fade-down"
						className="p-5 mx-auto"
						style={boxShadowStyle}
					>
						<img src={tailwind} alt="Html" className="w-56 h-56 md:w-40 md:h-40" />
					</div>
					<div
						data-aos="fade-down-left"
						className="p-5 mx-auto"
						style={boxShadowStyle}
					>
						<img src={js} alt="Html" className="w-56 h-56 md:w-40 md:h-40" />
					</div>
					<div
						data-aos="fade-up-right"
						className="p-5 mx-auto"
						style={boxShadowStyle}
					>
						<img src={react} alt="Html" className="w-56 h-56 md:w-40 md:h-40" />
					</div>
					<div
						data-aos="fade-up"
						className="p-5 mx-auto"
						style={boxShadowStyle}
					>
						<img src={firebase} alt="Html" className="w-56 h-56 md:w-40 md:h-40" />
					</div>
					<div
						data-aos="fade-up"
						className="p-5 mx-auto"
						style={boxShadowStyle}
					>
						<img src={node} alt="Html" className="w-56 h-56 md:w-40 md:h-40" />
					</div>
					<div
						data-aos="fade-up-left"
						className="p-5 mx-auto"
						style={boxShadowStyle}
					>
						<img src={mongodb} alt="Html" className="w-56 h-56 md:w-40 md:h-40" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
