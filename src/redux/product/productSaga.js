import { all, call, put, takeEvery } from 'redux-saga/effects';
import { productType } from './productType';
import ProductService from '../../services/ProductService';

function* loadAll() {
    yield put({ type: productType.IS_LOADING });
    const response = yield call(ProductService.getAllProducts);
    yield put({ type: productType.LOAD_ALL, payload: response });
};

function* watchLoadAll() {
    yield takeEvery(productType.ASYNC_LOAD_ALL, loadAll);
};

function* loadQuery(action) {
    yield put({ type: productType.IS_LOADING });
    const { payload: searchedValue } = action;
    const response = yield call(ProductService.getProductQuery, action.payload);
    yield put({ type: productType.LOAD_QUERY, payload: response, searchedValue });
};

function* watchLoadQuery() {
    yield takeEvery(productType.ASYNC_LOAD_QUERY, loadQuery);
};

export default function* rootProductSaga() {
    yield all([
        watchLoadAll(),
        watchLoadQuery()
    ]);
};