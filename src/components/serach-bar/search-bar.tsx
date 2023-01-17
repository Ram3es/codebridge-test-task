import { InputAdornment, TextField, Typography } from "@mui/material";

import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { Icon } from "../icon/icon";
import css from "./search-bar.module.scss";
import { getAllArticles } from "../../services/articles.service";
import { searchBySentences } from "../../shared/searchBySentences";
import { useDebounce } from "../../shared/hooks/useDebounce";

interface ISearchBarProps {
	setSearchWWords: (value: string[]) => void;
	filteredArticles: (articles: Article[]) => void;
}

export const SearchBar: FC<ISearchBarProps> = ({
	setSearchWWords,
	filteredArticles,
}) => {
	const [articles, setArticles] = useState<Article[]>([]);
	const [searchValue, setValues] = useState<string[]>([]);
	const debounce = useDebounce(500);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const searchValue = e.target.value.split(" ").filter((item) => !!item);

		debounce(() => [setValues(searchValue), setSearchWWords(searchValue)]);
	};

	const formated = useMemo(
		() => searchBySentences(articles, searchValue),
		[searchValue, articles]
	);

	const getArticles = useCallback(async () => {
		const { data } = await getAllArticles();
		setArticles(data);
	}, []);

	useEffect(() => {
		filteredArticles(formated);
	}, [formated, filteredArticles]);

	useEffect(() => {
		getArticles();
	}, [getArticles]);

	return (
		<>
			<Typography className={css.label}>Filter by keywords</Typography>
			<TextField
				className={css.field}
				variant="outlined"
				onChange={handleChange}
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<Icon type="search" />
						</InputAdornment>
					),
				}}
			/>
		</>
	);
};
