import BottomNavigator from '@navigators/bottom-navigator/BottomNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from '@screens';

const AppStack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <AppStack.Navigator screenOptions={{headerShown: false}}>
      <AppStack.Screen component={BottomNavigator} name="BottomNavigator" />
      <AppStack.Screen component={Home} name="Home" />
    </AppStack.Navigator>
  );
};

export default AppNavigator;
