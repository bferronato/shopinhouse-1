import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getListingData, getCart, getCartAmout, getDetailingProduct } from '../redux/product/productSelector';
import { asyncLoadAll, addToCart, incrementAmount, removeFromCart, asyncLoadQuery, doCheckout } from '../redux/product/productAction';
import Card from '../components/Card';

const HomeView = () => {
    const productList = useSelector(getListingData);
    const dispatch = useDispatch();

    // ! TESTE
    const cart = useSelector(getCart)
    const cartAmout = useSelector(getCartAmout)
    const detailing = useSelector(getDetailingProduct)

    // * VÁLIDO
    useEffect(() => {
        dispatch(asyncLoadAll());
    }, [dispatch])

    // ! TESTE
    useEffect(() => {
        console.log(productList);
        if (productList?.length > 0) {
            dispatch(addToCart(productList[0]))
            dispatch(addToCart(productList[1]))
            dispatch(addToCart(productList[2]))
            dispatch(addToCart(productList[3]))
            dispatch(incrementAmount(productList[0].id))
            // dispatch(removeFromCart(productList[1].id))
            // dispatch(asyncLoadQuery('Dura'))
            // dispatch(asyncLoadQuery(''))
            dispatch(asyncLoadQuery(productList[2].id))
            console.log('DO');
            dispatch(doCheckout())

        }
    }, [productList])
    useEffect(() => {
        console.log(cart);
        console.log(cartAmout);
    }, [cart])
    useEffect(() => {
        console.log(detailing);
    }, [detailing])

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