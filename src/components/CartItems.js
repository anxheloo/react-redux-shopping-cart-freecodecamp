import React from "react";
import CartItem from "./CartItem";
import "./Cart.css";
import { useSelector } from "react-redux";

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.itemsList);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <ul>
        <li>
          {cartItems.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              price={item.price}
              name={item.name}
              quantity={item.quantity}
              totalPrice={item.totalPrice}
            />
          ))}
        </li>
      </ul>
    </div>
  );
};

export default CartItems;
