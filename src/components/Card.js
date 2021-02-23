const Card = props => {
    const { product } = props;

    return (
        <div className={'card'}>
            {product.name}
        </div>
    );
}

export default Card;