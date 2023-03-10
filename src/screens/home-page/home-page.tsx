import { useCallback, useState } from "react";

import { Box, Divider, Grid, Typography } from "@mui/material";
import { ArticleCard } from "../../components/card";
import { SearchBar } from "../../components/search-bar";
import css from "./home-page.module.scss";

export const HomePage = () => {
	const [articles, setArticles] = useState<Article[]>([]);
	const [searchWords, setWords] = useState<string[]>([]);

	const handleSearchBar = useCallback((value: string[]) => setWords(value), []);

	const filteredArticles = useCallback(
		(articles: Article[]) => setArticles(articles),
		[]
	);

	return (
		<Box className={css.wrapper}>
			<SearchBar
				setSearchWWords={handleSearchBar}
				filteredArticles={filteredArticles}
			/>
			<Typography className={css.result}>
				{`Results: ${articles?.length}`}
			</Typography>
			<Divider className={css.divider} />
			<Grid container spacing={{ lg: 5.5, md: 4, xs: 3 }}>
				{articles?.map((article) => (
					<Grid key={article.id} item xs={12} sm={6} md={4} lg={3}>
						<ArticleCard
							id={article.id}
							summary={article.summary}
							img={article.imageUrl}
							title={article.newsSite}
							date={article.publishedAt}
							searchWords={searchWords}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};
