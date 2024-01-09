import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    totalQuantity: 0,
    showCart: false,
  },
  reducers: {
    addToCart(state, action) {
      //1.we get the item from payload when we click on add to cart
      const newItem = action.payload;

      //2.We check if item already exist
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );
      //3.If it exist we increase the quantity & price, if not we add into itemsList
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        const newItemToBeAdded = {
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.name,
        };

        state.itemsList.push(newItemToBeAdded);
        state.totalQuantity++;
      }
    },

    removeFromCart(state, action) {
      const id = action.payload;

      const existingItem = state.itemsList.find((item) => item.id === id);

      if (existingItem.quantity === 1) {
        state.itemsList = state.itemsList.filter((item) => item.id !== id);
        state.totalQuantity--;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },

    setShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
