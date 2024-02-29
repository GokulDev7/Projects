import React from "react";
import "../styles/Product.css";
import { useStateValue } from "../utils/StateProvider";

function Product({id, title, image, price, rating }) {
  const [{basket},dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type:"Add_To_Basket",
      item:{
        id:id,
        title:title,
        image:image, 
        rating:rating,
        price:price
      },
    })
  }
  return (
    <div className="product flex flex-col items-center justify-end mx-1 p-5 z-[1] bg-white rounded-[5px] ">
      <img src= {image} alt="productImage" className="max-h-48 object-contain mb-4 "></img>
      <div className="product_info">
        <p className="product_description">{title}</p>
        <div className="product_rating">
          {Array(rating).fill().map((_, i) => (
            <p>⭐</p>
          ))}
        </div>
        <p className="product_price">
          <small>₹</small>
          <strong className="price_text">{price}</strong>
        </p>
      </div>
      <button onClick={addToBasket}  className=" border-none bg-gradient-to-b from-[#e9f4bf] to-[#f0c14b] px-3 py-2 rounded-md mb-2 relative bottom-3 self-start" >Add to Cart</button>
    </div>
  );
}

export default Product;
