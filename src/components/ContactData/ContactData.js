import React, {useState} from 'react';
import './ContactData.css';
import {Redirect} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import Spinner from "../UI/Spinner/Spinner";
import {createOrder} from "../../store/actions/cartActions";

const ContactData = props => {
  const [customer, setCustomer] = useState({
    name: '',
    street: '',
    phone: ''
  });



  const dishes = useSelector(state => state.cart.dishes);
  const loading = useSelector(state => state.cart.loading);
  const ordered = useSelector(state => state.cart.ordered);

  const dispatch = useDispatch();

  const customerDataChanged = event => {
    const name = event.target.name;
    const value = event.target.value;
    setCustomer(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const orderHandler = async event => {
    event.preventDefault();

    const order = {
      dishes: dishes,
      customer: {...customer}
    };
    dispatch(createOrder(order));
      const name = 'name';
      const phone = 'phone';
      const street = 'street';

    setCustomer(prevState => ({
        ...prevState,
        [name]: '',
        [phone]: '',
        [street]: ''
    }))
  };

  let form = (
    <form onSubmit={orderHandler}>
      <input
        className="Input" placeholder="Your Name"
        type="text" name="name"
        value={customer.name}
        onChange={customerDataChanged}
        required
      />
      <input
        className="Input" placeholder="Your Phone"
        type="phone" name="phone"
        value={customer.phone}
        onChange={customerDataChanged}
        required
      />
      <input
        className="Input" placeholder="Street"
        type="text" name="street"
        value={customer.street}
        onChange={customerDataChanged}
        required
      />
      <button className="Button">ORDER</button>
        <button className="Button"
                onClick={props.purchaseCancelled}
        >Cancel</button>
    </form>
  );

  if (loading) {
    form = <Spinner/>;
  }

  if (ordered) {
    return <Redirect to="/"/>
  }

  return (
    <div className="ContactData">
      <h4>Enter your Contact Data</h4>
      {form}
    </div>
  );
};
export default ContactData;
