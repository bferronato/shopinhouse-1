import { productType } from './productType';

export const addToCart = product => {
    return {
        type: productType.ADD_TO_CART,
        payload: product
    };
};

export const asyncLoadAll = () => {
    return {
        type: productType.ASYNC_LOAD_ALL
    };
};

export const asyncLoadQuery = searchingValue => {
    console.log(searchingValue);
    return {
        type: productType.ASYNC_LOAD_QUERY,
        payload: searchingValue
    };
};

export const decrementAmount = productId => {
    return {
        type: productType.DECREMENT_AMOUNT,
        payload: productId
    };
};

export const doCheckout = () => {
    return {
        type: productType.DO_CHECKOUT
    };
};

export const incrementAmount = productId => {
    return {
        type: productType.INCREMENT_AMOUNT,
        payload: productId
    };
};

export const removeFromCart = productId => {
    return {
        type: productType.REMOVE_FROM_CART,
        payload: productId
    };
};
