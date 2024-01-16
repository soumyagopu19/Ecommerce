import axios from 'axios';
async function getProducts(params) {
    if (params.category === "All") {
        const res = await axios.get("https://fakestoreapi.com/products")

        return res;
    }
    else {
        const res = await axios.get(`https://fakestoreapi.com/products/category/${params.category}`)

        return res;

    }


}

export default getProducts;
