import './Card.css';

const Card = (props) => {

    const { product } = props

    return (
        <div className='product__card'>
            <img src={product.image} className="card__image"></img>
            <p>{product.name}</p>
            <p>{product.descricao}</p>
            <p>{product.price}</p>

        </div>
    );
}

export default Card;