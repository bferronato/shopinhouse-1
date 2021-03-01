import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../redux/product/productSelector';
import { doCheckout } from '../redux/product/productAction';
import BaseView from '../views/BaseView';
import '../styles/ShopCart.css';
import PurchaseButtons from './PurchaseButtons';
import ShopCartTotal from './ShopCartTotal';

const ShopCart = () => {

    const dispatch = useDispatch();
    const cart = useSelector(getCart);

    const checkout = () => {
        alert("A compra foi processada com sucesso, Obrigado!");
        dispatch(doCheckout());
    };

    return (
        <BaseView title="Carrinho">
            <div className='shop__cart' >
                <div className="cart__container">
                    
                    {(cart.length > 0) &&
                        <div className="cart__list__header">
                            <div>&nbsp;</div>
                            <div className="cart__list__header__title">
                                <div>Preço UN.</div>
                                <div>Quantidade</div>
                                <div>Subtotal</div>
                            </div>
                        </div>
                    }

                    {(cart.length > 0) &&
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
                                                {(product.price * product.cartAmount)
                                                    .toLocaleString("pt-BR",
                                                        { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }
                                                    )}
                                            </div>
                                        </div>
                                    </div>
                                    {cart.length - 1 > i &&
                                        <div className="cart__list__body__divider"></div>
                                    }
                                </React.Fragment>
                            ))}
                        </div>
                    }

                    {(cart.length > 0) &&
                        <div className="cart__list__footer">
                            <div>&nbsp;</div>
                            <div className="cart__list__footer__info">
                                <ShopCartTotal cart={cart} />
                                <button className="cart__list__footer__info__button" onClick={() => checkout()}>Finalizar Compra</button>
                            </div>
                        </div>
                    }

                    {(cart.length == 0) &&
                        <h2 className="cart_list_empty">Não existem produtos no carrinho.</h2>
                    }
                </div>
            </div >
        </BaseView>
    );
}

export default ShopCart;