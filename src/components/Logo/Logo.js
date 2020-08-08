import React from "react";

import newsLogo from "../../assets/images/logo.png";
import classes from "./Logo.module.css";

const logo = props => (
	<div className={classes.Logo}>
		<img src={newsLogo} alt='Tiny-News' />
	</div>
);

export default logo;
