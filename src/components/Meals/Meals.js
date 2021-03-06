import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
        .then(res=>res.json())
        .then(data=>setMeals(data.meals))
    },[])
    const addToCart = (meal) =>{
        const newCart= [...cart,meal]
        setCart(newCart)
    };
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    meals.map(meal=><Meal meal={meal} key={meal.idMeal} addToCart = {addToCart}></Meal>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Meals;