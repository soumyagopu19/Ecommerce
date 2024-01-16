import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
const ShopCard = (props) => {

    return <>
       
        <div className="card">
            <div className="cloth">
               <img className="img-fluid" src={props.product.image} />
            </div>
            <div className="p-3">
                <h1>title:{props.product.title}</h1>
                <h2>category:{props.product.category}</h2>
                {/* <div>description:{props.product.description}</div> */}
                <p className="d-flex justify-content-center align-items-center rating">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-m5W-LHUqQTscxpwTgg9KZYg7ORNSJGvcxvb5g7Q0LftPTGhIcxqE9_KBYzXT81cVuQ&usqp=CAU" className="mr-2"/>
                 {props.product.rating.rate}</p>
                <div className="d-flex justify-content-between align-items-center my-2">
                    <h3>{props.product.price}</h3>
                    <div>
                        <button type="btn" className="btn btn-primary">Shop Now</button>
                    </div>
                 </div>
                
                {/* <div>no of people raated :{props.product.rating.count}</div> */}
            </div>
        </div>
       
    </>
}

export default ShopCard;