// Libraries
import { View, Text, StyleSheet } from "react-native";
import { useContext, useEffect, useState, useLayoutEffect } from "react";
import Icon from "react-native-vector-icons/Ionicons";

// Constants
import COLORS from "../constants/colors";
import backdropColors from "../constants/backdrop-colors";

// Components
import Summary from "../components/reusable/Summary";
import Button from "../components/reusable/Button";
import IconButton from "../components/reusable/IconButton";

// Screens
import ProductPreview from "../components/product_details/ProductPreview";
import DetailsPreview from "../components/product_details/DetailsPreview";

// App-wide State Management
import { CartContext } from "../store/cart-context";
import { WishlistContext } from "../store/wishlist-context";

const ProductDetails = ({ route, navigation }) => {
  const product = route.params.product;
  const cartContext = useContext(CartContext);
  const wishlistContext = useContext(WishlistContext);

  const productIndex = cartContext.products.findIndex(
    (prod) => prod.id === product.id
  );
  const isWishlisted = wishlistContext.products.includes(product);

  const [isProductInCart, setIsProductInCart] = useState(productIndex !== -1);

  useLayoutEffect(() =>
    navigation.setOptions(
      {
        headerTitle: "",
        headerShadowVisible: false,
        headerLeft: () => (
          <Icon
            name="arrow-back"
            color={COLORS.gray700}
            size={22}
            onPress={() => navigation.goBack()}
          />
        ),
        headerRight: () => (
          <Icon
            name={isWishlisted ? "heart" : "heart-outline"}
            color={"red"}
            size={22}
            onPress={toggleWishlistStatusHandler}
          />
        ),
      },
      [navigation]
    )
  );

  useEffect(() => {
    setIsProductInCart(productIndex !== -1);
  }, [productIndex]);

  const addToCartHandler = () => {
    cartContext.addToCart(product);
  };

  const removeFromCartHandler = () => {
    cartContext.removeFromCart(product);
  };

  const toggleWishlistStatusHandler = () => {
    isWishlisted
      ? wishlistContext.removeFromWishlist(product)
      : wishlistContext.addToWishlist(product);
  };

  const quantity =
    isProductInCart && productIndex !== -1
      ? cartContext.products[productIndex].quantity
      : 0;

  const addToCartButton = isProductInCart ? (
    <View style={styles.buttonContainer}>
      <IconButton
        name={"remove"}
        size={30}
        color={COLORS.primary100}
        onPress={removeFromCartHandler}
      />
      <Text style={styles.quantityText}>{quantity}</Text>
      <IconButton
        name={"add"}
        size={30}
        color={COLORS.accent500}
        onPress={addToCartHandler}
      />
    </View>
  ) : (
    <Button
      title={"Add To Cart"}
      icon={"cart"}
      type={"secondary"}
      onPress={addToCartHandler}
    />
  );

  return (
    <View style={styles.container}>
      <ProductPreview imageUrl={product.imageUrl} color={backdropColors[0]} />
      <View style={styles.footer}>
        <View style={styles.details}>
          <DetailsPreview {...product} />
        </View>
        <Summary price={product.price} button={addToCartButton} />
      </View>
    </View>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary100,
  },
  footer: {
    backgroundColor: COLORS.primary200,
  },
  details: {
    backgroundColor: COLORS.primary100,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  quantityText: {
    marginHorizontal: 8,
    fontSize: 18,
    color: COLORS.gray700,
  },
});
