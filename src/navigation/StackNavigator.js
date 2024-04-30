// Libraries
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Navigators
import BottomTabBar from "./BottomTabBar";

// Constants
import ROUTES from "../constants/routes";

// Screens
import ProductDetails from "../screens/ProductDetails";
import CartScreen from "../screens/CartScreen";
import WebViewScreen from "../screens/WebViewScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={ROUTES.BOTTOM_TABS}
      component={BottomTabBar}
      options={{ headerShown: false }}
    />
    <Stack.Screen name={ROUTES.PRODUCT_DETAILS} component={ProductDetails} />
    <Stack.Screen name={ROUTES.CART} component={CartScreen} />
    <Stack.Screen name={ROUTES.WEBVIEW} component={WebViewScreen} />
  </Stack.Navigator>
);

export default StackNavigator;
