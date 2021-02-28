import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCart, getCartAmout } from '../redux/product/productSelector';
import { doCheckout } from '../redux/product/productAction';
import BaseView from '../views/BaseView';
import './ShopCart.css';
import PurchaseButtons from './PurchaseButtons';
import ShopCartTotal from './ShopCartTotal';

const ShopCart = () => {

    const dispatch = useDispatch();
    const cart = useSelector(getCart);
    const carAmount = useSelector(getCartAmout);

    // Forca a renderizacao da tela ..
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const checkout = () => {
        if (carAmount === 0) {
            alert("Você não possui itens no seu carrinho.");
            return;
        } else {
            alert("A compra foi processada com sucesso, Obrigado!");
            dispatch(doCheckout());
        }
    };

    return (
        <BaseView title="Carrinho">
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
                                        <PurchaseButtons product={product} forceUpdate={forceUpdate} />
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

                    <div className="cart__list__footer">
                        <div>&nbsp;</div>
                        <div className="cart__list__footer__info">
                            <ShopCartTotal cart={cart} />
                            <button className="cart__list__footer__info__button" onClick={() => checkout()}>Finalizar Compra</button>
                        </div>
                    </div>

                </div>
            </div >
        </BaseView>
    );
}

export default ShopCart;