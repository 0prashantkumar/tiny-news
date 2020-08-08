import React, { useState } from "react";

import NewsCard from "./components/NewsCard/NewsCard";
import Layout from "./hoc/Layout/Layout";

import ARTICLE from "./default";

import "./App.css";

function App() {
	const [articles, setArticles] = useState([...ARTICLE]);
	const [currentCategory, setCurrentCategory] = useState("top-headlines");
	const [showSideDrawer, setShowSideDrawer] = useState(false);

	const allCategories = [
		"Top-Headlines",
		"General",
		"Health",
		"Science",
		"Sports",
		"Technology",
		"Business",
		"Entertainment",
	];

	const currentCategoryHandler = event => {
		setCurrentCategory(event.toLowerCase());
		sideDrawerClosedHandler();
	};

	const sideDrawerClosedHandler = () => {
		setShowSideDrawer(false);
	};

	const sideDrawerToggleHandler = () => {
		console.log(showSideDrawer);
		setShowSideDrawer(prev => !prev);
	};

	let data = [];

	articles.forEach((article, index) => {
		data.push(
			<NewsCard
				key={index}
				imgUrl={article.urlToImage}
				title={article.title}
				desc={article.description}
				url={article.url}
				author={article.author}
			/>
		);
	});
	return (
		<React.Fragment>
			<Layout
				category={allCategories}
				setCategory={currentCategoryHandler}
				showSideDrawer={showSideDrawer}
				closeSideDrawer={sideDrawerClosedHandler}
				sideDrawerHandler={sideDrawerToggleHandler}>
				<div className='card-stack'>{data}</div>
			</Layout>
		</React.Fragment>
	);
}

export default App;
