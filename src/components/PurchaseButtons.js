import React, { useEffect, Fragment } from 'react';
import '../styles/PurchaseButtons.css'
import { FaTrash } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, incrementAmount, decrementAmount } from '../redux/product/productAction'
import { getCart } from '../redux/product/productSelector'

const PurchaseButtons = ({ product }) => {

    const dispatch = useDispatch();
    const cart = useSelector(getCart)

    function handleAdd(product) {
        dispatch(addToCart(product))
    };

    function handleIncrement(product) {
        dispatch(incrementAmount(Number(product.id)))
    }

    function handleDecrement(product) {
        dispatch(decrementAmount(Number(product.id)))
    }

    const firstRequest = () => {
        let request = true

        cart.map((item) => {
            if (item.id === product.id) { request = false }
        })

        return request
    }

    const amountCont = () => {
        let amount = 0

        cart.map((item) => {
            if (item.id === product.id) { amount = item.amountCont }
        })

        return amount
    }

    useEffect(()=> {
        console.log(cart);
    },[cart])


    return (
        <div className="purchaseButtons__body">
            {firstRequest() && <button className="Card__footer__button__buy" onClick={() => handleAdd(product)}>Comprar</button>}
            {!firstRequest() &&
                <Fragment>
                    <button className="Card__footer__amountBag__sub" onClick={() => handleDecrement(product)}>{amountCont() > 1 ? "-" : <FaTrash />}</button>
                    <span className="Card__footer__amountBag">{amountCont()}</span>
                    <button  className="Card__footer__amountBag__sum" onClick={() => handleIncrement(product)}>+</button>
                </Fragment>
            }

        </div>
    );
};

export default PurchaseButtons;