import { createContext, useReducer, useState } from "react";

const CartContext = createContext({
  theme: "",
  items: [],
  toogleTheme: () => {},
  addItem: () => {},
  removeItem: () => {},
  removeAll: () => {},
  clearCart: () => {},
});

function cartRudecer(state, action) {
  if (action.type === "ADD_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const updateItems = [...state.items];

    if (existingItemIndex > -1) {
      const existingItem = state.items[existingItemIndex];
      const updateItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updateItems[existingItemIndex] = updateItem;
    } else {
      updateItems.push({ ...action.item, quantity: 1 });
    }

    return { ...state, items: updateItems };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingItem = state.items[existingItemIndex];
    const updateItems = [...state.items];

    if (existingItem.quantity === 1) {
      updateItems.splice(existingItemIndex, 1);
    } else {
      const updateItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updateItems[existingItemIndex] = updateItem;
    }

    return { ...state, items: updateItems };
  }

  if (action.type === "REMOVE_ALL") {
    const updateItems = state.items.filter((item) => item.id !== action.id);
    return { ...state, items: updateItems };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, items: [] };
  }
}

export function CartContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, dispatchCartAction] = useReducer(cartRudecer, { items: [] });

  function handleToggleTheme() {
    setDarkMode((prev) => {
      const newMode = !prev;
      if (newMode) {
        document.documentElement.setAttribute("data-theme", "dark");
        document
          .getElementById("root")
          .classList.replace("bg-gradient-light", "bg-gradient-dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
        document
          .getElementById("root")
          .classList.replace("bg-gradient-dark", "bg-gradient-light");
      }
      return newMode;
    });
  }

  function handleAddItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }

  function handleRemoveItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  }

  function handleRemoveAll(id) {
    dispatchCartAction({ type: "REMOVE_ALL", id });
  }

  function handleClearCart() {
    dispatchCartAction({ type: "CLEAR_CART" });
  }

  const cartContext = {
    theme: darkMode,
    items: cart.items,
    toogleTheme: handleToggleTheme,
    addItem: handleAddItem,
    removeItem: handleRemoveItem,
    removeAll: handleRemoveAll,
    clearCart: handleClearCart,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
