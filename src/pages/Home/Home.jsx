import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";

import Categories from "../../components/Category/Categories";
import PizzaBlock from "../../components/PizzaBlock/PizzaBlock";
import SortPopup from "../../components/SortPopup/SortPopup";
import PizzaLoadingBlock from "../../components/PizzaBlock/PizzaLoadingBlock";

import { setCategory, setSortBy } from "../../redux/actions/filters";
import { fetchPizzas } from "../../redux/actions/pizzas";
import { addPizzaToCart } from "../../redux/actions/cart";

const categoryNames = ["Meat", "Vegetarian", "Grill", "Spicy", "Closed"];

const sortItems = [
    { name: "by popularity", type: "popular", order: "desc" },
    { name: "by price", type: "price", order: "desc" },
    { name: "A - Z", type: "name", order: "asc" },
];

function Home() {
    const pizzas = useSelector((state) => state.pizzas.items);
    const pizzasInCart = useSelector(({ cart }) => cart.items);
    const isLoaded = useSelector((state) => state.pizzas.isLoaded);
    const { category, sortBy } = useSelector(({ filters }) => filters);

    const dispatch = useDispatch();

    const onSelectCategory = (index) => {
        dispatch(setCategory(index));
    };

    useEffect(() => {
        dispatch(fetchPizzas(sortBy, category));
    }, [category, sortBy]);

    const onSelectSortType = useCallback((type) => {
        dispatch(setSortBy(type));
    }, []);

    const handleAddPizzaToCart = (obj) => {
        dispatch(addPizzaToCart(obj));
    };

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    onClickCategory={onSelectCategory}
                    categories={categoryNames}
                />
                <SortPopup
                    activeSortType={sortBy.type}
                    items={sortItems}
                    onClickSortType={onSelectSortType}
                />
            </div>
            <h2 className="content__title"> <span style={{color: "#FFA900", textDecoration: "underline"}}><i>{categoryNames[category] ? categoryNames[category] : "All Pizzas"}</i></span></h2>
            <div className="content__items">
                {isLoaded
                    ? pizzas.map((pizzas) => {
                          return (
                              <PizzaBlock
                                  onClickAddPizza={handleAddPizzaToCart}
                                  {...pizzas}
                                  key={pizzas.id}
                                  addedCount={
                                  pizzasInCart[pizzas.id] &&
                                  pizzasInCart[pizzas.id].items.length
                                  }
                              />
                          );
                      })
                    : Array(12)
                          .fill(0)
                          .map((_, index) => <PizzaLoadingBlock key={index} />)}
            </div>
        </div>
    );
}

export default Home;
