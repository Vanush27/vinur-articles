import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Home} from '@screens';

const BottomTab = createBottomTabNavigator();

const weatherIcon = (focused: boolean) => {
  return (
    <MaterialCommunityIcons
      color={focused ? '#E37C07' : 'black'}
      name="weather-hazy"
      size={24}
    />
  );
};

const BottomNavigator = () => {
  return (
    <BottomTab.Navigator screenOptions={{headerShown: false}}>
      <BottomTab.Screen
        component={Home}
        name="Home"
        options={() => ({
          tabBarIcon: ({focused}) => weatherIcon(focused),
          title: 'Home',
          headerShown: false,
          tabBarActiveTintColor: '#E37C07',
        })}
      />
    </BottomTab.Navigator>
  );
};
export default BottomNavigator;
