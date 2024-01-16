import React from 'react';
import { useParams } from 'react-router-dom';

const CartDetail = () => {
    const { id } = useParams()
    return <>

        <div>Cart details !! id is {id}</div>
    </>
}

export default CartDetail