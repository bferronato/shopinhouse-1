import { all } from 'redux-saga/effects';
import rootProductSaga from './product/productSaga';

export default function* rootSaga() {
    yield all([
        rootProductSaga()
    ]);
};