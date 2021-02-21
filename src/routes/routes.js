import CartView from "../views/CartView";
import HomeView from "../views/HomeView";

const route = [
    {
        path: '/',
        component: HomeView,
        exact: true
    },
    {
        path: '/cart',
        component: CartView,
        exact: true
    }
];

export default route;