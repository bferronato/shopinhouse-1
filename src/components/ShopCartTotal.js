const ShopCartTotal = ({ cart }) => {

    const amount = cart.reduce(function (totalizer, cartItem) {
        return totalizer + (cartItem.price * cartItem.cartAmount);
    }, 0);

    return (
        <p className="cart__list__footer__info__subtotal">
            {amount.toLocaleString("pt-BR",
                { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' }
            )}
        </p>
    )
}

export default ShopCartTotal;