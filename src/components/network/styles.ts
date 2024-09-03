import {StyleSheet} from 'react-native';

export function useStyles() {
  const styles = StyleSheet.create({
    container: {
      height: 200,
      padding: 30,
      position: 'absolute',
      zIndex: 1,

      top: 250,
      alignSelf: 'center',
      backgroundColor: 'white',
      borderRadius: 10,
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 2},
      shadowOpacity: 0.3,
      shadowRadius: 4,
      borderStartWidth: 5,
      borderColor: 'red',
    },
    text1: {
      fontSize: 25,
      textAlign: 'center',

      fontWeight: 'bold',
      marginBottom: 5,
      color: 'red',
    },
    text2: {textAlign: 'center', fontWeight: '500', fontSize: 20},
  });

  return {
    styles,
  };
}
