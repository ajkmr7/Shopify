// Libraries
import { NavigationContainer } from "@react-navigation/native";

// App-Wide State Management
import WishlistContextProvider from "../store/wishlist-context";
import CartContextProvider from "../store/cart-context";

// Navigator
import StackNavigator from "./StackNavigator";

const MainNavigator = () => (
  <CartContextProvider>
    <WishlistContextProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </WishlistContextProvider>
  </CartContextProvider>
);

export default MainNavigator;
