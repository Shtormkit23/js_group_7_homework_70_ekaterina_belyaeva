import React from 'react';
import './TotalPrice.css';

const TotalPrice = props => {
    return (
        <div className="TotalPrice">
            <p>Delivery: {props.delivery} KGS</p>
            <p>Total price: {props.totalPrice} KGS</p>
            <button className="Button"
                    disabled={!props.purchasable}
                    onClick={props.ordered}
            >Place Order</button>
        </div>
    );
};

export default TotalPrice;