import { configureStore } from "@reduxjs/toolkit";
import articleSlice from "./article.slice";

export const store = configureStore({
	reducer: {
		articles: articleSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
