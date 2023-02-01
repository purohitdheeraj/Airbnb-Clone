import React from "react";
import heroImage from "/assets/hero-img.png";

function HeroBanner() {
	return (
		<section className="hero">
			<img
				className="hero-img"
				src={heroImage}
				alt="banner"
			/>
			<h2 className="hero-title">
				Online Experiences
			</h2>
			<p className="hero-text">
				Join unique interactive activities led by
				one-of-a-kind hosts—all without leaving
				home.
			</p>
		</section>
	);
}

export default HeroBanner;
