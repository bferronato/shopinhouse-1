import { useState, useEffect } from "react"
import { fetchProducts } from "../services/api"
import Card from "../components/Card"
import '../styles/ListProducts.css'

const ListProducts = () => {

    const [products, setProducts] = useState([]);
    const [activeCard, setActiveCard] = useState('')

    const [bag, setBag] = useState([])
    const [orderBag, setOrderbag] = useState('')
    const [operation, setOperation] = useState('')

    fetchProducts().then(function (result) {
        setProducts(result)
    });

    useEffect(() => {
        const amountBag = []

        products.map((item => {
            amountBag.push({id: item.sku, amount: 0})
        }))
        setBag(amountBag)
    },[products])

    useEffect(() => {
        const preventCard = bag
        for (const item in preventCard) {
            if (preventCard[item].id === orderBag) {
                if (operation === 'sum') {
                    preventCard[item].amount += 1
                } else { preventCard[item].amount -= 1 }
                setBag(preventCard)
                break
            }
        }
        setOrderbag(0)
    }, [orderBag]) 
    
    /* const bagOrderId = (id) => {
        let amountBag = {}
        bag.map((item => {
            if (id === item.id) {
                amountBag = {id: id, amount: item.amount}
                return amountBag
            }
        }))
    } */

    {/* <HomeView title="Bem vindo!">
        <div className='list__products'>
            {products.map((product, i) => (
                <Card product={product} key={i}></Card>
            ))}
        </div>
    </HomeView> */}
    return (
        <div className='listProducts'>
            {products.map((item, i) => {
                if (activeCard.length === 0) {
                    return <Card product={item} key={i} bagOrder={bag} setOrderbag={setOrderbag} setOperation={setOperation} setActiveCard={setActiveCard} />
                } else if (item.sku === activeCard) {
                    return <Card product={item} key={i} bagOrder={bag} setOrderbag={setOrderbag} setOperation={setOperation} setActiveCard={setActiveCard} />
                }
            })}
        </div>
    );
}

export default ListProducts;