import React from "react";

import style from "./NewsCard.module.css";
import defaultImg from "../../assets/images/default.png";

function NewsCard(props) {
	return (
		<div className={style.NewsCard}>
			<div
				className={style.Image}
				style={{
					background: `url(${
						props.imgUrl ? props.imgUrl : defaultImg
					})`,
					backgroundPosition: "center",
				}}></div>
			<div className={[style.Title, style.NewsBox].join(" ")}>
				<span>{props.title}</span>
				<div className={[style.Author, style.AuthorInTitle].join(" ")}>
					<span>{props.author}</span>
				</div>
			</div>

			<div className={[style.Content, style.NewsBox].join(" ")}>
				<span>{props.desc}</span>
				<div
					className={[style.Author, style.AuthorInContent].join(" ")}>
					<span>{props.author}</span>
				</div>
			</div>
			<div className={[style.Footer, style.NewsBox].join(" ")}>
				<div className={style.ReadMore}>
					<a href={props.url}>Read full article on {props.source}</a>
				</div>
			</div>
		</div>
	);
}

export default NewsCard;
