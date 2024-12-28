import { FaFacebook, FaHome, FaMapMarkerAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { PiLinkSimpleBold } from "react-icons/pi";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Footer = () => {
	const form = useRef();
	const [sendBtnMessage , sendSendBtnMessage] = useState("Send Email")

	const sendEmail = (e) => {
		e.preventDefault();
		sendSendBtnMessage("Sending...")

		emailjs
			.sendForm(
				"service_yev8zd8",
				"template_6xulcht",
				form.current,
				"1basqFKWSgsXJyEOu"
			)
			.then(
				(result) => {
					console.log(result.text);
					toast.success("Mail send Successfully", {
						position: "top-center",
						autoClose: 5000,
						hideProgressBar: false,
						closeOnClick: true,
						pauseOnHover: true,
						draggable: true,
						progress: undefined,
						theme: "dark",
					});
					sendSendBtnMessage("Email Sent")
				},
				(error) => {
					console.log(error.text);
					sendSendBtnMessage("Sent Failed")

				}
			);
	};

	return (
		<div
			id="Contact"
			className="flex flex-col md:flex-row bg-transparent text-slate-200  justify-around p-10"
		>
			<div className="md:w-1/3 ">
				<div

					className="flex gap-2 text-xl items-center"
				>
					<PiLinkSimpleBold
						className="text-[#61CE70]"
						size={40}
					></PiLinkSimpleBold>
					<div className="flex flex-col">
						<h1 className=" mt-8  mb-2">Socials Links</h1>
						<div className=" text-xl md:text-base flex md:flex-row gap-5  items-center">
							<a target="_blank"
								href="https://www.facebook.com/mdmustafiz.rahman.988/"
								className="flex  items-center gap-2"
							>
								<FaFacebook className="text-[#61CE70]" />
								<span className="hidden md:block">Facebook</span>
							</a>
							<a target="_blank"
								href="https://www.linkedin.com/in/mdmustafiz8260/"
								className="flex items-center gap-2"
							>
								<FaLinkedin className="text-[#61CE70]" />
								<span className="hidden md:block">LinkedIn</span>
							</a>
							<a target="_blank"
								href="https://github.com/Mustafiz82"
								className="flex items-center gap-2"
							>
								<FaGithub className="text-[#61CE70]" /> <span className="hidden md:block">Github</span>
							</a>
						</div>
					</div>
				</div>

				<div

					className="flex gap-2 my-10 items-center  text-2xl"
				>
					<MdEmail className="text-[#61CE70]" size={40} />
					<div>
						<h1>Email</h1>
						<p className="text-base">mustafiz8260@gmail.com</p>
					</div>
				</div>

				<div className="flex gap-2 my-10 items-center text-2xl">
					<FaHome className="text-[#61CE70]" size={40} />
					<div>
						<h1>Permanent Address</h1> 
						<p className="text-base">Rangpur, Bangladesh</p>
					</div>
				</div>
				<div className="flex gap-2 my-10 items-center text-2xl">
					<FaLocationDot className="text-[#61CE70]" size={40} />
					<div>
						<h1>Present Address</h1> 
						<p className="text-base">Mohammadpur, Dhaka, Bangladesh</p> {/* Changed example data for clarity */}
					</div>
				</div>

			</div>

			<div className="md:w-1/3 ">
				<h1 className="text-3xl font-bold my-5">Send me Email </h1>
				<form ref={form} onSubmit={sendEmail}>
					<div className="flex  overflow-hidden flex-col gap-10">
						<input

							type="text"
							placeholder="Full Name"
							required
							name="from_name"
							className="input input-bordered w-full max-w-sm border-[#61CE70]"
						/>
						<input

							type="email"
							placeholder="Your Email"
							name="from_email"
							required
							className="border-[#61CE70] input input-bordered w-full max-w-sm"
						/>
						<textarea

							className="textarea h-40 border-[#61CE70] textarea-bordered w-full max-w-sm"
							name="message"
							placeholder="Your message"
						></textarea>
						<button
							type="submit"
							className="btn max-w-sm  btn-primary bg-[#61CE70] hover:bg-[#61CE70] "
						>
							{" "}
							{sendBtnMessage}
						</button>
					</div>
				</form>{" "}
				<ToastContainer className="mt-10" />
			</div>
		</div>
	);
};

export default Footer;
