import {
    FETCH_MENU_FAILURE,
    FETCH_MENU_REQUEST,
    FETCH_MENU_SUCCESS,
} from "../actionTypes";

const initialState = {
    loading: false,
    fetchError: null,
    menu: []
};

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MENU_REQUEST:
            return {...state, loading: true};
        case FETCH_MENU_SUCCESS:
            return {...state, loading: false, menu: action.menu};
        case FETCH_MENU_FAILURE:
            return {...state, loading: false, fetchError: action.error};
        default:
            return state;
    }
};

export default menuReducer;