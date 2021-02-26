import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { getCart } from '../redux/product/productSelector';
import './ShopCart.css';
import PurchaseButtons from './PurchaseButtons';

const ShopCart = () => {

    const cart = useSelector(getCart);

    const [amount, setAmount] = useState(0)

    useEffect(() => {
        const total = cart.reduce(function (totalizer, cartItem) {
            return totalizer + (cartItem.price * cartItem.cartAmount);
        }, 0)
        setAmount(total);
    }, [cart])

    return (
        // <HomeView title="Carrinho de compras">
        <div className='shop__cart' >
            <div className="cart__container">
                <div className="cart__list__header">
                    <div>&nbsp;</div>
                    <div className="cart__list__header__title">
                        <div>Preço UN.</div>
                        <div>Quantidade</div>
                        <div>Subtotal</div>
                    </div>
                </div>

                <div className="cart__list__body__panel">
                    {cart.map((product, i) => (
                        <React.Fragment key={i}>
                            <div className="cart__list__body">
                                <div className="cart__list__body__product__title">
                                    {product.name}
                                </div>
                                <div className="cart__list__body__product">
                                    <div>
                                        {product.price.toLocaleString("pt-BR",
                                            { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }
                                        )}
                                    </div>
                                    <PurchaseButtons product={product} />
                                    <div className="cart__list__body__product__subtotal">
                                        {
                                            (product.price * product.cartAmount)
                                                .toLocaleString("pt-BR",
                                                    { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }
                                                )
                                        }
                                    </div>
                                </div>
                            </div>
                            {cart.length - 1 > i &&
                                <div className="cart__list__body__divider"></div>
                            }
                        </React.Fragment>
                    ))}
                </div>

                <div className="cart__list__footer">
                    <div>&nbsp;</div>
                    <div className="cart__list__footer__info">
                        <p className="cart__list__footer__info__subtotal">
                            <span>R$ </span>{amount.toLocaleString("pt-BR",
                                { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }
                            )}
                        </p>
                        <button className="cart__list__footer__info__button">Finalizar Compra</button>
                    </div>
                </div>

            </div>
        </div >
        // </HomeView>
    );
}

export default ShopCart;