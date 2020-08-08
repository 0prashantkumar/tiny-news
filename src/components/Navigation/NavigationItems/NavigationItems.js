import React from "react";

import classes from "./NavigationItems.module.css";

const navigationItems = props => {
	let list = [];
	props.category.forEach((item, index) => {
		list.push(
			<li key={index} className={classes.NavigationItem}>
				<button onClick={props.setCategory.bind(this, item)}>
					{item}
				</button>
			</li>
		);
	});
	return (
		<ul className={classes.NavigationItems}>
			<button onClick={props.setCategory.bind(this, "google10")}>
				Layout
			</button>
			{list}
		</ul>
	);
};

export default navigationItems;
