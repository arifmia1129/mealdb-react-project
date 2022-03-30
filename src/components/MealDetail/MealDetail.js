import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MealDetail = () => {
    const { id } = useParams();
    const [detail, setDetail] = useState({});
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
            .then(res => res.json())
            .then(data => setDetail(data.meals[0]));
    }, [id])
    console.log(detail);
    return (
        <div>
            <h3 className='text-3xl font-bold m-5'>Meal Detail</h3>
            <img className='w-1/4 mx-auto' src={detail.strMealThumb} alt="" />
            <h4>Id: {detail.idMeal}</h4>
            <h4 className='text-xl font-bold'>Name: {detail.strMeal}</h4>
            <p className='m-10 border-2 border-black p-5 rounded-lg'>{detail.strInstructions}</p>
        </div>
    );
};

export default MealDetail;