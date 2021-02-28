import { useState, useEffect, Fragment } from 'react';
import { fetchProducts } from '../services/api';
import BaseView from '../views/BaseView';
import CardDetail from '../components/CardDetail';
import '../styles/ProductDetail.css';
import { getDetailingProduct } from '../redux/product/productSelector';
import { useSelector } from 'react-redux';
import ReturnButton from './ReturnButton';


const ProductDetail = () => {
  const product = useSelector(getDetailingProduct);

  return (
    <Fragment>
      <div className="ProductDetail__title">
        <BaseView title={product.name}>
          <div className="ProductDetail">
            <CardDetail key={product} product={product}></CardDetail>
            <ReturnButton />
          </div>
        </BaseView>
      </div>
    </Fragment>
  );
};

export default ProductDetail;
