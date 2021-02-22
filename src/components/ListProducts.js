import { useState } from "react"
import { fetchProducts } from "../services/api"
import './ListProducts.css';
import Card from "../components/Card"

const ListProducts = () => {

    const [products, setProducts] = useState([]);

    fetchProducts().then(function (result) {
        setProducts(result)

    });

    return (
        <div className='list__products'>
            {products.map((product, i) => (
                <Card product={product} key={i}></Card>
            ))}
        </div>
    );
}

export default ListProducts;