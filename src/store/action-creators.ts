import { getAllArticles } from "../services/articles.service";
import { articleFetchSuccess, articleFetchFailure } from "./article.slice";
import { AppDispatch } from "./store";

export const fetchArticles = () => async (dispatch: AppDispatch) => {
	try {
		const { data } = await getAllArticles();
		dispatch(articleFetchSuccess(data));
	} catch (error) {
		dispatch(articleFetchFailure(error.message));
	}
};
