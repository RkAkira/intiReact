function Cart() {
    let lierre = 10
    let monstera = 8
    let fleur = 15
    return (
        <div>
            <h2>Panier</h2>
            <ul>
                <li>Monstera : { monstera }€</li>
                <li>Lierre : { lierre }€</li>
                <li>Bouquet de Fleur : { fleur }€</li>
            </ul>
            Total : { monstera+lierre+fleur }€
        </div>
    )
}

export default Cart