import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";





const About = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(8);
  function handleDecrease() {
    setCount(count + 1);
  }
  function handleIncrease() {
    setCount(count - 1);
  }
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${count}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [count]);



 

  return (
    <div className="container">
      <h2 className="about-h2">Xaridlar bo'limi</h2>
      <p className="nechta">Nechta mahsulot ko'rsatilsin</p>
      <div>
        <button
          onClick={handleIncrease}
          disabled={count < 2}
          className="inc-btn"
        >
          -
        </button>
        {count}
        <button
          onClick={handleDecrease}
          disabled={count > 19}
          className="dec-btn"
        >
          +
        </button>
      </div>
      <div className="cards">
        {products.length === 0 ? (
          <img src="loading.png" alt="loading" className="loading" />
        ) : (
          products.map((p) => <Product product={p} key={p.id} />)
        )}
      </div>
    </div>
  );
};

export default About;
