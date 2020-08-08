import React, { useState, useEffect } from "react";

import NewsCard from "./components/NewsCard/NewsCard";
import Layout from "./hoc/Layout/Layout";

import axios from "axios";

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
		axios.get(`${process.env.REACT_APP_BASE_URL}`).then(resp => {
			data = [];
			setArticles([]);
			setArticles(resp.data.data);
		});
	};

	useEffect(getTopHeadlines, []);

	useEffect(() => {
		if (currentCategory === "top-headlines") return getTopHeadlines;
		axios
			.post(`${process.env.REACT_APP_BASE_URL}`, {
				category: currentCategory,
			})
			.then(resp => {
				// eslint-disable-next-line
				data = [];
				setArticles([]);
				setArticles(resp.data.data);
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
		let arr = article.title.split("-");
		arr.pop();
		let title = arr.join("-");
		data.push(
			<NewsCard
				key={index}
				imgUrl={article.urlToImage}
				title={title}
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
