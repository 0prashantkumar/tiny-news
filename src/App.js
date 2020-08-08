import React, { useState, useEffect } from "react";

import NewsCard from "./components/NewsCard/NewsCard";
import Layout from "./hoc/Layout/Layout";

// import ARTICLE from "./default";
import newsApi from "./utils/NewsApi";

import style from "./App.module.css";

function App() {
	const [articles, setArticles] = useState([]);
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

	let data = [];

	const getTopHeadlines = () => {
		newsApi.v2
			.topHeadlines({
				country: "in",
				pageSize: 100,
			})
			.then(resp => {
				data = [];
				setArticles([]);
				setArticles(resp.articles);
			});
	};

	useEffect(getTopHeadlines, []);

	useEffect(() => {
		if (currentCategory === "top-headlines") return getTopHeadlines;
		newsApi.v2
			.topHeadlines({
				country: "in",
				category: currentCategory,
				pageSize: 100,
			})
			.then(resp => {
				setArticles([]);
				setArticles(resp.articles);
				data = [];
			});
	}, [currentCategory]);

	const currentCategoryHandler = event => {
		setCurrentCategory(event.toLowerCase());
		sideDrawerClosedHandler();
	};

	const sideDrawerClosedHandler = () => {
		setShowSideDrawer(false);
	};

	const sideDrawerToggleHandler = () => {
		setShowSideDrawer(prev => !prev);
	};

	articles.forEach((article, index) => {
		data.push(
			<NewsCard
				key={index}
				imgUrl={article.urlToImage}
				title={article.title}
				desc={article.description}
				url={article.url}
				author={article.author}
				source={article.source.name}
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
				<span className={style.Category}>{currentCategory}:</span>
				<div className={style.CardStack}>{data}</div>
			</Layout>
		</React.Fragment>
	);
}

export default App;
