import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className="Navbar">
            <div className="firstThird">
                <div className="logo">
                    <a href="/">Shopee</a>
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
                    <button type="Button">
                        <span className="material-icons">
                        <a href="/shop-cart">shopping_cart</a>
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

export default Navbar
