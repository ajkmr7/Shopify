// Libraries
import {View, StyleSheet, FlatList} from 'react-native';
import Category from '../reusable/Category';
import {capitalizeFirstLetter} from '../../utils/StringUtil';

const Categories = ({data, toggleFilter}) => {
  const renderCategory = itemData => (
    <Category
      name={capitalizeFirstLetter(itemData.item)}
      onPress={() => toggleFilter(itemData.item)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderCategory}
        keyExtractor={item => item}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatListContent}
      />
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 8
  },
  flatListContent: {
    paddingHorizontal: 16,
    alignItems: 'center',
  },
});
