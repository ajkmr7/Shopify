// Libraries
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

//Constants
import COLORS from '../../constants/colors';

const Rating = ({rating, style}) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    if (i < rating) {
      stars.push(<Icon name="star" size={16} color={'#F6D661'} key={i} />);
    } else {
      stars.push(<Icon name="star" size={16} color={'#F6D66150'} key={i} />);
    }
  }

  return (
    <View style={[styles.container, style]}>
      {stars}
      <Text style={styles.text}>({rating})</Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    marginHorizontal: 4,
    color: COLORS.gray700,
    fontSize: 12,
  },
});
