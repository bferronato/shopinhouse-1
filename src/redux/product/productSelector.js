export const getListingData = store => store.productReducer.productList ?? [];
export const getCart = store => store.productReducer.cart ?? [];
export const getCartAmout = store => store.productReducer.cart.length ?? 0;
export const getDetailingProduct = store => store.productReducer.detailingProduct ?? {};