import React from "react";
import Header from "./Header";
import Products from "./Products";
import CartItems from "./CartItems";
import "./Layout.css";
import { useSelector } from "react-redux";

const Layout = () => {
  const items = useSelector((state) => state.cart.itemsList);
  const showCart = useSelector((state) => state.cart.showCart);

  let totalPrice = 0;

  items.forEach((element) => {
    totalPrice += element.totalPrice;
  });

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCart && <CartItems></CartItems>}
        <div className="total-price">
          <h3>Total: ${totalPrice}</h3>
          <button className="orderBtn">Place Order</button>
        </div>{" "}
      </div>
    </React.Fragment>
  );
};

export default Layout;
