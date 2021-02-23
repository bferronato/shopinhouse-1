import CartView from "../views/CartView";
import HomeView from "../views/HomeView";

const route = [
    {
        path: '/cart',
        component: CartView,
        exact: true
    },
    {
        path: '/',
        component: HomeView,
        exact: true
    },
];

export default route;