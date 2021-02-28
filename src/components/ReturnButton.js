import React, { useEffect, Fragment, useState } from 'react';
import '../styles/ReturnButton.css';
import { FaTrash } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import {
  addToCart,
  incrementAmount,
  decrementAmount,
  removeFromCart,
} from '../redux/product/productAction';
import { getCart } from '../redux/product/productSelector';
import { useHistory } from 'react-router-dom';

const ReturnButton = ({ product, forceUpdate = null }) => {
  const history = useHistory();

  function handleReturn() {
    history.push(`/`);
  }

  return (
    <div className="returnButton__body">
      <button
        className="Card__footer__button__return"
        onClick={() => handleReturn()}
      >
        Voltar
      </button>
    </div>
  );
};
export default ReturnButton;
