
import axios from 'axios';
async function getCartsList() {
    const res = await axios.get("https://fakestoreapi.com/carts/1")
    
    return res;

}

export default getCartsList;

