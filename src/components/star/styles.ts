import {StyleSheet} from 'react-native';

export function useStyles() {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
    star: {
      marginHorizontal: 2,
    },
  });

  return {
    styles,
  };
}
