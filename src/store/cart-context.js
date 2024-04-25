// Libraries
import {createContext, useState} from 'react';

export const CartContext = createContext({
  products: [],
  addToCart: product => {},
  removeFromCart: product => {},
  clearCart: () => {},
});

const CartContextProvider = ({children}) => {
  const [cartProducts, setCartProducts] = useState([]);

  const addToCart = product => {
    setCartProducts(currentCartProducts => {
      const index = currentCartProducts.findIndex(
        prod => prod.id === product.id,
      );
      if (index == -1) {
        return [...currentCartProducts, {...product, quantity: 1}];
      }
      const updatedCartProducts = [...currentCartProducts];
      updatedCartProducts[index] = {
        ...updatedCartProducts[index],
        quantity: updatedCartProducts[index].quantity + 1,
      };
      return updatedCartProducts;
    });
  };

  const removeFromCart = product => {
    setCartProducts(currentCartProducts => {
      const index = currentCartProducts.findIndex(
        prod => prod.id === product.id,
      );
      if (currentCartProducts[index].quantity == 1) {
        return currentCartProducts.filter(prod => prod.id !== product.id);
      }
      const updatedCartProducts = [...currentCartProducts];
      updatedCartProducts[index] = {
        ...updatedCartProducts[index],
        quantity: updatedCartProducts[index].quantity - 1,
      };
      return updatedCartProducts;
    });
  };

  const clearCart = () => {
    setCartProducts([]);
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
