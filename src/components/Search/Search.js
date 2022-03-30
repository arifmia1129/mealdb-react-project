import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Search = () => {
    const [searchText, setSearchText] = useState("");
    const [meals, setMeals] = useState([]);

    const text = (e) => {
        setSearchText(e.target.value);
    }
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [searchText])
    return (
        <div>
            <h3 className='md:text-4xl m-10 font-bold font-thin border-4 p-2 border-indigo-500'>Search food that you want :</h3>

            <input onChange={text} type="text" name="" id="" placeholder='Search here' className='border-2 md:w-1/3 px-5 py-2 border-black' />
            {
                meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
            }
        </div>
    );
};

export default Search;