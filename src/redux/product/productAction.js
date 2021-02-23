import { productType } from './productType';

export const asyncLoadAll = () => {
    return {
        type: productType.ASYNC_LOAD_ALL
    };
};