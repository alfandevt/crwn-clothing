import cartActionType from "./cart.types";

export const toggleCartHidden = () => ({
  type: cartActionType.TOGGLE_CART_HIDDEN,
});

export const addItem = (items) => ({
  type: cartActionType.ADD_ITEM,
  payload: items,
});
