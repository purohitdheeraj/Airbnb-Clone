import React from "react";
import swimming from "../assets/swimming.png";
import starLogo from "../assets/star.png";

function Activity() {
	return (
		<div className="card">
			<img
				className="card-image"
				src={swimming}
				alt="Swimming"
			/>
			<span className="card-badge">Sold Out</span>
			<div className="card-stats">
				<img
					src={starLogo}
					alt="star-logo"
					className="star-logo"
				/>
				<span>5.0</span>
				<span className="gray">(6)&middot;</span>
				<span className="gray">USA</span>
			</div>
			<p>Life Lessons with Katie Zaferes</p>
			<p>
				<strong>
					From <span>$136</span>
				</strong>{" "}
				/ Person
			</p>
		</div>
	);
}

export default Activity;
