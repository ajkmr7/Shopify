// Libraries
import {useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';

// Constants
import COLORS from '../constants/colors';

// Components
import ProductList from '../components/home/ProductList';
import Header from '../components/reusable/Header';

// App-Wide State Management
import {WishlistContext} from '../store/wishlist-context';

const WishlistScreen = () => {
  const wishlistContext = useContext(WishlistContext);

  let content = (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>You have no items in your wishlist.</Text>
    </View>
  );

  const wishlistedProducts = wishlistContext.products;

  if (wishlistedProducts.length > 0) {
    content = (
      <View style={styles.container}>
        <ProductList products={wishlistedProducts} cardStyle={styles.card} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Header style={styles.header}>Wishlist</Header>
      {content}
    </View>
  );
};

export default WishlistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary200,
  },
  header: {
    margin: 16,
  },
  card: {
    marginVertical: 12,
    marginHorizontal: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 36
  },
  emptyText: {
    fontSize: 18,
    color: COLORS.gray700,
    fontWeight: "bold"
  },
});
