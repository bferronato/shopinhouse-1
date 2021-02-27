import React, { useEffect, Fragment, useState } from 'react';
import '../styles/PurchaseButtons.css'
import { FaTrash } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, incrementAmount, decrementAmount, removeFromCart } from '../redux/product/productAction'
import { getCart } from '../redux/product/productSelector'

const PurchaseButtons = ({ product, forceUpdate = null }) => {

    const dispatch = useDispatch();
    const cart = useSelector(getCart)
    const [amount, setAmount] = useState(0)

    useEffect(() => {
        setAmount(cart.filter(item => item.id === product.id).map(item => item.cartAmount))
    }, [])

    function handleAdd(product) {
        dispatch(addToCart(product))
        setAmount(1)
    }

    function handleIncrement(product) {
        dispatch(incrementAmount(product.id))

        setAmount(cart.filter(item => item.id === product.id).map(item => item.cartAmount))
        if (forceUpdate) forceUpdate();
    }

    function handleDecrement(product) {
        dispatch(decrementAmount(product.id))

        setAmount(cart.filter(item => item.id === product.id).map(item => item.cartAmount))
        if (forceUpdate) forceUpdate();
    }

    function handleRemoval(product1) {
        dispatch(removeFromCart(product1.id))
        if (forceUpdate) forceUpdate();
    }

    const firstRequest = () => {
        let request = true

        cart.map((item) => { if (item.id === product.id) { request = false } })

        return request
    }

    return (
        <div className="purchaseButtons__body">
            {firstRequest() && <button className="Card__footer__button__buy" onClick={() => handleAdd(product)}>Comprar</button>}
            {!firstRequest() &&
                <Fragment>
                    <button className="Card__footer__amountBag__sub" onClick={() => amount > 1 ? handleDecrement(product) : handleRemoval(product)}>{amount > 1 ? "-" : <FaTrash />}</button>
                    <span className="Card__footer__amountBag">{amount}</span>
                    <button className="Card__footer__amountBag__sum" onClick={() => handleIncrement(product)}>+</button>
                </Fragment>
            }
        </div>
    );
};

export default PurchaseButtons;