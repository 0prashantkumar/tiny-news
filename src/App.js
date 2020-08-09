import React, { useState, useEffect } from "react";

import NewsCard from "./components/NewsCard/NewsCard";
import Layout from "./hoc/Layout/Layout";
import Spinner from "./components/Spinner/Spinner";

import axios from "axios";

import style from "./App.module.css";

function App() {
	const [articles, setArticles] = useState([]);
	const [currentCategory, setCurrentCategory] = useState("top-headlines");
	const [showSideDrawer, setShowSideDrawer] = useState(false);
	const [showSpinner, setShowSpinner] = useState(true);

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
	let spinner = <Spinner />;

	const getTopHeadlines = () => {
		axios.get(`${process.env.REACT_APP_BASE_URL}`).then(resp => {
			data = [];
			setArticles([]);
			setArticles(resp.data.data);
			setShowSpinner(false);
		});
	};

	useEffect(() => {
		if (currentCategory === "top-headlines") return getTopHeadlines();
		setShowSpinner(true);
		axios
			.post(`${process.env.REACT_APP_BASE_URL}`, {
				category: currentCategory,
			})
			.then(resp => {
				// eslint-disable-next-line
				data = [];
				setArticles([]);
				setArticles(resp.data.data);
				setShowSpinner(false);
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
				<div className={style.CardStack}>
					{showSpinner ? spinner : data}
				</div>
			</Layout>
		</React.Fragment>
	);
}

export default App;
