// Libraries
import {FlatList} from 'react-native';

// Components
import VerticalCard from './VerticalCard';

const ProductList = ({products, cardStyle}) => {
  const renderProduct = itemData => {
    return <VerticalCard product={itemData.item} style={cardStyle} />;
  };

  return (
    <FlatList
      data={products}
      renderItem={renderProduct}
      numColumns={2}
      keyExtractor={item => item.id}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default ProductList;
