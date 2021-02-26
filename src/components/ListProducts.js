import { useState, useEffect, Fragment } from "react"
import Card from "../components/Card"
import '../styles/ListProducts.css'
import { useDispatch, useSelector } from "react-redux"
import { asyncLoadAll } from "../redux/product/productAction"
import { getListingData } from "../redux/product/productSelector"


const ListProducts = () => {

    const products = useSelector(getListingData)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(asyncLoadAll());
    }, [dispatch])

    return (
        <Fragment>
            <h1 className="ListProducts__title">Bem vindo!</h1>
            <div className='listProducts'>

                {products?.map((item) => {
                    return <Card key={item.id} product={item} />
                })}
            </div>
        </Fragment>
    );
}

export default ListProducts;