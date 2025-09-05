import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToCart } from "../Features/slices/cartSlice";
import "./ShopCategory.css";

export default function ShopCategory(props) {
  const dispatch = useDispatch();
  const [data, setData] = useState([]);

  const getCategoryTitle = () => {
    switch (props.category) {
      case "mens":
        return "Men's Category";
      case "womens":
        return "Women's Category";
      case "jewelery":
        return "Jewelery Category";
      case "electronics":
        return "Electronics Category";
      default:
        return "All Products";
    }
  };

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        const allData = response.data;

        // ✅ Filter products based on category prop
        const filteredData = allData.filter((product) => {
          if (props.category === "mens") {
            return product.category === "men's clothing";
          } else if (props.category === "womens") {
            return product.category === "women's clothing";
          } else if (props.category === "jewelery") {
            return product.category === "jewelery";
          } else if (props.category === "electronics") {
            return product.category === "electronics";
          } else {
            return true; // fallback: show all
          }
        });

        setData(filteredData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [props.category]);

  return (
    <div className="mens-category-list">
      <h2>
        {getCategoryTitle()} <hr />
      </h2>
      <div className="category-grid">
        {data.map((item) => (
          <div key={item.id} className="category-card">
            <img src={item.image} alt={item.title} />
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <button onClick={() => dispatch(addToCart(item))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
