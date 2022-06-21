// eslint-disable-next-line to the line before.
import React  from 'react';
import {plantList} from "../datas/plantList";
import '../styles/ShoppingList.css'

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
                    <li key={plant.id} className='lmj-plant-item'>{ plant.name }{plant.isSpecialOffer &&<div className='lmj-sales'>Soldes</div>}</li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList