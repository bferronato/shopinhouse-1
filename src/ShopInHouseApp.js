import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import routes from './routes/routes';

const ShopInHouseApp = () => {
    return (
        <div className={'app__root'}>
            <Header />
            <BrowserRouter
                basename={process.env.PUBLIC_URL}>
                <Switch>
                    {routes.map((route, index) => {
                        <Route
                            component={route.component}
                            exact
                            key={index}
                            path={route.path}
                        />
                    })}
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default ShopInHouseApp;