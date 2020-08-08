import React from "react";

import classes from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

const layout = props => {
	return (
		<React.Fragment>
			<Toolbar drawerToggleClicked={props.sideDrawerHandler} />
			<SideDrawer
				open={props.showSideDrawer}
				closed={props.closeSideDrawer}
				category={props.category}
				setCategory={props.setCategory}
			/>
			<main className={classes.Content}>{props.children}</main>
		</React.Fragment>
	);
};

export default layout;
