import React from 'react';
import './Order.css';
import {removeDishes} from "../../store/actions/cartActions";
import {useDispatch} from "react-redux";

const Order = props => {
    let itemDish = props.menu.filter(dish => {
        if(props.name === dish.name){
            return dish;
        }
        return [];
    })

    const dispatch = useDispatch();


    return props.qty > 0 ? (
        <div className="Order">
            <p>{props.name} <span>x{props.qty}</span>  {itemDish[props.index].price} - KGS</p>
                <button className="Remove Button" onClick={() => dispatch(removeDishes(props.name, itemDish[props.index].price, props.qty))
                }>delete</button>
        </div>
    ): ''
};

export default Order;

