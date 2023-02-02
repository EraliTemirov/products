import React from "react";
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt="rasm" className="img" />
      <h3 className="category">Company: {product.category}</h3>
      <p className="price ">Price: {product.price} $</p>
      <Link to={`/about/${product.id}`} className="btn">
        <button className="btn"> More...</button>
      </Link>
    </div>
  );
};
export default Product;