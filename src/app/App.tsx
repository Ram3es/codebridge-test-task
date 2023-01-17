import { FC } from "react";
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { ROUTES } from "../constants/routes";
import { HomePage } from "../screens/home-page";

export const App: FC = () => {
	return (
		<Router>
			<Routes>
				<Route path={ROUTES.home} element={<HomePage />} />
			</Routes>
		</Router>
	);
};
