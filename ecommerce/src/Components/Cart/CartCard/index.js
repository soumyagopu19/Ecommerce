import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import deleteCart from '../../../api/DeleteCart';
import getProductDetail from '../../../api/GetProductsDetail';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const CartCard = (props) => {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(props.quantity);
    const [addToCartBoolean, setAddToCartBoolean] = useState(false);
    const [productDetail, setProductDetail] = useState(null);
    const [getTotalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        getProductDetail({ id: props.id }).then((data) => {

            setProductDetail(data.data)
        })
    }, [])



    return <>

        {productDetail !== null ?
            <div className="row d-flex align-items-start p-5 mt-5">
                <div className="leftImage col-md-4 col-4"><img src={productDetail.image} />
                </div>
                <div className="col-md-8 col-8 d-flex flex-column justify-content-start right-content">
                    <div>title:{productDetail.title}</div>
                    <div>category:{productDetail.category}</div>
                    <div>description:{productDetail.description}</div>
                    <div>price : {productDetail.price}</div>
                    <div>rating: {productDetail.rating.rate}</div>
                    <div>no of people raated :{productDetail.rating.count}

                        quantity: <button className="outerbtn" onClick={() => {
                            let tempQuant = quantity;
                            tempQuant = tempQuant + 1;
                            setQuantity(tempQuant)
                        }}>+++</button>{quantity}<button
                            className="outerbtn"
                            onClick={() => {
                                let tempQuant = quantity;
                                if (tempQuant > 1) {
                                    tempQuant = tempQuant - 1;
                                    setQuantity(tempQuant)
                                }
                            }}
                        >---</button>

                        <button className="outerbtn" onClick={() => {
                            deleteCart().then(() => {
                                alert('cart is deleted')
                            }).catch((error) => {
                                alert('something went wrong')
                            })
                        }}>Remove From Cart</button>
                    </div></div> </div> : <div>Getting Data ...</div>}

    </>
}

export default CartCard;