import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import routes from './routes/routes';
import store from './redux/store';

const ShopInHouseApp = () => {
    return (
        <div className={'app__root'}>
            <Provider
                store={store}>
                <Header />
                <BrowserRouter
                    basename={process.env.PUBLIC_URL}>
                    <Switch>
                        {routes.map((route, index) =>
                            <Route
                                component={route.component}
                                exact
                                key={index}
                                path={route.path}
                            />
                        )}
                    </Switch>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default ShopInHouseApp;