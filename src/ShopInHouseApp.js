import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import routes from './routes/routes';
import theme from './styles/theme.css'

const ShopInHouseApp = () => {
    return (
        <div className={'app__root'}>
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
        </div>
    );
}

export default ShopInHouseApp;