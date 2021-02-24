import React, { Fragment, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import PurchaseButtons from './PurchaseButtons'
import '../styles/Card.css';


const Card = ({ product }) => {
    const history = useHistory()

    return (
        <Fragment>
            <article className="Card__body">
                <header><img className="Card__header__img" src={product.imageUrl} alt={product.description} onClick={() => history.push(`/${product.id}`)}/></header>
                <section>
                    <header><span className="Card__section__title" onClick={() => history.push(`/${product.id}`)}>{product.name}</span></header>
                    <section>
                        <span className="Card__section__price__high">
                            {"R$ " + String(product.price).substr(0, String(product.price).length - 3)}
                            <span className="Card__section__price__small">
                                {"," + String(product.price).substr(String(product.price).length - 2, String(product.price).length)}
                            </span>
                        </span>
                        <span className="Card__section__installments">
                            {`ou ${String(product.price).length * 2}x de ${(product.price / (String(product.price).length * 2)).toFixed(2)}`}
                        </span>
                    </section>
                </section>
                <footer className="Card__footer__buy">
                    <PurchaseButtons product={product}/>
                </footer>
            </article>
        </Fragment>
    );
};

export default Card;