import React from 'react';
import './Meal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const Meal = (props) => {
    const {meal,addToCart} = props;
    const {strMealThumb,strMeal,strCategory,strArea,strInstructions} = meal;
    return (
        <div className='meal'>
            <img className='foodimg' src={strMealThumb} alt="" />
            <h4>Name: {strMeal}</h4>
            <p className='subtext'>Category: {strCategory}</p>
            <p className='subtext'>Manufacturer: {strArea}</p>
            <p>{strInstructions.slice(4,100)}</p>
            <button onClick={()=>addToCart(meal)}>Add to Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Meal;