
import { FaTrash } from 'react-icons/fa';
import './ProductAmount.css';

const ProductAmount = (props) => {

    let product = { ...props.product, amount: 2 };

    return (
        <div className="product__amount__container">
            <button
                // style={activeDesc ? Card__footer__amountBag__sub__small : Card__footer__amountBag__sub__medium}
                className="product__amount__sub"
                // onClick={backButton}
            >{product.amount > 1 ? "-" : <FaTrash />}
            </button>
            <div
                // style={activeDesc ? Card__footer__amountBag_small : Card__footer__amountBag_medium}
                className="product__amount"
                >{product.amount}
            </div>
            <button
                // style={activeDesc ? Card__footer__amountBag__sum__small : Card__footer__amountBag__sum__medium}
                className="product__amount__sum" 
            >+</button>
        </div>
    )
}

export default ProductAmount;