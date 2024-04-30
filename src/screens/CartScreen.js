// Libraries
import { useContext, useLayoutEffect } from "react";
import { View, StyleSheet, TouchableOpacity, Alert, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

// Constants
import COLORS from "../constants/colors";
import ROUTES from "../constants/routes";

// Components
import CartList from "../components/cart/CartList";
import Header from "../components/reusable/Header";
import Button from "../components/reusable/Button";
import Summary from "../components/reusable/Summary";

// App-Wide State Management
import { CartContext } from "../store/cart-context";

const CartScreen = ({ navigation }) => {
  const cartContext = useContext(CartContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "",
      headerShadowVisible: false,
      headerStyle: {
        backgroundColor: COLORS.primary200,
      },
      headerLeft: () => (
        <Icon
          name="arrow-back"
          color={COLORS.gray700}
          size={22}
          onPress={() => navigation.goBack()}
        />
      ),
      headerRight: () => (
        <TouchableOpacity
          onPress={handleTrashPress}
          disabled={cartContext.products.length === 0}
        >
          <View
            style={{
              marginHorizontal: 16,
              opacity: cartContext.products.length === 0 ? 0.5 : 1,
            }}
          >
            <Icon name="trash" color={COLORS.gray500} size={22} />
          </View>
        </TouchableOpacity>
      ),
    });
  }, [navigation, cartContext.products.length]);

  const handleTrashPress = () => {
    Alert.alert(
      "Clear Cart",
      "Are you sure you want to clear your cart?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Clear",
          onPress: clearCartHandler,
          style: "destructive",
        },
      ],
      { cancelable: true }
    );
  };

  const clearCartHandler = () => {
    cartContext.clearCart();
  };

  const checkoutHandler = () => {
    navigation.navigate(ROUTES.WEBVIEW, { url: "http://localhost:3000/" });
  };

  const checkoutButton = (
    <Button
      title={"Check Out"}
      icon={"log-out-outline"}
      type={"primary"}
      onPress={checkoutHandler}
    />
  );

  let content = (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>Your cart is empty.</Text>
    </View>
  );

  const cartProducts = cartContext.products;

  const cartValue = () => {
    let totalCartValue = 0;
    cartProducts.forEach((product) => {
      const subtotal = product.price * product.quantity;
      totalCartValue += subtotal;
    });
    return totalCartValue;
  };

  if (cartProducts.length > 0) {
    content = (
      <View style={styles.container}>
        <CartList products={cartProducts} cardStyle={styles.card} />
        <Summary price={cartValue()} button={checkoutButton} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header style={styles.header}>My Cart</Header>
      {content}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary200,
  },
  header: {
    margin: 16,
  },
  card: {
    marginHorizontal: 16,
    marginVertical: 4,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 36,
  },
  emptyText: {
    fontSize: 18,
    color: COLORS.gray700,
    fontWeight: "bold",
  },
});
