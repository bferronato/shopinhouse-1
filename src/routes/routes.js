import CartView from "../views/CartView";
import ListProducts from "../components/ListProducts";
import ShopCart from "../components/ShopCart";

const route = [
    {
        path: '/',
        component: ListProducts,
        exact: true
    },
    {
        path: '/cart',
        component: CartView,
        exact: true
    },
    {
        path: '/shop-cart',
        component: ShopCart,
        exact: true
    },
];

export default route;