import Cart from "./Cart";

function Header() {
    return <h1>La Maison Jungle</h1>
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