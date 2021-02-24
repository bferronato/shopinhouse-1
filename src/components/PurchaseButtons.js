import React, { useEffect } from 'react';
import '../styles/PurchaseButtons.css'
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/product/productAction'
import { getCart } from '../redux/product/productSelector'

const PurchaseButtons = ({ product }) => {

    const dispatch = useDispatch();

    const cart = useSelector(getCart)

    function handleAdd(product) {
        dispatch(addToCart(product))
    };

    
        useEffect(() => {
            console.log(cart);
        }, [cart])

    return (
        <div className="purchaseButtons__body">
            {true && <button className="Card__footer__button__buy" onClick={() => handleAdd(product)}>Comprar</button>}
               {/* /*  <Fragment>
                    <button style={activeDesc ? Card__footer__amountBag__sub__small : Card__footer__amountBag__sub__medium} className="Card__footer__amountBag__sub" onClick={backButton}>{amount() > 1 ? "-" : <FaTrash />}</button>
                    <span style={activeDesc ? Card__footer__amountBag_small : Card__footer__amountBag_medium} className="Card__footer__amountBag">{amount()}</span>
                    <button style={activeDesc ? Card__footer__amountBag__sum__small : Card__footer__amountBag__sum__medium} className="Card__footer__amountBag__sum" onClick={buyButton}>+</button>
                </Fragment> */ }
            
        </div>
    );
};

export default PurchaseButtons;