import React  from 'react';
import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'
import '../styles/PlantItem.css'


function handleClick(number, type){
    if (type === 'light'){
        switch (number){
            case 1:
                alert("Cette plante requiert peu de lumière")
                break
            case 2:
                alert("Cette plante requiert modérement de lumière")
                break
            case 3:
                alert("Cette plante requiert beaucoup de lumière")
                break
            default:
                break
        }
    }
    else{
        switch (number){
            case 1:
                alert("Cette plante requiert peu d'eau")
                break
            case 2:
                alert("Cette plante requiert modérement d'eau")
                break
            case 3:
                alert("Cette plante requiert beaucoup d'eau")
                break
            default:
                break
        }
    }
}

function CareScale({scaleValue, careType}) {
    const range = [1,2,3]
    const scaleType = careType === 'light' ?
        (<img src={Sun} alt={`sun`}/>) : (<img src={Water} alt={`water`}/>)
    return(
        <div onClick={()=>handleClick(scaleValue,careType)}>
            {range.map((rangeElem)=>
                scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span>:null
            )}
        </div>
    )
}
function PlantItem({name,cover,id, light, water}) {
 return(
     <li key={ id } className='lmj-plant-item'>
         <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`}/>
         { name }
         <div>
             <CareScale careType='light' scaleValue={light} />
             <CareScale careType='water' scaleValue={water} />
         </div>

     </li>
 )
}
export default PlantItem