import React, { Fragment, useState, useEffect } from 'react';
import PurchaseButtons from './PurchaseButtons';
import '../styles/CardDetail.css';

const Card = ({ product }) => {
  return (
    <Fragment>
      <article className="Card__body">
        <header>
          <img
            className="Card__header__img"
            src={product.image}
            alt={product.description}
          />
        </header>
        <section>
          <header>
            <span className="Card__section__title">{product.name}</span>
          </header>
          <section>
            <span className="Card__section__price__high">
              {'R$ ' +
                String(product.price).substr(
                  0,
                  String(product.price).length - 3,
                )}
              <span className="Card__section__price__small">
                {',' +
                  String(product.price).substr(
                    String(product.price).length - 2,
                    String(product.price).length,
                  )}
              </span>
            </span>
            <span className="Card__section__installments">
              {`ou ${String(product.price).length * 2}x de ${(
                product.price /
                (String(product.price).length * 2)
              ).toFixed(2)}`}
            </span>
          </section>
        </section>
        <footer className="Card__footer__buy">
          <PurchaseButtons id={product.sku} />
        </footer>
      </article>
    </Fragment>
  );
};

export default Card;
