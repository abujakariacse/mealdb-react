import React from 'react';
import './Meal.css'

const Meal = (props) => {
    const {strMealThumb,strMeal,strCategory,strArea,strInstructions} = props.meal;
    return (
        <div className='meal'>
            <img className='foodimg' src={strMealThumb} alt="" />
            <h4>Name: {strMeal}</h4>
            <p className='subtext'>Category: {strCategory}</p>
            <p className='subtext'>Manufacturer: {strArea}</p>
            <p>{strInstructions.slice(4,100)}</p>
            <button>Add to Cart</button>
        </div>
    );
};

export default Meal;