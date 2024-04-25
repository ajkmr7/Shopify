// Libraries
import {View, StyleSheet} from 'react-native';

// Constants
import COLORS from '../../constants/colors';

// Components
import Price from './Price';

const Summary = ({price, button}) => {
  return (
    <View style={styles.container}>
      <Price amount={price.toFixed(2)} type={'secondary'} style={styles.price}/>
      {button}
    </View>
  );
};

export default Summary;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: COLORS.primary100,
    paddingVertical: 32,
    paddingHorizontal: 16,
  },
});
