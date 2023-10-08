'use client';
import styles from './FoodInformation.module.css'
import { useState, useEffect } from 'react';
import axios from 'axios';




export default function FoodInformation() {
    const [food,setFood] = useState([]);


    const getFood = async () => {
      const data = await axios.get('/api/food')
      const food = await data.data;
      setFood(await food);
      console.log(food)
    
    }


  useEffect(()=> {
    getFood();
  },[])
    return (
       <div>
        {food?.map((food,index) => {
          return (
              <div key={index}>
                <p>{food.Name}</p>

              </div>
          )
        })}
        </div>
    )
}