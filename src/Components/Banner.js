import React  from 'react';
import Cart from "./Cart";
import '../styles/Banner.css'
import logo from '../assets/logo.png'

function Header() {
    return(
        <div className='lmj-banner'>
            <img src={logo} alt='La maison jungle' className='lmj-logo'/>
            <h1 className='lmj-title'>La Maison Jungle</h1>
        </div>
    )
}
function Description() {
    const titre = "Ici achetez toutes les plantes dont vous avez toujours rêvé"
    return <p>{ titre.toUpperCase() }</p>
}


function Banner() {
    return <div>
        <Header />
        <Cart />
        <Description />
    </div>
}

export default Banner