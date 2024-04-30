// Libraries
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, StyleSheet, Pressable } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

// Screens
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import WishlistScreen from "../screens/WishlistScreen";

// Constants
import COLORS from "../constants/colors";
import ROUTES from "../constants/routes";

const BottomTabs = createBottomTabNavigator();

const BottomTabBar = ({ navigation }) => {
  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        headerTitleStyle: { display: "none" },
        headerStyle: {
          backgroundColor: COLORS.primary200,
          shadowOffset: 0,
        },
        headerLeft: () => {
          return (
            <View style={{ marginHorizontal: 16 }}>
              <Icon name="menu" color={COLORS.gray700} size={22} />
            </View>
          );
        },
        tabBarShowLabel: false,
        tabBarInactiveTintColor: COLORS.gray700,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: COLORS.primary800,
        tabBarIcon: ({ color, size, focused }) => {
          // TODO: Render Icons based on Route
          let iconName;
          switch (route.name) {
            case ROUTES.HOME:
              iconName = focused ? "home" : "home-outline";
              break;
            case ROUTES.CART:
              iconName = focused ? "cart" : "cart-outline";
              break;
            case ROUTES.WISHLIST:
              iconName = focused ? "heart" : "heart-outline";
              break;
          }
          return <Icon name={iconName} color={color} size={size} />;
        },
      })}
    >
      <BottomTabs.Screen
        name={ROUTES.HOME}
        component={HomeScreen}
        options={{
          headerRight: () => {
            return (
              <View style={{ marginHorizontal: 16 }}>
                <Icon name="search" color={COLORS.gray700} size={22} />
              </View>
            );
          },
        }}
      />
      <BottomTabs.Screen
        name={ROUTES.CART}
        component={CartScreen}
        options={{
          tabBarButton: (props) => (
            <Pressable
              {...props}
              onPress={() => navigation.navigate(ROUTES.CART)}
            />
          ),
        }}
      />
      <BottomTabs.Screen name={ROUTES.WISHLIST} component={WishlistScreen} />
    </BottomTabs.Navigator>
  );
};

export default BottomTabBar;

const styles = StyleSheet.create({
  tabBarStyle: {
    position: "absolute",
    backgroundColor: "white",
    borderTopWidth: 0,
    height: 92,
  },
});
