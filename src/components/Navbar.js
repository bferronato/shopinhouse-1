import React from 'react';
import { useHistory } from 'react-router-dom';
import { getCartAmout } from '../redux/product/productSelector';
import './Navbar.css';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function Navbar(props) {
  const [search, setSearch] = useState('');
  const history = useHistory();

  const carAmount = useSelector(getCartAmout);

  return (
    <div className="Navbar">

      <div className="firstThird">
        <div className="logo">
          <a onClick={() => history.push('/')}>Shopee</a>
          <div className="feedback">Resultados para {search}</div> { /* Precisa deixar o valor default como "Bem vindo!" e renderizar o feedback somente na view principal/homepage */ }
        </div>
      </div>

      <div className="secondThird">
        <div className="search">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder = "Buscar...."
          ></input>
          <span className="material-icons">search</span>
        </div>
      </div>

      <div className="thirdThird">
        <div className="cart">
          <button onClick={() => history.push('/shop-cart')} type="Button">
            <span className="material-icons">shopping_cart</span>
            <span className="notification">{carAmount}</span> { /* Precisa criar condicional para quando o valor de itens for 0 não mostrar a badge*/ }
          </button>
        </div>
      </div>

    </div>    
  );
}

export default Navbar;
