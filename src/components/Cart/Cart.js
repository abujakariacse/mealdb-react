import React from 'react';

const Cart = (props) => {
    console.log(props.cart)
    const {cart} = props;
    let shipping = 50 * cart.length;

    let total = 0;
    for(const meal of cart){
        total  = total + parseFloat(meal.idMeal/100);
    }
    return (
        <div>
            <h4>Total Order: {cart.length}</h4>
            <h4>Price: ${total.toFixed(2)}</h4>
            <h4>Shipping : ${shipping}</h4>
            <h4>Tax: </h4>

            
        </div>
    );
};

export default Cart;