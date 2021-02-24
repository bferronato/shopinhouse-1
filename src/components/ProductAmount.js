
import { FaTrash } from 'react-icons/fa';
import './ProductAmount.css';

const ProductAmount = (props) => {

    let product = { ...props.product, amount: 2 };

    const incrementAmount = () => {
        console.log("Adicionar")
    }

    const decrementAmount = () => {
        console.log("Subtrair")
    }

    return (
        <div className="product__amount__container">
            <button
                className="product__amount__sub"
                onClick={() => decrementAmount()}
            >{product.amount > 1 ? "-" : <FaTrash />}
            </button>
            <div className="product__amount">
                {product.amount}
            </div>
            <button
                className="product__amount__sum"
                onClick={() => incrementAmount()}
            >+</button>
        </div>
    )
}

export default ProductAmount;