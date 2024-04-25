// Libraries
import {StyleSheet, Text} from 'react-native';

// Constants
import COLORS from '../../constants/colors';

const Title = ({children, style}) => {
  return (
    <Text
      numberOfLines={2}
      ellipsizeMode={'tail'}
      style={[styles.title, style]}>
      {children}
    </Text>
  );
};

export default Title;

const styles = StyleSheet.create({
  title: {
    color: COLORS.primary700,
    fontWeight: 'bold',
    fontSize: 13,
  },
});
