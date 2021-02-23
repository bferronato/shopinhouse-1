import Product from "../models/Product";

export const EMPTY_PRODUCT = new Product(null, '', '', '', 0, []);
export const INITIAL_STATE = {
    detailingProduct: EMPTY_PRODUCT,
    productList: [],
    cart: []
};
