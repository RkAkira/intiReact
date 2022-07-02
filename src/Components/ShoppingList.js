// eslint-disable-next-line to the line before.
import React  from 'react';
import {plantList} from "../datas/plantList";
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'



function ShoppingList(){

   const cat = plantList.reduce(
       (acc, plant) =>
           acc.includes(plant.category) ? acc : acc.concat(plant.category),
       []
   )
    return (
        <div>
            <ul>
                {cat.map((data)=>(
                    <li key={data}>{data}</li>
                    ))}
            </ul>
            <ul className='lmj-plant-list'>
                {plantList.map((plant) => (
                    <PlantItem id={plant.id} name={plant.name} cover={plant.cover} light={plant.light} water={plant.water} />
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList