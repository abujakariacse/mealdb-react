import React from 'react';
import './Cart.css'

const Cart = (props) => {
    console.log(props.cart)
    const {cart} = props;
    let shipping = 50 * cart.length;
    let total = 0;
    for(const meal of cart){
        total  = total + parseFloat(meal.idMeal/100);
    };
    let tax = (total * 0.1);
    
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h3>Order Summery</h3>
            <h4>Total Order: {cart.length}</h4>
            <h4>Price: ${total.toFixed(2)}</h4>
            <h4>Shipping : ${shipping}</h4>
            <h4>Tax: ${tax.toFixed(2)}</h4>
            <h3>Grand Total: {grandTotal.toFixed(2)}</h3>

            
        </div>
    );
};

export default Cart;