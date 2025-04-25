import React from 'react';
import image from "../assets/IMG-20230526-WA0007.webp"

const AboutMe = () => {



    return (
        <div id="About" className='py-20 lg:py-10 lg:p-10'>
            <div className='text-center my-10 lg:my-0'>
                <h1 className='text-2xl md:text-4xl lg:text-5xl mb-4'>About Me</h1>
                <p className='text-2xl md:text-4xl pb-10 lg:pb-0 lg:text-5xl text-[#61CE70]'>-----who I am ------</p>
            </div>

            <div className='flex md:p-5  max-h-[700px]  justify-center items-center gap-10 lg:gap-28 flex-col-reverse md:flex-row-reverse  mx-auto mt-20 '>
                <div data-aos="fade-up" className='text-justify md:text-left md:Jw-1/2 space-y-5 lg:w-[700px] text-xl p-4'>
                    <p className="leading-relaxed text-justify">
                        Hey there! I'm Joran, a full-stack engineer with extensive experience in Web development, conversational AI, and machine learning. I am passionate about building intelligent systems that enhance productivity and the user experience.
                    </p>


                    <p className='leading-relaxed text-justify'>
                    Beyond code, I take pride in keeping up with new developments through conferences, publications, and open source contributions. Sharing knowledge with the community is rewarding, as it allows continual learning from diverse perspectives.
                    </p>
                </div>
                <div className="">
					<div
						data-aos="zoom-in"
						className="border-8 hover:translate-y-10 duration-150  p-4 border-[#61CE70] rounded-full w-80 h-80"
					>
						<img
							className="rounded-full h-full object-cover  w-full"
							src={image}
							alt=""
						/>
					</div>
				</div>
            </div>


            
        </div>
    );
};

export default AboutMe;