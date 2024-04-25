// Libraries
import {View, StyleSheet, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

// Constants
import COLORS from '../../constants/colors';
import Title from '../reusable/Title';

// Utils
import {capitalizeFirstLetter} from '../../utils/StringUtil';
import Summary from '../reusable/Summary';

const DetailsPreview = ({title, description, rating, category}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Title style={styles.title}>{title}</Title>
        <View style={styles.rating}>
          <Icon name="star" size={16} color={'#F6D661'} />
          <Text style={styles.ratingText}>({rating.rate})</Text>
        </View>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{description}</Text>
        <View style={styles.categoryContainer}>
          <Title style={styles.categorySubtitle}>Category:</Title>
          <View style={styles.categoryType}>
            <Title>{capitalizeFirstLetter(category)}</Title>
          </View>
        </View>
      </View>
    </View>
  );
};

export default DetailsPreview;

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: COLORS.primary200,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    maxWidth: 300,
    fontSize: 20,
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingText: {
    margin: 4,
    marginHorizontal: 4,
    color: COLORS.gray700,
    opacity: 0.6,
    fontSize: 12,
  },
  descriptionContainer: {
    marginTop: 24,
  },
  description: {
    color: COLORS.primary700,
    fontWeight: 'bold',
    fontSize: 13,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginVertical: 24,
    alignItems: 'center',
  },
  categorySubtitle: {
    color: COLORS.gray500,
  },
  categoryType: {
    marginHorizontal: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: COLORS.accent500,
    borderRadius: 8,
  },
});
