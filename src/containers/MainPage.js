import React, {useEffect} from 'react';
import './MainPage.css';
import {useDispatch, useSelector} from "react-redux";
import TotalPrice from "../components/TotalPrice/TotalPrice";
import Menu from "../components/Menu/Menu";
import {addDishes, initDishes, initOrder, setPurchasing} from "../store/actions/cartActions";
import Orders from "../components/Orders/Orders";
import Modal from "../components/UI/Modal/Modal";
import ContactData from "../components/ContactData/ContactData";

const MainPage = () => {
    const totalPrice = useSelector(state => state.cart.totalPrice);
    const delivery = useSelector(state => state.cart.delivery);
    const dishes = useSelector(state => state.cart.dishes);
    const purchasing = useSelector(state => state.cart.purchasing);
    const dispatch = useDispatch();

    const addDishesHandler = (dishesName,dishesPrice) => {
        dispatch(addDishes(dishesName,dishesPrice));
    };


    useEffect(() => {
        dispatch(initDishes());
    }, [dispatch]);

    const isPurchasable = () => {
        const sum = Object.values(dishes)
            .reduce((sum, el) => sum + el, 0);

        return sum > 0;
    };

    const purchaseHandler = () => {
        dispatch(setPurchasing(true));
        dispatch(initOrder());
    };

    const purchaseCancelHandler = () => {
        dispatch(setPurchasing(false));
    };

    return (
        <div className="MainPage">
            <Modal show={purchasing} closed={purchaseCancelHandler}>
                <ContactData
                    purchaseCancelled={purchaseCancelHandler}
                />
            </Modal>
            <div className="MainMenu">
                <div><h2>Menu:</h2></div>
                <Menu addDishesHandler={addDishesHandler}
                />
            </div>
            <div>
                <div><h2>Your order:</h2></div>
                <Orders />
                <TotalPrice
                    totalPrice={totalPrice}
                    delivery={delivery}
                    purchasable={isPurchasable()}
                    ordered={purchaseHandler}
                />
            </div>
        </div>
    )
};

export default MainPage;