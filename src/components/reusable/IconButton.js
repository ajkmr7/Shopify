// Libraries
import {Pressable, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Constants
import COLORS from '../../constants/colors';

const IconButton = ({name, color, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => pressed && styles.pressed}>
      <View style={[styles.buttonContainer, {backgroundColor: color}]}>
        <Icon name={name} color={COLORS.primary800} size={20}/>
      </View>
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  buttonContainer: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginHorizontal: 8,
    marginVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.07,
    shadowRadius: 2,
    elevation: 3,
  },
  pressed: {
    opacity: 0.75,
  },
});
