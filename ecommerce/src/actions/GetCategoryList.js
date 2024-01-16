import { createAction } from 'redux-actions';
import {REQUEST_CATEGORY_LIST_SUCCESS} from '../constants/actionTypes'
import  category from '../api/GetCategoryList';

const requestCategoryListSuccess = createAction(REQUEST_CATEGORY_LIST_SUCCESS);

export function getCategoryList(params) {

    return dispatch => category(params)
    .then(( data ) =>{
        
    return dispatch(requestCategoryListSuccess(data))

})
    
}
export default getCategoryList;