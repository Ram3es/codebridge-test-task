import { FC } from "react";
import { format } from "date-fns";
import { Link as RouterLink } from "react-router-dom";
import Highlighter from "react-highlight-words";
import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Link,
	Typography,
} from "@mui/material";

import css from "./card.module.scss";

import { Icon } from "../icon/icon";
import { cutText } from "../../shared/сut-text";
import { DATE_OPTIONS } from "../../constants/date-format";
import { ROUTES } from "../../constants/routes";

interface IArticleCardProps {
	id: number;
	img: string;
	title: string;
	summary: string;
	date: string;
	searchWords: string[];
}

export const ArticleCard: FC<IArticleCardProps> = ({
	id,
	img,
	date,
	title,
	summary,
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
			<Link
				component={RouterLink}
				to={`${ROUTES.home}${id}`}
				className={css.link}
			>
				<Typography component="div">Read more</Typography>
				<Icon type="arrowRight" />
			</Link>
		</Card>
	);
};
