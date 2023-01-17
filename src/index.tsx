import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import { App } from "./app/App";

import { theme } from "./styles/mui-theme";
import "./styles/index.scss";
import { store } from "./store/store";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider theme={theme}>
				<StyledEngineProvider injectFirst>
					<App />
				</StyledEngineProvider>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
);
