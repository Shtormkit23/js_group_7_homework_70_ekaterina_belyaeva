import React from 'react';
import './DishCard.css';

const DishCard = props => {

    return (
        <div className="DishCard">
            <div className='DishInfo'>
                <div className='ImgBlock'>
                    <img className='DishCardImg' src={props.url} alt="dishes"/>
                </div>
                <div className='NameAndPrice'>
                    <h3>{props.name}</h3>
                    <p>KGZ: {props.price}</p>
                </div>
            </div>
            <button className="Add Button" onClick={props.added}>Add to cart</button>
        </div>
    )
};

export default DishCard;