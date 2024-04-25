// Libraries
import {useContext} from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';

// Constants
import COLORS from '../../constants/colors';
import ROUTES from '../../constants/routes';

// Components
import CardBackdrop from '../reusable/CardBackdrop';
import Title from '../reusable/Title';
import Price from '../reusable/Price';
import IconButton from '../reusable/IconButton';

// App-Wide State Management
import {CartContext} from '../../store/cart-context';

const Card = ({product, style}) => {
  const cartContext = useContext(CartContext);
  const navigation = useNavigation();

  const handleCardTap = () => {
    navigation.navigate(ROUTES.PRODUCT_DETAILS, {
      product: product,
    });
  };

  const addToCartHandler = () => {
    cartContext.addToCart(product);
  };

  const removeFromCartHandler = () => {
    cartContext.removeFromCart(product);
  };

  return (
    <Pressable onPress={handleCardTap}>
      <View style={[styles.card, style]}>
        <CardBackdrop imageUrl={product.imageUrl} type="small" />
        <View style={styles.detailContainer}>
          <Title style={styles.title} type={'secondary'}>
            {product.title}
          </Title>
          <Price amount={product.price.toFixed(2)} type={'primary'} />
        </View>
        <View style={styles.buttonContainer}>
          <IconButton
            name={'remove'}
            size={24}
            color={COLORS.primary100}
            onPress={removeFromCartHandler}
          />
          <Text style={styles.quantityText}>{product.quantity}</Text>
          <IconButton
            name={'add'}
            size={24}
            color={COLORS.accent500}
            onPress={addToCartHandler}
          />
        </View>
      </View>
    </Pressable>
  );
};

export default Card;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 16,
    padding: 8,
    backgroundColor: COLORS.primary100,
    shadowColor: COLORS.gray700,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.07,
    shadowRadius: 2,
    elevation: 3,
    minHeight: 120,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  detailContainer: {
    marginVertical: 12,
    marginHorizontal: 24,
    width: 160,
  },
  title: {
    marginBottom: 8,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
  },
  quantityText: {
    marginVertical: 6,
    fontSize: 16,
    color: COLORS.gray700,
  },
});
