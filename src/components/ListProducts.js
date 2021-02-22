import { useState, useEffect } from "react"
import { fetchProducts } from "../services/api"
import Card from "../components/Card"
import '../styles/ListProducts.css'

const ListProducts = () => {

    const [products, setProducts] = useState([]);
    const [activeCard, setActiveCard] = useState('')

/*  const [bag, setBag] = useState([])
    const [orderBag, setOrderbag] = useState('')
    const [operation, setOperation] = useState('') */

    fetchProducts().then(function (result) {
        setProducts(result)
    });

    /* useEffect(() => {
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
    }, [orderBag]) */

    return (
        <div className='listProducts'>
            {products.map((item, i) => {
                if (activeCard.length === 0) {
                    return <Card product={item} key={i} setActiveCard={setActiveCard} />
                } else if (item.sku === activeCard) {
                    return <Card product={item} key={i} setActiveCard={setActiveCard} />
                }
            })}
        </div>
    );
}

export default ListProducts;