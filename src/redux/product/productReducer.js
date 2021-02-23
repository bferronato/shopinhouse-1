import { productType } from './productType';

export function productReducer(state = {}, action) {
    switch (action.type) {
        case productType.LOAD_ALL:
            return {
                ...state,
                productList: action.payload
            };
    }
    return state;
}