
import axios from 'axios';
async function getCategoryList() {
    const res = await axios.get("https://fakestoreapi.com/products/categories");
    
    return res;

}

export default getCategoryList;

