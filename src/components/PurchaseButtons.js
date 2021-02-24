import React from 'react';
import '../styles/PurchaseButtons.css'

const PurchaseButtons = ({ id }) => {

    return (
        <div purchaseButtons__body>
            <button className="Card__footer__button__buy">Comprar</button>
            {/* {amount() < 1 && }
                    {amount() >= 1 &&
                        <Fragment>
                            <button style={activeDesc ? Card__footer__amountBag__sub__small : Card__footer__amountBag__sub__medium} className="Card__footer__amountBag__sub" onClick={backButton}>{amount() > 1 ? "-" : <FaTrash />}</button>
                            <span style={activeDesc ? Card__footer__amountBag_small : Card__footer__amountBag_medium} className="Card__footer__amountBag">{amount()}</span>
                            <button style={activeDesc ? Card__footer__amountBag__sum__small : Card__footer__amountBag__sum__medium} className="Card__footer__amountBag__sum" onClick={buyButton}>+</button>
                        </Fragment>
                    } */}
        </div>
    );
};

export default PurchaseButtons;