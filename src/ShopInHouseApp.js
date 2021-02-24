import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import routes from './routes/routes';
import store from './redux/store';
import theme from './styles/theme.css'

const ShopInHouseApp = () => {
    return (
        <div className={'app__root'}>
            <Provider
                store={store}>
                {/* <Header /> */}
                <Navbar />
                <BrowserRouter
                    basename={process.env.PUBLIC_URL}>
                    <Switch>
                        {routes.map(route => (
                            <Route
                                key={route.path}
                                path={route.path}
                                component={route.component}
                                exact={route.exact} />
                        ))}
                    </Switch>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default ShopInHouseApp;