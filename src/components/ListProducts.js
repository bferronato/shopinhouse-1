import { useState, useEffect, Fragment } from "react"
import { fetchProducts } from "../services/api"
import Card from "../components/Card"
import '../styles/ListProducts.css'

const ListProducts = () => {

    const [products, setProducts] = useState([]);

    fetchProducts().then(function (result) {
        setProducts(result)
    });

    return (
        <Fragment>
            <h1 className="ListProducts__title">Bem vindo!</h1>
            <div className='listProducts'>

                {products.map((item) => {
                    return <Card key={item.sku} product={item} />
                })}
            </div>
        </Fragment>
    );
}

export default ListProducts;