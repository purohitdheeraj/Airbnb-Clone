import React from "react";
import mountainBike from "../assets/mountain-bike.png";

function ImageTiles() {
	return (
		<section>
			<h2>Online Experiences</h2>
			<p>
				Join unique interactive activities led by
				one-of-a-kind hosts—all without leaving
				home.
			</p>
			<img src={mountainBike} alt="mountain-bike" />
		</section>
	);
}

export default ImageTiles;
