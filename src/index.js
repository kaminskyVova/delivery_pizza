import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./scss/app.scss";
import App from "./App";
import store from "../src/redux/store";


// store.subscribe(() => {
//     console.log("store was changed: ", store.getStore());
// });

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,

    document.getElementById("root"),
);
