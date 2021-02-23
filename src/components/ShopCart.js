import HomeView from "../views/HomeView";
import './ShopCart.css';

const ShopCart = () => {

    return (
        <HomeView title="Carrinho de compras">
            <div className='shop__cart'>
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
                        <div className="cart__list__body">
                            <div className="cart__list__body__product__title">
                                Parafusadeira automática Britânia
                            </div>
                            <div className="cart__list__body__product">
                                <div>249,00</div>
                                <div>1</div>
                                <div>249,00</div>
                            </div>
                        </div>
                        <div className="cart__list__body__divider"></div>
                        <div className="cart__list__body">
                            <div className="cart__list__body__product__title">
                                Outro produto
                            </div>
                            <div className="cart__list__body__product">
                                <div>17,90</div>
                                <div>2</div>
                                <div>35,80</div>
                            </div>
                        </div>
                    </div>

                    <div className="cart__list__footer">
                        <div>&nbsp;</div>
                        <div className="cart__list__footer__info">
                            <p className="cart__list__footer__info__subtotal"><span>R$ </span>284,80</p>
                            <button className="cart__list__footer__info__button">Finalizar Compra</button>
                        </div>
                    </div>

                </div>
            </div>
        </HomeView>
    );
}

export default ShopCart;