import {
    REQUEST_PRODUCT_DETAIL_SUCCESS
   } from '../constants/actionTypes';
   
   const INITIAL_STATE = { data: null, error: null };
   
   export default function productDetail(state = INITIAL_STATE, action) {
     switch (action.type) {
       case REQUEST_PRODUCT_DETAIL_SUCCESS:
         return {  data: action.payload.data, error: null };
          default:
         return state;
     }
   }
   