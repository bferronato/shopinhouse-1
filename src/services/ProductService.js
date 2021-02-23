import Product from '../models/Product';
import { fetchProducts, queryProducts } from './api';

class ProductService {
    getAllProducts = async () => {
        const productList = [];
        await fetchProducts()
            .then((value) => {
                value.forEach((each) => {
                    productList.push(Product.mapToProduct(each));
                })
            });
        return productList;
    }
}

export default new ProductService();