import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
	return (
		<React.Fragment>
			<Navbar />
			<Hero />
			<Skills />
			<About />
			<Projects />
		</React.Fragment>
	);
};

export default App;
