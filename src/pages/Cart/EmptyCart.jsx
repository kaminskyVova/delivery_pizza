import React from "react";
import {Link} from "react-router-dom"
import emptyCard from "../../assets/img/empty-cart.png";

function EmptyCart() {
    return (
        <div className="cart cart--empty">
            <h2>
                Cart is Empty <span>😕</span>
            </h2>
            <p>
                
                Most likely you haven't ordered pizza yet.  
                <br />
                To order pizza, go to the main page.
            </p>
            <img src={emptyCard} alt="Empty cart" />
            <Link to="/" className="button button--black">
                <span>Back to order</span>
            </Link>
        </div>
    );
}

export default EmptyCart;
