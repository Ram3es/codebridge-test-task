import { InputAdornment, TextField, Typography } from "@mui/material";

import React, { FC, useEffect, useMemo, useState } from "react";
import { Icon } from "../icon/icon";
import css from "./search-bar.module.scss";
import { searchBySentences } from "../../shared/searchBySentences";
import { useDebounce } from "../../shared/hooks/useDebounce";
import { useAppSelector } from "../../shared/hooks/redux";

interface ISearchBarProps {
	setSearchWWords: (value: string[]) => void;
	filteredArticles: (articles: Article[]) => void;
}

export const SearchBar: FC<ISearchBarProps> = ({
	setSearchWWords,
	filteredArticles,
}) => {
	const [searchValue, setValues] = useState<string[]>([]);
	const { articles } = useAppSelector((state) => state.articles);
	const debounce = useDebounce(500);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const searchValue = e.target.value.split(" ").filter((item) => !!item);

		debounce(() => [setValues(searchValue), setSearchWWords(searchValue)]);
	};

	const formated = useMemo(
		() => searchBySentences(articles, searchValue),
		[searchValue, articles]
	);

	useEffect(() => {
		filteredArticles(formated);
	}, [formated, filteredArticles]);

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
