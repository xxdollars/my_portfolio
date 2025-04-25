import React, { useEffect, useState } from "react";

import BikroyElectronics from "../assets/websiteThumbnail/bikroyelectronics.webp"
import motionArt from "../assets/websiteThumbnail/motion-art.webp"
import topicTrove from "../assets/websiteThumbnail/topic-trove.webp"
import weddingHut from "../assets/websiteThumbnail/wedding-hut.webp"
import assetHexa from "../assets/websiteThumbnail/asset-hexa.webp"


import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Projects = () => {



	const Data = [
		{
			title: "BikroyElectronics",
			description: "BikroyElectronics is a comprehensive e-commerce platform for selling and purchasing electronics. The site is designed with a user-friendly interface, secure transactions, and a range of features that enhance both user and admin experiences.",
			thumbnailImage: BikroyElectronics,
			category: "FullStack",
			clintLink: "https://github.com/xxdollars/BikroyElectronics.git",
			serverLink: "https://github.com/xxdollars/BikroyElectronics-server.git",
			LiveLInk: "https://bikroyelectronics.web.app/"

		},
		{
			title: "Motion Art",
			description: "Helivarse Motion Art is a sleek, modern website that showcases stunning motion graphics and animations. It offers a curated collection of visually engaging art, providing an immersive experience for design enthusiasts and creatives alike.",
			thumbnailImage: motionArt,
			category: "FrontEnd",
			clintLink: "https://github.com/xxdollars/Jobtask-Motion-Art.git",
			serverLink: "",
			LiveLInk: "https://helivarse-motion-art.vercel.app/"

		},
		{
			title: "Hostadvice",
			description: "This is a comprehensive online platform dedicated to providing detailed information, reviews, and comparisons of web hosting services.It emphasizes its commitment to unbiased reviews, stating that while it may receive compensation from some hosting companies, such compensation does not influence the direction or conclusions of its reviews .",
			thumbnailImage: assetHexa,
			category: "FullStack",
			clintLink: "",
			serverLink: "",
			LiveLInk: "https://hostadvice.com/"

		},
		
		{
			title: "Wedding Hut",
			description: "The website features a welcoming homepage, secure user authentication with Google Sign-In, and private routes for logged-in users. It’s fully responsive with React AOS integration for smooth, engaging animations.",
			thumbnailImage: weddingHut,
			category: "FrontEnd",
			clintLink: "https://github.com/xxdollars/Wedding-event-management.git",
			serverLink: null,
			LiveLInk: "https://wedding-hut-8caa8.web.app/"

		},
		
		{
			title: "Fuel Compare",
			description: "​FuelCompare.ie is an Irish platform designed to help users find the most affordable fuel prices in their vicinity. It offers real-time data on petrol, diesel, and alternative fuel prices across Ireland, aiming to assist consumers in making cost-effective fueling decisions.",
			thumbnailImage: topicTrove,
			category: "FullStack",
			clintLink: "",
			serverLink: "",
			LiveLInk: "https://fuelcompare.ie/"

		},
	]



	const [activeButton, setActiveButton] = useState("all Product")


	const filteredData = Data.filter(item => {
		if (activeButton === "all Product") return true;
		if (activeButton === "FrontEnd") return item.category === "FrontEnd";
		if (activeButton === "Full Stack") return item.category === "FullStack";
		return false;
	});

	

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div id="Projects" className="bg-transparent py-10 ">
			<div className="sticky -top-5 z-[999] py-5  bg-black backdrop-blur-2xl">
				<h1 className="text-4xl md:text-5xl text-center pb-10 ">

					Latest projects
				</h1>


				<div className="flex flex-wrap bg-black justify-center gap-5">
					<button onClick={() => setActiveButton("all Product")} className={` ${(activeButton == "all Product") ? "bg-[#61CE70] text-black" : ""}     btn lg:px-8 rounded-md  hover:bg-[#61CE70] hover:text-black btn-outline  hover:border-none text-[#61CE70]`}> All Projects</button>
					<button onClick={() => setActiveButton("FrontEnd")} className={` ${(activeButton == "FrontEnd") ? "bg-[#61CE70] text-black" : ""}     btn lg:px-8 rounded-md  hover:bg-[#61CE70] hover:text-black btn-outline  hover:border-none text-[#61CE70]`}> Frontend Projects</button>
					<button onClick={() => setActiveButton("Full Stack")} className={` ${(activeButton == "Full Stack") ? "bg-[#61CE70] text-black" : ""}     btn lg:px-8 rounded-md  hover:bg-[#61CE70] hover:text-black btn-outline  hover:border-none text-[#61CE70]`}> Full Stack Projects</button>


				</div>
			</div>



			<div className="mt-10 flex flex-col px-5 gap-20 lg:gap-10">

				{
					filteredData?.map((item, inx) => (
						<div className={`${inx % 2 == 0 ? "lg:flex-row-reverse" : ""} flex flex-col lg:flex-row justify-center h-full lg:gap-5`} key={inx}>
							<div className="lg:w-[700px]">
								<img src={item?.thumbnailImage} alt={item?.title} />
							</div>

							<div className="lg:w-[450px] h-full">
								<div className="min-h-[340px] bg-[#61CE70]/20 backdrop-blur-lg border border-white/20 shadow-lg p-6 rounded-lg">
									<h1 className="text-4xl">{item?.title}</h1>
									<p className="text-lg mt-5">{item?.description}</p>
								</div>
								<div className="flex justify-between">
								{item?.clintLink && (
									<Link to={item?.clintLink} className="btn hover:bg-[#4CAB58] flex-1 rounded-none text-black bg-[#61CE70]">
										<FaGithub /> Client side
									</Link>
								)}

									{/* Conditionally render the Server side button */}
									{item?.serverLink && (
										<Link to={item?.serverLink} className="btn hover:bg-[#4CAB58] flex-1 rounded-none text-black bg-[#61CE70]">
											<FaGithub /> Server side
										</Link>
									)}

									<Link to={item?.LiveLInk} className="btn hover:bg-[#4CAB58] flex-1 rounded-none text-black bg-[#61CE70]">
										<FaExternalLinkAlt /> Visit website
									</Link>
								</div>
							</div>
						</div>
					))
				}

			</div>





		</div>
	);
};

export default Projects;