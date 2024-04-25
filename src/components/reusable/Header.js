// Libraries
import {StyleSheet, Text} from 'react-native';

// Constants
import COLORS from '../../constants/colors';

const Header = ({children, style}) => {
  return <Text style={[styles.header, style]}>{children}</Text>;
};

export default Header;

const styles = StyleSheet.create({
  header: {
    color: COLORS.gray700,
    fontWeight: 'bold',
    fontSize: 24,
  },
});
