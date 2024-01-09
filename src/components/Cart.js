import React from "react";
import "./Cart.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../store/cart-slice";

const Cart = () => {
  const dispatch = useDispatch();

  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCart = () => {
    dispatch(cartActions.setShowCart());
  };

  return (
    <div className="cartIcon" onClick={toggleCart}>
      <h3>Cart: {totalQuantity} Items</h3>
    </div>
  );
};

export default Cart;
