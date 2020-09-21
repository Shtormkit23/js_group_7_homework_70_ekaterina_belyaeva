import {
    ADD_DISHES,
    INIT_DISHES,
    REMOVE_DISHES,
    SET_PURCHASING,
    INIT_ORDER,
    ORDER_FAILURE,
    ORDER_REQUEST,
    ORDER_SUCCESS
} from "../actionTypes";

import axiosOrders from "../../axios-orders";

export const addDishes = (dishesName,dishesPrice) => {
    return {type: ADD_DISHES, dishesName,dishesPrice}
};

export const removeDishes = (dishesName,dishesPrice, dishesQty) => {
    return ({type: REMOVE_DISHES,dishesName,dishesPrice, dishesQty});
};

export const setPurchasing = purchasing => {
    return ({type: SET_PURCHASING, purchasing: purchasing});
};

export const initDishes = () => {
    return {type: INIT_DISHES};
};

export const orderRequest = () => {
    return {type: ORDER_REQUEST};
};

export const orderSuccess = () => {
    return {type: ORDER_SUCCESS};
};

export const orderFailure = error => {
    return {type: ORDER_FAILURE, error};
};

export const initOrder = () => {
    return {type: INIT_ORDER};
};

export const createOrder = order => {
    return async dispatch => {
        dispatch(orderRequest());
        try {
            const response = await axiosOrders.post("/orders.json", order);
            dispatch(orderSuccess(response.data));
        } catch (e) {
            dispatch(orderFailure(e));
        }
    };
};


