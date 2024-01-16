import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../actions/GetProducts';
import { useNavigate } from 'react-router-dom';
import ShopCard from './ShopCard';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
const Shop = (props) => {
    const history = useNavigate();
    const dispatch = useDispatch();
    const [productState, setProductState] = useState([]);
    const [category, setCategory] = useState("All");

    const productList = useSelector(state => state.productsList.data);
    const categoryListData = useSelector(state => state.categoryList.data);


    useEffect(async () => {

        setProductState(productList);
    }, [productList])
    useEffect(() => {

        dispatch(getProducts({
            category: "All"
        }))
    }, [])
    return <>
       

        <Container>
            <div className="col-12 d-flex justify-content-end filter mt-5 mb-3">
                    <p className="pr-3"> filter using category :</p>
                    <select onChange={(event) => {

                        setCategory(event.target.value)
                        dispatch(getProducts({ category: event.target.value }))
                    }} >
                        <option value="All">All</option>
                        {categoryListData.map((cat) => {
                            return <option value={cat}>{cat}</option>
                        })}
                    </select>
            </div>
            <Row className="py-5 content mt-0">
                <div className="col-12">
                    <h1 className="heading">Best Seller</h1>
                </div>
                {productState.length > 0 ? productState.map((product) => {
                    return <div className="col-md-3 col-6 cardParent" onClick={() => { history(`/shopDetails/${product.id}`) }}>
                    <ShopCard product={product}/>
                </div>
                }) : <div>Getting Data ...</div>}
                
            </Row>
        </Container>
    </>
}

export default Shop