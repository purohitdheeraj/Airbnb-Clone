import React from "react";
import starLogo from "../assets/star.png";

function Activity(props) {
	let displayBadge;
	if (props.openSpots === 0) {
		displayBadge = "Sold Out";
	} else if (props.location === "Online") {
		displayBadge = "Online";
	}

	return (
		<div className="card">
			<img
				className="card-image"
				src={`/src/assets/${props.coverImg}`}
				alt={props.coverImg}
			/>
			{displayBadge && (
				<span className="card-badge">
					{displayBadge}
				</span>
			)}
			<div className="card-stats">
				<img
					src={starLogo}
					alt="star-logo"
					className="star-logo"
				/>
				<span>{props.stats.rating}</span>
				<span className="gray">
					({props.stats.reviewCount})&middot;
				</span>
				<span className="gray">
					{props.location}
				</span>
			</div>
			<p>{props.title}</p>
			<p>
				<strong>
					From <span>${props.price}</span>
				</strong>{" "}
				/ Person
			</p>
		</div>
	);
}

export default Activity;
