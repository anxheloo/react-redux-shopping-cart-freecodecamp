import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector, useDispatch } from "react-redux";
import Notification from "./components/Notification";
import { uiActions } from "./store/ui-slice";

let isFirstRender = true;

function App() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cart = useSelector((state) => state.cart);
  const notification = useSelector((state) => state.ui.notification);

  // console.log("This is notification:", notification);
  // console.log("This is notification.type:", notification.type);

  useEffect(() => {
    //prevent useEffect from running first time
    if (isFirstRender) {
      isFirstRender = false;
      return;
    }

    const sendRequest = async () => {
      try {
        dispatch(
          uiActions.showNotification({
            open: true,
            message: "Sending Request",
            type: "warning",
          })
        );

        const res = await fetch(
          "https://redux-freecodecamp-af2e0-default-rtdb.firebaseio.com/cartItems.json",
          {
            method: "PUT",
            body: JSON.stringify(cart),
          }
        );

        const data = await res.json();
        console.log("THIS IS data:", data);

        dispatch(
          uiActions.showNotification({
            open: true,
            message: "Sent Request To Database Successfully",
            type: "success",
          })
        );
      } catch (error) {
        console.log("THIS IS ERROR:", error);
        dispatch(
          uiActions.showNotification({
            open: true,
            message: "Sent Request To Failed",
            type: "error",
          })
        );
      }
    };

    sendRequest();
  }, [cart]);

  return (
    <div className="App">
      {notification && (
        <Notification
          type={notification?.type}
          message={notification?.message}
        ></Notification>
      )}
      {isLoggedIn ? <Layout /> : <Auth />}
      {/* <Auth /> */}
      {/* <Layout /> */}
    </div>
  );
}

export default App;
