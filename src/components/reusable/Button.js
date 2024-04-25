// Libraries
import {View, Text, Pressable, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Constants
import COLORS from '../../constants/colors';

const Button = ({title, icon, type, onPress}) => {
  let containerStyling =
    type === 'primary'
      ? [styles.container, styles.primaryContainer]
      : [styles.container, styles.secondaryContainer];
  let titleStyling =
    type === 'primary'
      ? [styles.textBase, styles.primaryTitle]
      : [styles.textBase, styles.secondaryTitle];

  let iconStyling =
    type === 'primary'
      ? {color: COLORS.accent500, size: 18}
      : {color: COLORS.primary800, size: 18};

  return (
    <Pressable onPress={onPress}>
      <View style={containerStyling}>
        <Icon name={icon} {...iconStyling} />
        <Text style={titleStyling}>{title}</Text>
      </View>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    paddingHorizontal: 12,
    paddingVertical: 12,
    flexDirection: 'row',
  },
  primaryContainer: {
    backgroundColor: COLORS.primary800,
  },
  secondaryContainer: {
    backgroundColor: COLORS.primary200,
  },
  textBase: {
    fontWeight: 'bold',
    marginLeft: 4
  },
  primaryTitle: {
    color: COLORS.accent500,
  },
  secondaryTitle: {
    color: COLORS.primary800,
  },
});
