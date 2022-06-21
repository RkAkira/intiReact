// eslint-disable-next-line to the line before.
import React  from 'react';
import {plantList} from "../datas/plantList";

function ShoppingList(){
    const cat = []
    plantList.forEach((plant)=>
    cat.push(plant.category))
    console.log(cat)

    return (
        <div>
            <ul>
                {cat.map((data)=>(
                    <li key={data}>{data}</li>
                    ))}
            </ul>
            <ul>
                {plantList.map((plant) => (
                    <li key={plant.id}>{ plant.name }</li>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList