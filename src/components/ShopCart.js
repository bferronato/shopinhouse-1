import HomeView from "../views/HomeView";
import './ShopCart.css';

const ShopCart = () => {

    return (
        <HomeView title="Carrinho de compras">
            <div className='shop__cart'>
                <table className="table__cart__list">
                    <tr>
                        <th></th>
                        <th>Preço UN.</th>
                        <th>Quantidade</th>
                        <th>Subtotal</th>
                    </tr>
                    <tr>
                        <td>Parafusadeira automática Britânia</td>
                        <td>249,00</td>
                        <td>1</td>
                        <td>249,00</td>
                    </tr>
                    <tr>
                        <td>Parafusadeira automática Britânia</td>
                        <td>17,90</td>
                        <td>2</td>
                        <td>35,80</td>
                    </tr>
                </table>
                <div className="table__cart__total">
                    <span>R$ 284,80</span>
                    <button>Finalizar Compra</button>
                </div>
            </div>
        </HomeView>
    );
}

export default ShopCart;