import { createAction } from 'redux-actions';
import {REQUEST_PRODUCT_DETAIL_SUCCESS} from '../constants/actionTypes'
import  productDetail from '../api/GetProductsDetail';

const requestProductDetailSuccess = createAction(REQUEST_PRODUCT_DETAIL_SUCCESS);

export function getProductDetail(params) {

    return dispatch => productDetail(params)
    .then(( data ) =>{
        
    return dispatch(requestProductDetailSuccess(data))

})
    
}