import React from "react";
import Activity from "./Activity";
import cardData from "../../data";

function Activities() {
	return (
		<section className="activities">
			{cardData.map((card) => {
				return <Activity key={card.id} {...card} />;
			})}
		</section>
	);
}

export default Activities;
