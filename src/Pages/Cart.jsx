import React, { useContext } from 'react';
import { CartContext } from '../Context/CartContext';
import './Cart.css'; 

export default function Cart() {
  const { cartItems, getTotalPrice, removeFromCart,increaseQuantity,
        decreaseQuantity, } = useContext(CartContext);



  
  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div className="cart-item">
  <img src={item.image} alt={item.title} width="80" height="80" />

  <div className="cart-item-details">
    <h4>{item.title}</h4>
    <p>Price: ${item.price} × {item.quantity} = ${item.price * item.quantity}</p>

    {/* Quantity buttons */}
    <div className="quantity-controls">
      <button onClick={() => decreaseQuantity(item.id)}>-</button>
      <span>{item.quantity}</span>
      <button onClick={() => increaseQuantity(item.id)}>+</button>
    </div>
  </div>

  <button className="remove-button" onClick={() => removeFromCart(item.id)}>Remove</button>
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
