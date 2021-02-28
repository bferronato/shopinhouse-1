import { useState, useEffect, Fragment } from 'react';
import { fetchProducts } from '../services/api';
import CardDetail from '../components/CardDetail';
import '../styles/ProductDetail.css';
import { getDetailingProduct } from '../redux/product/productSelector';
import { useSelector } from 'react-redux';
import ReturnButton from './ReturnButton';

const ProductDetail = () => {
  const product = useSelector(getDetailingProduct);

  return (
    <Fragment>
      <h1 className="ProductDetail__title">{product.name}</h1>
      <div className="ProductDetail">
        <CardDetail key={product} product={product}></CardDetail>
        <ReturnButton />
      </div>
    </Fragment>
  );
};

export default ProductDetail;
