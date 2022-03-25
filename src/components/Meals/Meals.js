import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = () => {
    const [meals, setMeals] = useState([]);
    useEffect(()=>{
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=a')
        .then(res=>res.json())
        .then(data=>setMeals(data.meals))
    },[])
    const addToCart = (props) =>{
        console.log(props)
    };
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    meals.map(meal=><Meal meal={meal} key={meal.idMeal} addToCart = {addToCart}></Meal>)
                }
            </div>
            <div className="cart-container">
                <h3>Order Summery</h3>
                <h4>Total Order: </h4>
            </div>
        </div>
    );
};

export default Meals;