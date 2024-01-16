import { createAction } from 'redux-actions';
import {REQUEST_CART_LIST_SUCCESS} from '../constants/actionTypes';
import  cartList from '../api/GetCartsList';

const requestCartListSuccess = createAction(REQUEST_CART_LIST_SUCCESS);

export function getCartList(params) {

    return dispatch => cartList(params)
    .then(( data ) =>{
        
    return dispatch(requestCartListSuccess(data))

})
    
}