import topic1 from "../assets/topic/scrnli_12_11_2023_11-25-39 PM.png";
import topic2 from "../assets/topic/scrnli_12_11_2023_11-27-13 PM.png";
import topic3 from "../assets/topic/scrnli_12_11_2023_11-27-58 PM.png";
import topic4 from "../assets/topic/scrnli_12_11_2023_11-28-14 PM.png";
import topic5 from "../assets/topic/scrnli_12_11_2023_11-28-48 PM.png";
import topic6 from "../assets/topic/scrnli_12_11_2023_11-29-19 PM.png";
import topic8 from "../assets/topic/scrnli_12_11_2023_11-34-44 PM.png";

import study1 from "../assets/study/scrnli_12_12_2023_12-14-43 AM.png";
import study2 from "../assets/study/scrnli_12_12_2023_12-14-53 AM.png";
import study3 from "../assets/study/scrnli_12_12_2023_12-15-07 AM.png";
import study4 from "../assets/study/scrnli_12_12_2023_12-15-17 AM.png";
import study5 from "../assets/study/scrnli_12_12_2023_12-15-47 AM.png";
import study6 from "../assets/study/scrnli_12_12_2023_12-16-17 AM.png";

import wedding1 from "../assets/wedding/scrnli_12_12_2023_10-32-24 AM.png";
import wedding2 from "../assets/wedding/scrnli_12_12_2023_10-32-41 AM.png";
import wedding3 from "../assets/wedding/scrnli_12_12_2023_10-32-55 AM.png";
import wedding4 from "../assets/wedding/scrnli_12_12_2023_10-33-14 AM.png";
import wedding5 from "../assets/wedding/scrnli_12_12_2023_10-33-23 AM.png";
import wedding6 from "../assets/wedding/scrnli_12_12_2023_10-33-42 AM.png";
import wedding7 from "../assets/wedding/scrnli_12_12_2023_10-34-06 AM.png";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div id="Projects" className="bg-black py-10">
			<h1 className="text-4xl md:text-5xl text-center py-10 pb-20">
				{" "}
				Latest projects
			</h1>

			<div className="space-y-16">
				<div className="flex flex-col md:flex-row-reverse  overflow-hidden  items-center ">
					<div
						data-aos="fade-left"
						className="  text-center md:w-1/2"
					>
						<h1 className="text-2xl md:text-4xl mb-4">
							Topic Trove
						</h1>
						<p className="text-2xl gap-2 flex items-center justify-center mb-5  md:text-4xl text-[#61CE70]">
						<span className="h-1 w-24 block bg-[#61CE70]"></span>A forum Website <span className="h-1 w-24 block bg-[#61CE70]"></span>
						</p>

						<div className="flex gap-4 justify-center">
						
						<a href="https://topic-trove.web.app/" data-aos="zoom-in"  className="btn  btn-outline text-[#61CE70] hover:bg-[#61CE70] hover:text-black"> visit website</a>
						</div>
					</div>

					<div className="md:w-1/2 w-screen mt-4 md:p-10 md:mt-5 md:mx-auto">
						<Swiper
							slidesPerView={1}
							spaceBetween={30}
							loop={true}
							pagination={{
								clickable: true,
							}}
							navigation={true}
							modules={[Pagination, Navigation]}
							className="mySwiper z-0"
						>
							<SwiperSlide>
								<img
									src={topic2}
									className=" px-12"
									alt=""
									srcset=""
								/>
							</SwiperSlide>
							<SwiperSlide>
								<img
									src={topic3}
									className=" px-12"
									alt=""
									srcset=""
								/>
							</SwiperSlide>
							<SwiperSlide>
								<img
									src={topic4}
									className=" px-12"
									alt=""
									srcset=""
								/>
							</SwiperSlide>
							<SwiperSlide>
								<img
									src={topic5}
									className=" px-12"
									alt=""
									srcset=""
								/>
							</SwiperSlide>
							<SwiperSlide>
								<img
									src={topic6}
									className=" px-12"
									alt=""
									srcset=""
								/>
							</SwiperSlide>
							<SwiperSlide>
								<img
									src={topic8}
									className=" px-12"
									alt=""
									srcset=""
								/>
							</SwiperSlide>
							<SwiperSlide>
								<img
									src={topic1}
									className=" px-12"
									alt=""
									srcset=""
								/>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>

				<div className="flex flex-col md:flex-row items-center overflow-hidden ">
					<div
						data-aos="fade-right"
						className="  text-center md:w-1/2"
					>
						<h1 className="text-2xl md:text-4xl mb-4">StudyHub</h1>
						<p className="text-2xl gap-2 flex items-center justify-center mb-5  md:text-4xl text-[#61CE70]">
						<span className="h-1 w-24 block bg-[#61CE70]"></span>A Study Website<span className="h-1 w-24 block bg-[#61CE70]"></span>
						</p>

						<div className="flex gap-4 justify-center">
						
						<a href="https://studyhub-f5ad8.web.app/" data-aos="zoom-in"  className="btn  btn-outline text-[#61CE70] hover:bg-[#61CE70] hover:text-black"> visit website</a>
						</div>
					</div>

					<div className="md:w-1/2 w-screen mt-4 space-y-5 md:p-10 md:mt-5 md:mx-auto">
						<Swiper
							slidesPerView={1}
							spaceBetween={30}
							loop={true}
							pagination={{
								clickable: true,
							}}
							navigation={true}
							modules={[Pagination, Navigation]}
							className="mySwiper z-0"
						>
							<SwiperSlide>
								<img
									src={study1}
									className="md:w-full px-12"
									alt=""
									srcset=""
								/>
							</SwiperSlide>
							<SwiperSlide>
								<img
									src={study2}
									className="md:w-full px-12"
									alt=""
									srcset=""
								/>
							</SwiperSlide>
							<SwiperSlide>
								<img
									src={study3}
									className="md:w-full px-12"
									alt=""
									srcset=""
								/>
							</SwiperSlide>
							<SwiperSlide>
								<img
									src={study4}
									className="md:w-full px-12"
									alt=""
									srcset=""
								/>
							</SwiperSlide>
							<SwiperSlide>
								<img
									src={study5}
									className="md:w-full px-12"
									alt=""
									srcset=""
								/>
							</SwiperSlide>
							<SwiperSlide>
								<img
									src={study6}
									className="md:w-full px-12"
									alt=""
									srcset=""
								/>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
				<div className="flex flex-col md:flex-row-reverse items-center  overflow-hidden ">
					<div data-aos="fade-left" className=" text-center md:w-1/2">
						<h1 className="text-2xl md:text-4xl mb-4">
							Wedding Hub
						</h1>
						<p className="text-2xl gap-2 flex items-center justify-center mb-5  md:text-4xl text-[#61CE70]">
						<span className="h-1 w-20 block bg-[#61CE70]"></span>A Wedding service Website<span className="h-1 w-20 block bg-[#61CE70]"></span>
						</p>

						<div className="flex gap-4 justify-center">
						
						<a href="https://wedding-hut-8caa8.firebaseapp.com" data-aos="zoom-in"  className="btn  btn-outline text-[#61CE70] hover:bg-[#61CE70] hover:text-black"> visit website</a>
						</div>
					</div>

					<div className="md:w-1/2 w-screen mt-4 md:p-10 md:mt-5 md:mx-auto">
						<Swiper
							slidesPerView={1}
							spaceBetween={30}
							loop={true}
							pagination={{
								clickable: true,
							}}
							navigation={true}
							modules={[Pagination, Navigation]}
							className="mySwiper z-0 z-0"
						>
							<SwiperSlide>
								<img
									src={wedding1}
									className="w-full px-12"
									alt=""
									srcset=""
								/>
							</SwiperSlide>
							<SwiperSlide>
								<img
									src={wedding2}
									className="w-full px-12"
									alt=""
									srcset=""
								/>
							</SwiperSlide>
							<SwiperSlide>
								<img
									src={wedding3}
									className="w-full px-12"
									alt=""
									srcset=""
								/>
							</SwiperSlide>
							<SwiperSlide>
								<img
									src={wedding4}
									className="w-full px-12"
									alt=""
									srcset=""
								/>
							</SwiperSlide>
							<SwiperSlide>
								<img
									src={wedding5}
									className="w-full px-12"
									alt=""
									srcset=""
								/>
							</SwiperSlide>
							<SwiperSlide>
								<img
									src={wedding6}
									className="w-full px-12"
									alt=""
									srcset=""
								/>
							</SwiperSlide>
							<SwiperSlide>
								<img
									src={wedding7}
									className="w-full px-12"
									alt=""
									srcset=""
								/>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
