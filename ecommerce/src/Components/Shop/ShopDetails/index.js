import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetail } from '../../../actions/GetProductDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import addToCart from '../../../api/AddToCart';
import './styles.css'

const ShopDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);
    const [addToCartBoolean, setAddToCartBoolean] = useState(false);

    useEffect(() => {
        dispatch(getProductDetail({ id: id }))
    }, [])
    const productDetail = useSelector(state => state.productDetail.data)

    return <>
        {productDetail !== null ?
            <div className="row d-flex align-items-start p-5 mt-5">
                <div className="leftImage col-md-4 col-4">
                    <img src={productDetail.image} />
                </div>
                <div className="col-md-8 col-8 d-flex flex-column justify-content-start right-content">
                    <div><h1>title:   <span>{productDetail.title}</span></h1></div>
                    <div><h2><strong>category:</strong>   <span>{productDetail.category}</span></h2></div>
                    <div><p><strong>description:</strong>{productDetail.description} </p>   </div>
                    <div><strong>price : </strong>   {productDetail.price}</div>
                    <div><strong>rating: </strong> {productDetail.rating.rate}</div>
                    <div><strong>count : </strong>  {productDetail.rating.count}
                        <br />
                        <strong>quantity: </strong>   <button className="outerbtn" onClick={() => {
                            let tempQuant = quantity;
                            tempQuant = tempQuant + 1;
                            setQuantity(tempQuant)
                        }}>+++</button>  <strong>{quantity}</strong>   <button
                        className="outerbtn" onClick={() => {
                                let tempQuant = quantity;
                                if (tempQuant > 1) {
                                    tempQuant = tempQuant - 1;
                                    setQuantity(tempQuant)
                                }
                            }}
                        >---</button>
                        <br />
                        {!addToCartBoolean ? <button className="btn btn-primary mt-3 px-5" onClick={() => {
                            addToCart(
                                {

                                    "userId": 1,
                                    "date": "2020-03-02T00:00:02.000Z",
                                    "products": [
                                        {
                                            "productId": productDetail.id,
                                            "quantity": quantity
                                        },

                                    ],

                                }
                            ).then(() => {
                                setAddToCartBoolean(true);
                                alert('added to cart');
                            }).catch(() => {
                                alert('something went wrong')
                            })
                        }}>Add To Cart</button> : <button className="btn btn-primary px-5" onClick={() => {
                            setAddToCartBoolean(false)
                            setQuantity(1)
                        }}>Remove From Cart</button>}
                </div></div> </div> : <div>Getting Data ...</div>}


    </>
}

export default ShopDetails;