import {
    REQUEST_CART_LIST_SUCCESS
   } from '../constants/actionTypes';
   
   const INITIAL_STATE = { data: null, error: null };
   
   export default function cartList(state = INITIAL_STATE, action) {
     switch (action.type) {
       case REQUEST_CART_LIST_SUCCESS:
         return {  data: action.payload.data, error: null };
          default:
         return state;
     }
   }
   