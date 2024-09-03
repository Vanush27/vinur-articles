import React from 'react';
import {View} from 'react-native';
import StarIcon from 'react-native-vector-icons/FontAwesome';

import {useStyles} from './styles';

const StarRating = ({rating}) => {
  const {styles} = useStyles();

  const ratingInt = parseInt(rating, 10);

  return (
    <View style={styles.container}>
      {[1, 2, 3, 4, 5].map(star => (
        <StarIcon
          key={star}
          name={star <= ratingInt ? 'star' : 'star-o'}
          size={20}
          color="#FFD700"
          style={styles.star}
        />
      ))}
    </View>
  );
};

export default StarRating;
