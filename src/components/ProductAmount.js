
import React from 'react'
import { FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { incrementAmount, decrementAmount } from '../redux/product/productAction';
import './ProductAmount.css';

const ProductAmount = (props) => {

    const dispatch = useDispatch();

    const increment = (product) => {
        dispatch(incrementAmount(product.id));
    }

    const decrement = (product) => {
        dispatch(decrementAmount(product.id));
    }

    return (
        <div className="product__amount__container">
            <button
                className="product__amount__sub"
                onClick={() => decrement(props.product)}
            >{props.product.cartAmount > 1 ? "-" : <FaTrash />}
            </button>
            <div className="product__amount">
                {props.product.cartAmount}
            </div>
            <button
                className="product__amount__sum"
                onClick={() => increment(props.product)}
            >+</button>
        </div>
    )
}

export default ProductAmount;