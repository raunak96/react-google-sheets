import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";
import "./index.css";
import App from "./App";
import { SnackbarProvider } from "notistack";

ReactDOM.render(
	<SnackbarProvider
		anchorOrigin={{
			vertical: "top",
			horizontal: "center",
		}}
		autoHideDuration={3000}>
		<App />
	</SnackbarProvider>,
	document.getElementById("root")
);
