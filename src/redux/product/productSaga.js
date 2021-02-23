import { all, call, put, takeEvery } from 'redux-saga/effects';
import { productType } from './productType';
import ProductService from '../../services/ProductService';

function* loadAll() {
    const response = yield call(ProductService.getAllProducts);
    console.log(response);
    yield put({ type: productType.LOAD_ALL, payload: response });
};

function* watchLoadAll() {
    yield takeEvery(productType.ASYNC_LOAD_ALL, loadAll);
};

export default function* rootProductSaga() {
    yield all([
        watchLoadAll()
    ]);
};