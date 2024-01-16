
import axios from 'axios';
async function deleteCart(params) {
    const res = await axios.delete("https://fakestoreapi.com/carts/1")
    return res;
}
export default deleteCart;

