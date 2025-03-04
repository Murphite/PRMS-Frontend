import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

import App from "./App.jsx";
import { AppContextProvider } from "./context/AppContext.jsx";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<AppContextProvider>
				<NextUIProvider>
					<App />
				</NextUIProvider>
			</AppContextProvider>
		</BrowserRouter>
	</React.StrictMode>
);
