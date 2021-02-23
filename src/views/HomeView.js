import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListingData } from '../redux/product/productSelector';
import { asyncLoadAll } from '../redux/product/productAction';
import Card from '../components/Card';

const HomeView = () => {
    const productList = useSelector(getListingData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(asyncLoadAll());
    }, [dispatch])

    useEffect(() => {
        console.log(productList);
    }, [productList])

    return (
        <div className={'home-view__root'}>
            <main className={'home-view__main'}>

                <div className={'home-view__title'}>
                    <h2 className={'title'}>BEM-VINDO</h2>
                </div>

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