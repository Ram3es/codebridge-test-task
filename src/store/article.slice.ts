import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IArticleState {
	articles: Article[];
	error: string;
}

const initialState = {
	articles: [],
	error: "",
} as IArticleState;

const articleSlice = createSlice({
	name: "article",
	initialState,
	reducers: {
		articleFetchSuccess: (state, action: PayloadAction<Article[]>) => {
			state.articles = action.payload;
		},
		articleFetchFailure: (state, action: PayloadAction<string>) => {
			state.error = action.payload;
		},
	},
});
export const { articleFetchSuccess, articleFetchFailure } =
	articleSlice.actions;
export default articleSlice.reducer;
