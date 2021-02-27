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
    'http://img.bbystatic.com/BestBuy_US/images/products/4390/43900_sa.jpg',
    5.49,
    [
      { id: 'pcmcat248700050021', name: 'Housewares' },
      { id: 'pcmcat303600050001', name: 'Household Batteries' },
      { id: 'abcat0208002', name: 'Alkaline Batteries' },
    ],
  );
  // console.log(product);

  return (
    <Fragment>
      {/* <h1 className="ProductDetail__title">{product.name}</h1> */}
      <div className="ProductDetail">
        <CardDetail key={product} product={product}></CardDetail>
      </div>
    </Fragment>
  );
};

export default ProductDetail;
