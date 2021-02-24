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
            const decrementingItem = state.cart.find(cartItem => cartItem.id === action.payload);
            decrementingItem.cartAmount--;
            break;
        case productType.DO_CHECKOUT:
            return {
                ...state,
                cart: []
            }
        case productType.INCREMENT_AMOUNT:
            const incrementingItem = state.cart.find(cartItem => cartItem.id === action.payload);
            incrementingItem.cartAmount++;
            break;
        case productType.LOAD_ALL:
            return {
                ...state,
                productList: action.payload
            };
        case productType.LOAD_QUERY:
            typeof action.searchedValue === 'number' ?
                state.detailingProduct = action.payload.pop() :
                state.productList = action.payload;
            break;
        case productType.REMOVE_FROM_CART:
            state.cart = state.cart.filter(cartItem => cartItem.id != action.payload);
            break;
    };
    return state;
};