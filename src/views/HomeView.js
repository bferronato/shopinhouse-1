import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListingData, getCart, getCartAmout, getDetailingProduct } from '../redux/product/productSelector';
import { asyncLoadAll, addToCart, incrementAmount, removeFromCart, asyncLoadQuery, doCheckout } from '../redux/product/productAction';
import Card from '../components/Card';

const HomeView = () => {
    const productList = useSelector(getListingData);
    const dispatch = useDispatch();

    // * VÁLIDO
    useEffect(() => {
        dispatch(asyncLoadAll());
    }, [dispatch])

    return (
        <div className={'home-view__root'}>
            <main className={'home-view__main'}>

                <div className={'home-view__title'}>
                    <h2 className={'title'}>BEM-VINDO</h2>
                </div>

                {/* <div className={'app__home'}>
                    <h1>{props.title}</h1>
                    {props.children}
                </div> */}

                <div className={'home-view__content'}>
                    {
                        productList?.map((product, index) =>
                            <Card
                                key={index}
                                product={product} />
                        )
                    }
                </div>

            </main>
        </div>
    );
}

export default HomeView;