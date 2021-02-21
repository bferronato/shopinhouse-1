const Card = (props) => {

    const { product } = props

    return (
        <div className='Card'>
            
            <h1>{product.name}</h1>
            <p>{product.descricao}</p>
            <p>{product.price}</p>

        </div>
    );
}

export default Card;