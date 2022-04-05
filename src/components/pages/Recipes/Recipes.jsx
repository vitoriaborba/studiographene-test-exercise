import React, { useState, useEffect } from 'react'
import './Recipes.css'
import axios from 'axios';

function Recipes() {
  const [foods, setFoods] = useState([]);
  
  useEffect(() => {
    axios
      .get(`https://studiographene-exercise-api.herokuapp.com/foods`)
      .then((response) => {
        setFoods(response.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="dining">
      <div id="recipes">
         
    </div>
    </div>  
  )
}

export default Recipes