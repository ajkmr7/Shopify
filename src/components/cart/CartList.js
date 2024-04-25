// Libraries
import {FlatList, Text} from 'react-native';

// Components
import HorizontalCard from './HorizontalCard';

const CartList = ({products, cardStyle}) => {
  const renderCartItem = itemData => {
    return <HorizontalCard product={itemData.item} style={cardStyle} />;
  };

  return (
    <FlatList
      data={products}
      renderItem={renderCartItem}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default CartList;
