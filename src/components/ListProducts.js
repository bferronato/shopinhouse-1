import { useState } from "react"
import { fetchProducts } from "../services/api"

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
                </div>
            ))}
        </div>
    );
}

export default ListProducts;