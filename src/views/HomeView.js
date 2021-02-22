import React from 'react';
import './Home.css';
import ListProducts from '../components/ListProducts';

const HomeView = () => {

    return (
        <div className={'app__home'}>
            <h1>Bem vindo!</h1>

            <ListProducts></ListProducts>
        </div>
    );
}

export default HomeView;