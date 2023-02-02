import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const More = () => {
  const { productId } = useParams();
  const [producte, producteRender] = useState([]);
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((res) => res.json())
      .then((json) => producteRender(json));
  }, []);

  return (
    <div className="container more-card">
      <div className="more-card-text">
        <h2 className="more-h2">Tittle: {producte.title}</h2>
        <p className="more-description">
          <span className="des-span">Description:</span> {producte.description}
        </p>
        <p className="more-price">
          <span className="des-span">Price:</span> {producte.price}$
        </p>
        <p className="more-category">
          <span className="des-span">Categoria:</span> {producte.category}
        </p>
      </div>

      <img src={producte.image} className="more-img" alt="rasm" />
    </div>
  );
};
export default More;
