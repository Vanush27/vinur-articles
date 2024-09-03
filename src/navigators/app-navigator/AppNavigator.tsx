import BottomNavigator from '@navigators/bottom-navigator/BottomNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ArticleScreen, HomeScreen} from '@screens';

const AppStack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen component={BottomNavigator} name="BottomNavigator" />
      <AppStack.Screen component={HomeScreen} name="Home" />
      <AppStack.Screen component={ArticleScreen} name="ArticleScreen" />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
