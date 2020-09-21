import React from 'react';
import Spinner from "../../components/UI/Spinner/Spinner";
import {useSelector} from "react-redux";
import Order from "../Order/Order";


const Orders = () => {
    const dishes = useSelector(state => state.cart.dishes);
    const menu = useSelector(state => state.menu.menu);
    const loading = useSelector(state => state.menu.loading);

    let menuOutput = Object.entries(dishes).map(([dishName, qty],i) =>  (

        <Order
            key={i}
            index={i}
            name={dishName}
            qty={qty}
            menu={menu}
        />
    ));

    if (loading) {
        menuOutput = <Spinner/>;
    }

    return menuOutput;
};

export default Orders;