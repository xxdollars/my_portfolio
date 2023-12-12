import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./Component/Nav";
import Banner from "./Component/Banner";
import AboutMe from "./Component/AboutMe";
import Skills from "./Component/Skills";
import Projects from "./Component/Projects";
import Footer from "./Component/Footer";
import Education from "./Component/Education";

function App() {



	return (
		<>
			<div className="  max-w-screen-xl mx-auto">
      <Nav></Nav>
      <Banner></Banner>
      <AboutMe></AboutMe>
      <Skills></Skills>
      <Projects></Projects>
      <Education></Education>

      <Footer></Footer>
      </div>
		</>
	);
}

export default App;
