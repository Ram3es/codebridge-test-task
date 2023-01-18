import React, { FC, memo, useEffect, useState } from "react";
import { InputAdornment, TextField, Typography } from "@mui/material";

import css from "./search-bar.module.scss";

import { Icon } from "../icon/icon";

import { useAppSelector } from "../../shared/hooks/redux";
import { useDebounce } from "../../shared/hooks/useDebounce";
import { searchBySentences } from "../../shared/searchBySentences";

interface ISearchBarProps {
	setSearchWWords: (value: string[]) => void;
	filteredArticles: (articles: Article[]) => void;
}
let count = 0;

export const SearchBar: FC<ISearchBarProps> = memo(
	({ setSearchWWords, filteredArticles }) => {
		const [searchValue, setValues] = useState<string[]>([]);
		const { articles } = useAppSelector((state) => state.articles);
		const debounce = useDebounce(500);

		const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
			const searchValue = e.target.value.split(" ").filter((item) => !!item);

			debounce(() => [setValues(searchValue), setSearchWWords(searchValue)]);
		};

		useEffect(() => {
			if (articles.length) {
				const formated = searchBySentences(articles, searchValue);
				filteredArticles(formated);
			}
		}, [articles, searchValue, filteredArticles]);

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
	}
);
