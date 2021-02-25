import { useState, useEffect, Fragment } from 'react';
import { fetchProducts } from '../services/api';
import CardDetail from '../components/CardDetail';
import '../styles/ListProducts.css';
import Product from '../models/Product';

const ProductDetail = () => {
  const produto = new Product(
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
      <h1 className="ListProducts__title">{produto.name}</h1>
      <div className="listProducts">
        <CardDetail key={produto} product={produto}></CardDetail>
      </div>
    </Fragment>
  );
};

export default ProductDetail;
