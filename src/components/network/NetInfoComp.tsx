import {Text} from 'react-native';
import React, {useCallback, useState} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';

import Animated, {BounceIn} from 'react-native-reanimated';
import {useStyles} from './styles';

const NetInfoComp = ({isConnected}) => {
  const {styles} = useStyles();
  const [hasInternet, setHasInternet] = useState(!isConnected);

  useFocusEffect(
    useCallback(() => {
      const netInfoSubscription = NetInfo.addEventListener((state: any) => {
        setHasInternet(state.isConnected);
      });
      return () => {
        netInfoSubscription();
      };
    }, []),
  );
  return !hasInternet ? (
    <Animated.View entering={BounceIn.delay(400)} style={styles.container}>
      <Text style={styles.text1}> Network Error</Text>
      <Text numberOfLines={2} style={styles.text2}>
        No internet connection. Some features may be unavailable
      </Text>
    </Animated.View>
  ) : null;
};

export default NetInfoComp;
