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
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    meals.map(meal=><Meal meal={meal} key={meal.idMeal}></Meal>)
                }
            </div>
            <div className="cart-container">
                <h1>This is a cart</h1>
            </div>
        </div>
    );
};

export default Meals;