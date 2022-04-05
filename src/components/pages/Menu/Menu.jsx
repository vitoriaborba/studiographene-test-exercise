import React, { useState, useEffect } from 'react'
import './Menu.css'
import axios from 'axios';

function Menu() {
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
    <div className="menu" id="menu">   
      <div className="grid">
          {foods && 
            foods.map((food) => {
              return ( 
              <div className="info">
                <h2>{food.title} </h2>
                <p>({food.type})</p>
                <p>{food.description}</p> 
                <h4>{food.price}£</h4>
                </div>
              )
            })
          }
      </div>
  </div>
  )
}

export default Menu