import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Meal.css";
const Meal = (props) => {
    const { strMeal, strMealThumb, strInstructions } = props.meal;
    let navigate = useNavigate();
    const showMealDetail = (id) => {
        navigate(`/meal/${id}`);
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
            <button onClick={() => showMealDetail(props.meal.idMeal)} className='border-2 border-blue-600 px-5 py-2 rounded-lg mr-2'>Details</button>
            <Link
                className='border-2 border-green-600 px-5 py-2 rounded-lg' to={`${props.meal.idMeal}`}>More Info</Link>
        </div>
    );
};

export default Meal;