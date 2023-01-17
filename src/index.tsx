import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App";

import { theme } from "./styles/mui-theme";
import "./styles/index.scss";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<StyledEngineProvider injectFirst>
				<App />
			</StyledEngineProvider>
		</ThemeProvider>
	</React.StrictMode>
);
