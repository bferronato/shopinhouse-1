import { useState, useEffect, Fragment } from 'react';
import { fetchProducts } from '../services/api';
import CardDetail from '../components/CardDetail';
import '../styles/ProductDetail.css';
import Product from '../models/Product';

const ProductDetail = () => {
  const product = new Product(
    43900,
    'Duracell - AAA Batteries (4-Pack)',
    'HardGood',
    5.49,
    [
      { id: 'pcmcat312300050015', name: 'Connected Home & Housewares' },
      { id: 'pcmcat248700050021', name: 'Housewares' },
      { id: 'pcmcat303600050001', name: 'Household Batteries' },
      { id: 'abcat0208002', name: 'Alkaline Batteries' },
    ],
  );

  return (
    <Fragment>
      {/* <h1 className="ProductDetail__title">{product.name}</h1> */}
      <div className="ProductDetail">
        <CardDetail key={product} product={product.price}></CardDetail>
      </div>
    </Fragment>
  );
};

export default ProductDetail;
