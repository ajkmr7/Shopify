// Libraries
import React, {useState} from 'react';
import {View, StyleSheet, Image, Pressable, Text} from 'react-native';

// Constants
import COLORS from '../../constants/colors';

const Category = ({name, onPress}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handlePress = () => {
    setIsSelected(!isSelected);
    onPress(name);
  };

  return (
    <Pressable
      style={
        isSelected
          ? [styles.selectedContainer, styles.container]
          : styles.container
      }
      onPress={handlePress}>
      <View style={styles.container}>
        <Text style={[styles.title, isSelected && styles.selectedTitle]}>
          {name}
        </Text>
      </View>
    </Pressable>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    marginRight: 8,
    marginVertical: 4,
    backgroundColor: COLORS.primary100,
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 8,
  },
  title: {
    marginLeft: 4,
    fontWeight: 'bold',
    color: COLORS.gray700,
  },
  selectedContainer: {
    elevation: 3,
    shadowColor: COLORS.primary800,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowRadius: 2,
    shadowOpacity: 0.2,
  },
  selectedTitle: {
    color: COLORS.primary800,
  },
});