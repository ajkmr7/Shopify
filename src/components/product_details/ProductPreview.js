// Libraries
import {View, StyleSheet, Image} from 'react-native';

// Constants
import COLORS from '../../constants/colors';

// Utils
import {lightenColor} from '../../utils/ColorUtil';

const ProductPreview = ({imageUrl, color}) => {
  return (
    <View style={styles.container}>
      <View style={[styles.outerCircle, {backgroundColor: color}]}>
        <View
          style={[
            styles.innerCircle,
            {backgroundColor: lightenColor(color)},
          ]}></View>
        {imageUrl && <Image source={{uri: imageUrl}} style={styles.image} />}
      </View>
    </View>
  );
};

export default ProductPreview;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  outerCircle: {
    width: 250,
    height: 250,
    borderRadius: 125,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    zIndex: 0,
  },
  innerCircle: {
    width: 180,
    height: 180,
    borderRadius: 125,
    borderWidth: 1,
    borderColor: COLORS.primary100,
    zIndex: 0,
  },
  image: {
    zIndex: 1,
    width: 150,
    height: 150,
    position: 'absolute',
  },
});
