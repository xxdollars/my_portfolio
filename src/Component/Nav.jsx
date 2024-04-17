import React from "react";
import logo from "../assets/logo/image-removebg-preview (1).png";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

// <-- scope is for selector text (optional)

const Nav = () => {
	const container = useRef();

	useGSAP(
		() => {
			// use selectors...
			gsap.to(".box", { y : 100 ,stagger: 0.1, duration: 1 ,ease: "bounce.out", repeatDelay : 2 , });

		},
		{ scope: container }
	); // <-- scope for selector text (optional)
	return (
		<div  ref={container}  className="sticky top-0 z-[99999]">


			<div className="navbar justify-between hidden lg:flex bg-black ">
				<div className="flex-1">
					<a>
						<img className="h-12" src={logo} alt="" />
					</a>
				</div>
				
				<div className="flex-none">
					<ul className=" -translate-y-24 menu menu-horizontal text-[#61CE70] px-1">

						<li>
							<a className="box" href="#About">About Me</a>
						</li>
						<li>
							<a className="box" href="#Skills">Skills</a>
						</li>
						<li>
							<a className="box" href="#Projects">Projects</a>
						</li>
						<li>
							<a className="box" href="#Education">Education</a>
						</li>
						<li>
							<a className="box" href="#Contact">Contact</a>
						</li>
					</ul>
				</div>
			</div>

			<div className="flex bg-base-100 py-4   md:hidden">
				<div className="dropdown ">
					<div tabIndex={0} role="button" className="btn btn-ghost ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
					>
						<li>
							<a className="box" href="#About">About Me</a>
						</li>
						<li>
							<a href="#Skills">Skills</a>
						</li>
						<li>
							<a href="#Projects">Projects</a>
						</li>
						<li>
							<a href="#Education">Education</a>
						</li>
						<li>
							<a href="#Contact">Contact</a>
						</li>
					</ul>
				</div>
				<a href="Home">
					<img className="h-12" src={logo} alt="" />
				</a>
			</div>
		</div>
	);
};

export default Nav;
