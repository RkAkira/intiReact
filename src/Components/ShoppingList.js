// eslint-disable-next-line to the line before.
import React  from 'react';
import {plantList} from "../datas/plantList";
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'
import Categories from "./Categories";
import {useState} from "react";



function ShoppingList({cart,updateCart}){
    const [activeCategory, setActiveCategory] = useState('')
    const categories = plantList.reduce(
        (acc, plant) =>
            acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    )
    function addToCart(name, price) {
        const currentPlantSaved = cart.find((plant) => plant.name === name)
        if (currentPlantSaved) {
            const cartFilteredCurrentPlant = cart.filter(
                (plant) => plant.name !== name
            )
            updateCart([
                ...cartFilteredCurrentPlant,
                { name, price, amount: currentPlantSaved.amount + 1 }
            ])
        } else {
            updateCart([...cart, { name, price, amount: 1 }])
        }
    }

    return (
        <div className='lmj-shopping-list'>
            <Categories
                categories={categories}
                setActiveCategory={setActiveCategory}
                activeCategory={activeCategory}
            />
            <ul className='lmj-plant-list'>
                {plantList.map((plant) => (
                    plant.category === activeCategory ?(
                    <div key={plant.id}>
                        <PlantItem id={plant.id} name={plant.name} cover={plant.cover} light={plant.light} water={plant.water} />
                        <button onClick={() => addToCart(plant.name, plant.price)}>Ajouter</button>
                    </div>):null
                    ))}

            </ul>
        </div>
    )
}

export default ShoppingList