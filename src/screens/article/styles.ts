import {colors} from '@assets/colors';
import {StyleSheet} from 'react-native';

import {IS_IOS} from '@constants';

export function useStyles() {
  const styles = StyleSheet.create({
    container: {
      paddingTop: IS_IOS ? 60 : 10,
      paddingLeft: 15,
      paddingRight: 15,
      flex: 1,
      backgroundColor: colors.background,
    },
    image: {width: '100%', height: 200, borderRadius: 10},
  });

  return {
    styles,
  };
}
