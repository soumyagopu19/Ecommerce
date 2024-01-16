import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCartList } from '../../actions/GetCartList';
import CartCard from './CartCard';
import getProductDetail from '../../api/GetProductsDetail';

const Cart = (props) => {
    const dispatch = useDispatch();
    const [totalPrice, setTotalPrice] = useState(0);
    const cartListData = useSelector(state => state.cartList.data)

    useEffect(() => {

        dispatch(getCartList());
    }, [])

    useEffect(async () => {



        if (cartListData != null) {

            let sum = 0
            for (let i = 0; i < cartListData.products.length; i++) {
                let res = await getProductDetail({ id: cartListData.products[i].productId })
                let tempPrice = res.data.price * cartListData.products[i].quantity
                sum = sum + tempPrice


            }
            setTotalPrice(sum)
        }
    }, [cartListData])
    useEffect(() => {

    })

    return <div>
        {cartListData != null ? cartListData.products.map((data) => {
            return <CartCard id={data.productId} quantity={data.quantity} />

        }) : <div>Getting Data ..</div>}

        <br />
        <br />
        <br />
        <br />
        <div>total price : {totalPrice}</div>
    </div>
}

export default Cart