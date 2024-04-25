// Libraries
import {createContext, useState} from 'react';

export const WishlistContext = createContext({
  products: [],
  addToWishlist: product => {},
  removeFromWishlist: product => {},
});

const WishlistContextProvider = ({children}) => {
  const [wishlistProducts, setWishlistProducts] = useState([]);

  const addToWishlist = product => {
    setWishlistProducts(currentWishlistedProducts => [
      ...currentWishlistedProducts,
      product,
    ]);
  };

  const removeFromWishlist = product => {
    setWishlistProducts(currentWishlistedProducts =>
      currentWishlistedProducts.filter(
        currentWishlistedProduct => currentWishlistedProduct.id !== product.id,
      ),
    );
  };

  const value = {
    products: wishlistProducts,
    addToWishlist: addToWishlist,
    removeFromWishlist: removeFromWishlist,
  };

  return (
    <WishlistContext.Provider value={value}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistContextProvider;
