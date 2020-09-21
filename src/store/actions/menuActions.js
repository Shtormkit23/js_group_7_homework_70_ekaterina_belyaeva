import {
    FETCH_MENU_FAILURE,
    FETCH_MENU_REQUEST,
    FETCH_MENU_SUCCESS,
} from "../actionTypes";
import axios from "../../axios-orders";

const fetchMenuRequest = () => {
    return {type: FETCH_MENU_REQUEST};
}

const fetchMenuSuccess = menu => {
    return {type: FETCH_MENU_SUCCESS, menu};
}

const fetchMenuFailure = error => {
    return {type: FETCH_MENU_FAILURE, error};
}

export const fetchMenu = () => {
    return async dispatch => {
        dispatch(fetchMenuRequest());
        try {
            const response = await axios.get('/menu.json');
            const fetchedMenu = Object.keys(response.data).map(id => {
                return {...response.data[id], id};
            });
            dispatch(fetchMenuSuccess(fetchedMenu));
        } catch (e) {
            dispatch(fetchMenuFailure(e));
        }
    };
};