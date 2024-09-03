import {StyleSheet} from 'react-native';
import {colors} from '@assets/colors';
import {IS_IOS} from '@constants';

export function useStyles() {
  const styles = StyleSheet.create({
    container: {
      paddingTop: IS_IOS ? 60 : 10,
      flex: 1,
      backgroundColor: colors.background,
    },
  });

  return {
    styles,
  };
}
