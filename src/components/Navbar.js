import React from 'react'
import { useHistory } from 'react-router-dom';
import './Navbar.css'

function Navbar(props) {

    const history = useHistory();

    return (
        <div className="Navbar">
            <div className="firstThird">
                <div className="logo">
                    <a onClick={() => history.push("/") }>Shopee</a>
                </div>
            </div>
            <div className="secondThird">
                <div className="search">
                    <input placeholder="Buscar...">
                    </input>
                    <span className="material-icons">
                        search
                    </span>
                </div>
            </div>
            <div className="thirdThird">
                <div className="cart">
                    <button onClick={() => history.push("/shop-cart") } type="Button">
                        <span className="material-icons">
                            shopping_cart
                        </span>
                        <span className="notification">
                            9
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;