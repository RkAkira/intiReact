import React  from 'react';
import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'
import '../styles/PlantItem.css'

function CareScale({scaleValue, careType}) {
    const range = [1,2,3]
    const scaleType = careType === 'light' ?
        (<img src={Sun} alt={`sun`}/>) : (<img src={Water} alt={`water`}/>)
    return(
        <div>
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