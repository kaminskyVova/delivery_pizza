import React from "react";
import { Route } from "react-router-dom";

import Header from "../src/components/Header/Header";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";

export default function App() {
    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route exact path="/" component={Home} />
                <Route path="/cart" render={() => <Cart />} />
            </div>
        </div>
    );
}
