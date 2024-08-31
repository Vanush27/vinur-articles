import {useCallback, useRef, useState} from 'react';
import {View, Text} from 'react-native';

import {useStyles} from './styles';

const Home = () => {
  const {styles} = useStyles();

  return (
    <View style={styles.container}>
      <Text>Homeee</Text>
    </View>
  );
};

export default Home;
