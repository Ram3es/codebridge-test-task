import { Box, CardMedia, Link, Paper, Typography } from "@mui/material";
import { FC } from "react";
import { useParams } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";

import { Icon } from "../../components/icon/icon";
import { ROUTES } from "../../constants/routes";
import { useAppSelector } from "../../shared/hooks/redux";
import { mockText } from "./mock-text";

import css from "./article-page.module.scss";

export const ArticlePage: FC = () => {
	const { id } = useParams();
	const { articles } = useAppSelector((state) => state.articles);

	const article = articles.find((article) => article.id === Number(id));

	return (
		<>
			<Box className={css.wrapper}>
				<CardMedia
					component="img"
					height="200"
					image={article?.imageUrl}
					alt="@T"
				/>
				<Paper className={css.paper}>
					<Typography className={css.title}>{article?.newsSite}</Typography>
					<Box className={css.description}>
						<Typography>{article?.summary}</Typography>
						{mockText.split("\n").map((paragraph, idx) => (
							<Typography key={`p-${idx}`}>{paragraph}</Typography>
						))}
					</Box>
				</Paper>
				<Link className={css.link} component={RouterLink} to={ROUTES.home}>
					<Icon type="arrowLeft" />
					<Typography component="div">Back to homepage</Typography>
				</Link>
			</Box>
		</>
	);
};
