import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleWare from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleWare();
const storeWithDevTools = compose(

    //    ******* VERIFICAR 2 LINHAS ABAIXO *********** //

    applyMiddleware(sagaMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

)(createStore)(rootReducer);

sagaMiddleware.run(rootSaga);

export default storeWithDevTools;