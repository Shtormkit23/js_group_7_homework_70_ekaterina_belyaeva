import {ADD_DISHES,
    INIT_DISHES,
    REMOVE_DISHES,
    SET_PURCHASING,
    ORDER_FAILURE,
    ORDER_REQUEST,
    ORDER_SUCCESS,
    INIT_ORDER
} from "../actionTypes";

const INITIAL_DISHES = {};

const DELIVERY = 100;
const INITIAL_PRICE = 0;

const initialState = {
    dishes: {...INITIAL_DISHES},
    totalPrice: INITIAL_PRICE,
    delivery: DELIVERY,
    purchasing: false,
    ordered: false,
    error: null,
    fetchError: null,
    orders: []
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_DISHES:
            return {
                ...state,
                dishes: {
                    ...state.dishes,
                    [action.dishesName]:  typeof state.dishes[action.dishesName] === 'undefined' ?
                        1 : state.dishes[action.dishesName] + 1
                },
                totalPrice: state.totalPrice + action.dishesPrice
            };
        case REMOVE_DISHES:
            return {
                ...state,
                dishes: {
                    ...state.dishes,
                    [action.dishesName]: 0
                },
                totalPrice: state.totalPrice - (action.dishesPrice * action.dishesQty)
            };
        case SET_PURCHASING:
            return {
                ...state,
                purchasing: action.purchasing
            };
        case INIT_DISHES:
            return {
                ...state,
                dishes: {...INITIAL_DISHES},
                totalPrice: INITIAL_PRICE + DELIVERY
            }
        case ORDER_REQUEST:
            return {...state, loading: true};
        case ORDER_SUCCESS:
            return {...state, loading: false, ordered: true, totalPrice: INITIAL_PRICE, purchasing: false, dishes: {...INITIAL_DISHES}};
        case ORDER_FAILURE:
            return {...state, loading: false, error: action.error};
        case INIT_ORDER:
            return {...state, ordered: false};
        default:
            return state;
    }
};

export default cartReducer;