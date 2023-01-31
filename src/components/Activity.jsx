import React from "react";
import mountainBike from "../assets/mountain-bike.png";

function Activity() {
	return (
		<div className="activity">
			<span>Sold Out</span>
			<img src={mountainBike} alt="mountain-bike" />
			<div className="stats">
				<span>5.0</span>
				<span>(6)</span>
				<span>.</span>
				<span>USA</span>
			</div>
			<p>Life Lessons with Katie</p>
			<p>From $136 / person</p>
		</div>
	);
}

export default Activity;
