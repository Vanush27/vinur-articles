import {StyleSheet} from 'react-native';

export function useStyles() {
  const styles = StyleSheet.create({
    container: {
      padding: 8,
    },
  });

  return {
    styles,
  };
}
