import {
    REQUEST_CATEGORY_LIST_SUCCESS
   } from '../constants/actionTypes';
   
   const INITIAL_STATE = { data: [], error: null };
   
   export default function categoryList(state = INITIAL_STATE, action) {
     switch (action.type) {
       case REQUEST_CATEGORY_LIST_SUCCESS:
         return {  data: action.payload.data, error: null };
          default:
         return state;
     }
   }
   