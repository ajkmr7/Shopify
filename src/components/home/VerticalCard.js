// Libraries
import {useContext} from 'react';
import {View, StyleSheet, Dimensions, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

// Constants
import COLORS from '../../constants/colors';
import ROUTES from '../../constants/routes';

// Components
import CardBackdrop from '../reusable/CardBackdrop';
import Title from '../reusable/Title';
import Price from '../reusable/Price';
import Rating from '../reusable/Rating';

// App-Wide State Management
import {WishlistContext} from '../../store/wishlist-context';

const {width: screenWidth} = Dimensions.get('window');
const cardWidth = screenWidth / 2 - 36;

const VerticalCard = ({product, style}) => {
  const wishlistContext = useContext(WishlistContext);
  const navigation = useNavigation();

  const wishlistedProducts = wishlistContext.products;
  const isWishlisted = wishlistedProducts.includes(product);

  const toggleWishlistStatusHandler = () => {
    isWishlisted
      ? wishlistContext.removeFromWishlist(product)
      : wishlistContext.addToWishlist(product);
  };

  const handleCardTap = () => {
    navigation.navigate(ROUTES.PRODUCT_DETAILS, {
      product: product,
    });
  };

  return (
    <Pressable onPress={handleCardTap}>
      <View style={[styles.card, style]}>
        <Pressable onPress={toggleWishlistStatusHandler}>
          <View style={styles.wishlistContainer}>
            <Icon
              name={isWishlisted ? 'heart' : 'heart-outline'}
              size={24}
              color={'red'}
            />
          </View>
        </Pressable>

        <View style={styles.innerContainer}>
          <CardBackdrop imageUrl={product.imageUrl} type="big" />
          <Title style={styles.title} type={'secondary'}>
            {product.title}
          </Title>
          <Price
            style={styles.price}
            amount={product.price.toFixed(2)}
            type={'primary'}
          />
          <Rating style={styles.rating} rating={product.rating.rate} />
        </View>
      </View>
    </Pressable>
  );
};

export default VerticalCard;

const styles = StyleSheet.create({
  card: {
    borderRadius: 16,
    padding: 16,
    backgroundColor: COLORS.primary100,
    shadowColor: COLORS.gray700,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    width: cardWidth,
    minHeight: 1.6 * cardWidth,
    shadowOpacity: 0.07,
    shadowRadius: 2,
    elevation: 3,
  },
  wishlistContainer: {
    alignItems: 'flex-end',
  },
  innerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginTop: 16,
    marginHorizontal: 8,
    marginBottom: 6,
    textAlign: 'center',
  },
  price: {
    margin: 4,
  },
  rating: {
    marginTop: 12,
  },
});
