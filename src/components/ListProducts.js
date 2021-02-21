import { useState } from "react"
import { fetchProducts } from "../services/api"
import Card from "../components/Card"

const ListProducts = () => {

    const [products, setProducts] = useState([]);

    fetchProducts().then(function (result) {
        setProducts(result)

    });

    return (
        <div className='listProducts'>
            LIST PRODUCTS
            {products.map((product, i) => (
                <div key={i}>
                    {product.name} - {product.type}
                    <Card product={product}></Card>
                </div>
            ))}
        </div>
    );
}

export default ListProducts;