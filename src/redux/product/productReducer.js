import Product from '../../models/Product';
import { INITIAL_STATE } from '../../utils/constants';
import { productType } from './productType';

export function productReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case productType.ADD_TO_CART:
            return {
                ...state,
                cart: [
                    ...state.cart,
                    action.payload = {
                        ...action.payload,
                        cartAmount: 1
                    }
                ]
            };
        case productType.DECREMENT_AMOUNT:
            const cartDecrement = [...state.cart];
            const indexDecrement = cartDecrement.findIndex((cart) => cart.id === action.payload);

            cartDecrement[indexDecrement].cartAmount -= 1;

            return {
                ...state,
                cart: cartDecrement
            };
        case productType.DO_CHECKOUT:
            return {
                ...state,
                cart: []
            }
        case productType.INCREMENT_AMOUNT:
            const cartIncrement = [...state.cart];
            const indexIncrement = cartIncrement.findIndex((cart) => cart.id === action.payload);

            cartIncrement[indexIncrement].cartAmount += 1;

            return {
                ...state,
                cart: cartIncrement
            };
        case productType.IS_LOADING:
            return {
                ...state,
                isLoading: true
            };
        case productType.LOAD_ALL:
            return {
                ...state,
                isLoading: false,
                productList: action.payload
            };
        case productType.LOAD_QUERY:
            typeof action.searchedValue === 'number' ?
                state.detailingProduct = action.payload.pop() :
                state.productList = action.payload;
            return {
                ...state,
                isLoading: false,
            };
        case productType.REMOVE_FROM_CART:
            state.cart = state.cart.filter(cartItem => cartItem.id != action.payload);
            break;
    };
    return state;
};