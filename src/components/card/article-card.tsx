import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Link,
	Typography,
} from "@mui/material";
import { format } from "date-fns";
import { FC } from "react";
import { Link as RouterLink } from "react-router-dom";
import Highlighter from "react-highlight-words";

import { DATE_OPTIONS } from "../../constants/date-format";
import { cutText } from "../../shared/сut-text";
import { Icon } from "../icon/icon";

import css from "./card.module.scss";
import { ROUTES } from "../../constants/routes";

interface IArticleCardProps {
	img: string;
	title: string;
	summary: string;
	date: string;
	searchWords: string[];
}

export const ArticleCard: FC<IArticleCardProps> = ({
	img,
	title,
	summary,
	date,
	searchWords,
}) => {
	const formatedSummary = cutText(summary, 100);
	const formatedDate = format(new Date(date), DATE_OPTIONS);

	return (
		<Card className={css.card}>
			<CardMedia component="img" height="220" image={img} alt="@T" />
			<CardContent>
				<Box className={css.date}>
					<Icon type="calendar" />
					<Typography>{formatedDate}</Typography>
				</Box>
				<Typography variant="h5" mb={1}>
					<Highlighter searchWords={searchWords} textToHighlight={title} />
				</Typography>
				<Typography className={css.summary}>
					<Highlighter
						searchWords={searchWords}
						textToHighlight={formatedSummary}
					/>
				</Typography>
			</CardContent>
			<Link component={RouterLink} to={ROUTES.page} className={css.link}>
				<Typography component="div">Read more</Typography>
				<Icon type="arrowRight" />
			</Link>
		</Card>
	);
};
