import {StyleSheet} from 'react-native';
import {colors} from '@assets/colors';
import {IS_IOS} from '@constants';

export function useStyles() {
  const styles = StyleSheet.create({
    container: {
      paddingTop: IS_IOS ? 60 : 10,
      backgroundColor: colors.background,
      paddingLeft: 15,
      paddingRight: 15,
    },
    errorContainer: {
      backgroundColor: colors.ping,
    },
  });

  return {
    styles,
  };
}
