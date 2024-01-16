import {
    REQUEST_ALL_PRODUCTS_SUCCESS
   } from '../constants/actionTypes';
   
   const INITIAL_STATE = { data: [], error: null };
   
   export default function productsList(state = INITIAL_STATE, action) {
     switch (action.type) {
       case REQUEST_ALL_PRODUCTS_SUCCESS:
         return {  data: action.payload.data, error: null };
          default:
         return state;
     }
   }
   