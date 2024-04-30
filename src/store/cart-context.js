// Libraries
import { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const CartContext = createContext({
  products: [],
  addToCart: (product) => {},
  removeFromCart: (product) => {},
  clearCart: () => {},
});

const CartContextProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    loadCartProducts();
  }, []);

  const loadCartProducts = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("cartProducts");
      if (jsonValue !== null) {
        setCartProducts(JSON.parse(jsonValue));
      }
    } catch (error) {
      console.error("Error loading cart products:", error);
    }
  };

  const saveCartProducts = async (products) => {
    try {
      const jsonValue = JSON.stringify(products);
      await AsyncStorage.setItem("cartProducts", jsonValue);
    } catch (error) {
      console.error("Error saving cart products:", error);
    }
  };

  const addToCart = (product) => {
    setCartProducts((currentCartProducts) => {
      const index = currentCartProducts.findIndex(
        (prod) => prod.id === product.id
      );
      if (index === -1) {
        const updatedProducts = [
          ...currentCartProducts,
          { ...product, quantity: 1 },
        ];
        saveCartProducts(updatedProducts);
        return updatedProducts;
      }
      const updatedCartProducts = [...currentCartProducts];
      updatedCartProducts[index] = {
        ...updatedCartProducts[index],
        quantity: updatedCartProducts[index].quantity + 1,
      };
      saveCartProducts(updatedCartProducts);
      return updatedCartProducts;
    });
  };

  const removeFromCart = (product) => {
    setCartProducts((currentCartProducts) => {
      const index = currentCartProducts.findIndex(
        (prod) => prod.id === product.id
      );
      if (currentCartProducts[index].quantity === 1) {
        const updatedProducts = currentCartProducts.filter(
          (prod) => prod.id !== product.id
        );
        saveCartProducts(updatedProducts);
        return updatedProducts;
      }
      const updatedCartProducts = [...currentCartProducts];
      updatedCartProducts[index] = {
        ...updatedCartProducts[index],
        quantity: updatedCartProducts[index].quantity - 1,
      };
      saveCartProducts(updatedCartProducts);
      return updatedCartProducts;
    });
  };

  const clearCart = () => {
    setCartProducts([]);
    AsyncStorage.removeItem("cartProducts");
  };

  const value = {
    products: cartProducts,
    addToCart: addToCart,
    removeFromCart: removeFromCart,
    clearCart: clearCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
