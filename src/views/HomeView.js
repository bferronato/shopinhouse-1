import React from 'react';
import './Home.css';

const HomeView = (props) => {

    return (
        <div className={'app__home'}>
            <h1>{props.title}</h1>
            {props.children}
        </div>
    );
}

export default HomeView;