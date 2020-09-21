import React, {useEffect} from 'react';
import Spinner from "../../components/UI/Spinner/Spinner";
import {useDispatch, useSelector} from "react-redux";
import {fetchMenu} from "../../store/actions/menuActions";
import DishCard from "../DishCard/DishCard";


const Menu = props => {
    const menu = useSelector(state => state.menu.menu);
    const loading = useSelector(state => state.menu.loading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMenu());
    },[dispatch]);

    let menuOutput = menu.map(dish => (
            <DishCard
                added={() => props.addDishesHandler(dish.name,dish.price)}
                key={dish.id}
                name={dish.name}
                price={dish.price}
                url={dish.url}
            />
    ));

    if (loading) {
        menuOutput = <Spinner/>;
    }

    return menuOutput;
};

export default Menu;