import { FC, useEffect } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router, Navigate } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { ArticlePage } from "../screens/article-page";
import { HomePage } from "../screens/home-page";
import { useAppDispatch } from "../shared/hooks/redux";
import { fetchArticles } from "../store/action-creators";

export const App: FC = () => {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchArticles());
	}, [dispatch]);

	return (
		<Router>
			<Routes>
				<Route path={ROUTES.home} element={<HomePage />} />
				<Route path={ROUTES.page} element={<ArticlePage />} />
				<Route path={ROUTES.noMatch} element={<Navigate to={ROUTES.home} />} />
			</Routes>
		</Router>
	);
};
