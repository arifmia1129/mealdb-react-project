import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Meal.css";
const Meal = (props) => {
    const { strMeal, strMealThumb, strInstructions } = props.meal;
    let navigate = useNavigate();
    const showMealDetail = (id) => {
        navigate(`meal/${id}`);
    }
    // console.log(props.meal);
    return (
        <div className='card border-4 my-5 rounded-xl'>
            <div>
                <div className='p-2'><img className='w-full rounded-xl' src={strMealThumb} alt="" /></div>
            </div>
            <hr />
            <h3 className='text-xl font-bold'>{strMeal}</h3>
            <p>{strInstructions.slice(0, 100)}.</p>
            <br />
            <br />
            <button onClick={() => showMealDetail(props.meal.idMeal)} className='border-2 border-blue-600 px-5 py-2 rounded-lg'>Details</button>
        </div>
    );
};

export default Meal;