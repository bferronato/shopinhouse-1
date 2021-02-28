import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getCartAmout, getIsLoading } from '../redux/product/productSelector';
import '../styles/Navbar.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncLoadQuery } from '../redux/product/productAction';

function Navbar(props) {
  const [pesquisa, setPesquisa] = useState("")
  const [titulo, setTitulo] = useState("Bem vindo")
  const history = useHistory();
  const carAmount = useSelector(getCartAmout);
  const dispatch = useDispatch();


  useEffect(() => {
    if (pesquisa.length === 0) {setTitulo("Bem vindo!")} else {setTitulo(`Resultados para "${pesquisa}"`)
    }} ,[pesquisa])


  return (
    <div className="Navbar">

      <div className="firstThird">
        <div className="logo">
          <a onClick={() => history.push('/')} className="Nav__Logo">Shopee</a>
          <div className="feedback">{titulo}</div> { /* Precisa deixar o valor default como "Bem vindo!" e renderizar o feedback somente na view principal/homepage */}
        </div>
        
      </div>

      <div className="secondThird">
        <div className="search">
          <input
            value={pesquisa}
            onChange={(e) => setPesquisa(e.target.value)}
            placeholder="Buscar...."
          ></input>
          <span className="material-icons" onClick={ ()=> dispatch(asyncLoadQuery(pesquisa)) } >search</span>
        </div>
      </div>

      <div className="thirdThird">
        <div className="cart">
          <button onClick={() => history.push('/shop-cart')} type="Button">
            <span className="material-icons">shopping_cart</span>
            {(carAmount > 0 ) &&
              <span className="notification">{carAmount}</span>
            }
          </button>
        </div>
      </div>

    </div>
  );
}

export default Navbar;
