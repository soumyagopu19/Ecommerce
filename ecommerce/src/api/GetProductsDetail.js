
import axios from 'axios';
async function getProductDetail(params) {
    const res = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
    
    return res;

}


export default getProductDetail;

