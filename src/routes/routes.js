import CartView from '../views/CartView';
import ListProducts from '../components/ListProducts';
import ShopCart from '../components/ShopCart';
import ProductDetail from '../components/ProductDetail';

const route = [
  {
    path: '/cart',
    component: CartView,
    exact: true,
  },
  {
    path: '/',
    component: ListProducts,
    exact: true,
  },
  {
    path: '/shop-cart',
    component: ShopCart,
    exact: true,
  },
  {
    path: '/detail/:id',
    component: ProductDetail,
    exact: true,
  },
];

export default route;
