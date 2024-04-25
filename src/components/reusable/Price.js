// Libraries
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// Constants
import COLORS from '../../constants/colors';

const Price = ({amount, type, style}) => {
  const textStyle =
    type.toLowerCase() === 'primary'
      ? [styles.primaryBase, styles.primaryAmount]
      : [styles.secondaryBase, styles.secondaryAmount];
  const symbolStyle =
    type.toLowerCase() === 'primary'
      ? [styles.primaryBase, styles.primarySymbol]
      : [styles.secondaryBase, styles.secondarySymbol];

  return (
    <View style={[styles.container, style]}>
      <Text style={symbolStyle}>$ </Text>
      <Text style={textStyle}>{amount}</Text>
    </View>
  );
};

export default Price;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: "center"
  },
  primaryBase: {
    color: COLORS.primary800,
  },
  secondaryBase: {
    color: COLORS.gray700,
  },
  primaryAmount: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  secondaryAmount: {
    fontSize: 26,
    fontWeight: 'bold',
  },
  primarySymbol: {
    fontSize: 12,
    marginBottom: 8,
  },
  secondarySymbol: {
    fontSize: 14,
    marginBottom: 10,
  },
});
