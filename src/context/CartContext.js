import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

const initialState = {
  cartList: [],
  total: 0,
};

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product) => {
    const existingItem = state.cartList.find(
      (item) => item.name === product.name
    );

    if (existingItem) {
      const updatedCartList = state.cartList.map((item) =>
        item.name === product.name
          ? { ...item, quantity: (item.quantity || 1) + 1 }
          : item
      );
      updateTotal(updatedCartList);
      dispatch({
        type: "ADD_TO_CART", // Keeping your original type
        payload: {
          products: updatedCartList,
        },
      });
    } else {
      const updatedCartList = [...state.cartList, { ...product, quantity: 1 }];
      updateTotal(updatedCartList);
      dispatch({
        type: "ADD_TO_CART", // Keeping your original type
        payload: {
          products: updatedCartList,
        },
      });
    }
  };

  const removeFromCart = (product) => {
    const updatedCartList = state.cartList.filter(
      (current) => current.name !== product.name
    );
    updateTotal(updatedCartList);
    dispatch({
      type: "REMOVE_FROM_CART", // Keeping your original type
      payload: {
        products: updatedCartList,
      },
    });
  };

  const updateQuantity = (product, newQuantity) => {
    if (newQuantity < 1) return;

    const updatedCartList = state.cartList.map((item) =>
      item.name === product.name ? { ...item, quantity: newQuantity } : item
    );
    updateTotal(updatedCartList);

    dispatch({
      type: "ADD_TO_CART", // Reusing your existing type
      payload: {
        products: updatedCartList,
      },
    });
  };

  const updateTotal = (products) => {
    let total = 0;
    products.forEach((product) => {
      total = total + product.price * (product.quantity || 1);
    });

    dispatch({
      type: "UPDATE_TOTAL",
      payload: {
        total: total,
      },
    });
  };

  const value = {
    total: state.total,
    cartList: state.cartList,
    addToCart,
    removeFromCart,
    updateQuantity, // Only new addition
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
