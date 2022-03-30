import React from 'react';

const Meal = (props) => {
    const { strMeal } = props.meal;
    return (
        <div>
            <li>{strMeal}</li>
        </div>
    );
};

export default Meal;