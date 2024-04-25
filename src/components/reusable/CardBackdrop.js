// Libraries
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

// Constants
import COLORS from '../../constants/colors';
import BACKDROPCOLORS from '../../constants/backdrop-colors';

const getRandomBackdropColor = () => {
  const randomIndex = Math.floor(Math.random() * BACKDROPCOLORS.length);
  return BACKDROPCOLORS[randomIndex];
};

const CardBackdrop = React.memo(({imageUrl, type}) => {
  const backdropColor = getRandomBackdropColor();

  const outerCircleStyling =
    type == 'big'
      ? [styles.bigOuterCircle, {borderColor: backdropColor}]
      : [styles.smallOuterCircle, {borderColor: backdropColor}];

  const innerCircleStyling =
    type == 'big'
      ? [styles.bigInnerCircle, {borderColor: backdropColor}]
      : [styles.smallInnerCircle, {borderColor: backdropColor}];

  const imageStyling = type == 'big' ? styles.bigImage : styles.smallImage;

  return (
    <View style={outerCircleStyling}>
      <View style={innerCircleStyling}></View>
      {imageUrl && <Image source={{uri: imageUrl}} style={imageStyling} />}
    </View>
  );
});

export default CardBackdrop;

const styles = StyleSheet.create({
  bigOuterCircle: {
    height: 130,
    width: 130,
    borderRadius: 65,
    borderWidth: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary100,
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 3,
  },
  bigInnerCircle: {
    borderWidth: 55,
    borderRadius: 55,
    height: 110,
    width: 110,
  },
  bigImage: {
    position: 'absolute',
    bottom: -10,
    right: -5,
    zIndex: 1,
    width: 90,
    height: 90,
  },
  smallOuterCircle: {
    height: 90,
    width: 90,
    borderRadius: 45,
    borderWidth: 6,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.primary100,
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
    elevation: 2,
  },
  smallInnerCircle: {
    borderWidth: 37,
    borderRadius: 37,
    height: 45,
    width: 45,
  },
  smallImage: {
    position: 'absolute',
    bottom: 2,
    right: -2,
    zIndex: 1,
    width: 60,
    height: 60,
  },
});
