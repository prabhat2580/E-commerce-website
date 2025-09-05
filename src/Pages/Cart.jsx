import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Cart.css";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../Features/slices/cartSlice";

export default function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Sync cart to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  //  Get total price
  const getTotalPrice = () =>
    cartItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} width="80" height="80" />

                <div className="cart-item-details">
                  <h4>{item.title}</h4>
                  <p>
                    Price: ${item.price} × {item.quantity} = $
                    {(item.price * item.quantity).toFixed(2)}
                  </p>

                  {/* Quantity buttons */}
                  <div className="quantity-controls">
                    <button onClick={() => dispatch(decreaseQuantity(item.id))}>
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button onClick={() => dispatch(increaseQuantity(item.id))}>
                      +
                    </button>
                  </div>
                </div>

                <button
                  className="remove-button"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
          <hr />

          <div className="cart-footer">
            <button className="checkout-button">Checkout</button>
            <h3>Total: ${getTotalPrice()}</h3>
          </div>
        </>
      )}
    </div>
  );
}
