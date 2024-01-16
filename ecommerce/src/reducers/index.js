import { combineReducers } from "redux";
import productsList from "./Products";
import categoryList from "./CategoryList";
import productDetail from "./ProductDetail";
import cartList from "./CartList";
const appReducers = combineReducers({
    productsList,
    categoryList,
    productDetail,
    cartList
})
export default appReducers;