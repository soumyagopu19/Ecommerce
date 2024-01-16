
import axios from 'axios';
async function addToCart(params) {
    const res = await axios.post("https://fakestoreapi.com/carts/",params)
    
    return res;

}

export default addToCart;

