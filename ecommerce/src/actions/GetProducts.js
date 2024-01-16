import { createAction } from 'redux-actions';
import {REQUEST_ALL_PRODUCTS_SUCCESS} from '../constants/actionTypes'
import  product from '../api/GetProducts';

const requestAllProductSuccess = createAction(REQUEST_ALL_PRODUCTS_SUCCESS);

export function getProducts(params) {

    return dispatch => product(params)
    .then(( data ) =>{
        
    return dispatch(requestAllProductSuccess(data))

})
    
}