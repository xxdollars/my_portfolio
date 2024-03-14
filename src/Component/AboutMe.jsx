import React from 'react';
import image from "../assets/IMG-20230526-WA0007.jpg"

const AboutMe = () => {
    return (
        <div id="About" className='  bg-base-100 py-10 lg:p-10'>
           <div className='text-center'>
            <h1 className='text-2xl md:text-4xl lg:text-5xl mb-4'>About Me</h1>
            <p className='text-2xl md:text-4xl lg:text-5xl text-[#61CE70]'>-----who I am ------</p>
           </div>

        <div className='flex md:p-5  items-center gap-20 flex-col-reverse md:flex-row-reverse lg:w-4/5 mx-auto mt-20 '>
            <div data-aos="fade-up" className='text-justify md:text-left md:Jw-1/2 space-y-5 text-xl p-4'>
                    <p >
                    Hey there! I'm Mustafiz, a passionate web developer with a mission to transform ideas into engaging digital experiences. I specialize in creating captivating user interfaces using HTML, CSS, and JavaScript, with a focus on dynamic applications using React.
                    </p>

                    <p>
                    In the backend, I wield the power of Node.js and Express, crafting server-side logic, and use MongoDB for efficient data management.
                    </p>
            </div>
            <div className='md:w-1/3 relative '>
                <div data-aos="fade-down-right" className=' w-64 md:w-72 h-80 bg-[#61CE70] relative'>
                <img data-aos="fade-up-left" src={image} alt="" className="w-full absolute top-5 left-5  " srcset="" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default AboutMe;