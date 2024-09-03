import {colors} from '@assets/colors';
import {fonts} from '@assets/fonts';
import {StyleSheet} from 'react-native';

export function useStyles() {
  const styles = StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',

      borderWidth: 1,
      borderRadius: 10,
      borderColor: '#cccccc',
      padding: 5,
      paddingTop: 20,
      margin: 5,
    },

    image: {width: 100, height: 100, borderRadius: 5},
    title: {
      color: colors.white,
      fontSize: fonts.size.typography_18,
      textAlign: 'center',
      fontFamily: fonts.family.monserratBold,
      paddingBottom: 20,
    },
    titleDate: {
      color: colors.white,
      fontSize: fonts.size.typography_16,
      fontFamily: fonts.family.monserratItalic,
      textAlign: 'right',
    },
    wrapperLeft: {
      flex: 0.9,
    },

    wrapperRight: {
      flex: 0.1,
    },
  });

  return {
    styles,
  };
}
