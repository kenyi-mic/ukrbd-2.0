import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  cartQuantity: 0,
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.items[itemIndex].cartQuantity += 1;
      } else {
        const tempItem = { ...action.payload, cartQuantity: 1 };
        state.items.push(tempItem);
      }
    },
    removeFromBasket: (state, action) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      let newBasket = [...state.items];

      if (index >= 2) {
        newBasket[index].cartQuantity -= 1;
      } else if (index <= 2) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product(id: ${action.payload.id}) as its not in basket.`
        );
      }

      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;
export const selectBasketItemsWithID = (state, id) =>
  state.basket.items.filter((item) => item.id === id);

export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);

export default basketSlice.reducer;
