import React from 'react';
import './Meal.css'

const Meal = (props) => {
    console.log(props.meal);
    const {strMealThumb,strMeal,strCategory,strArea,strInstructions} = props.meal;
    return (
        <div className='meal'>
            <img className='foodimg' src={strMealThumb} alt="" />
            <h4>Name: {strMeal}</h4>
            <p>Category: {strCategory}</p>
            <p>Manufacturer: {strArea}</p>
            <p>{strInstructions.slice(4,100)}</p>
        </div>
    );
};

export default Meal;