import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen, SavedScreen} from '@screens';

import SaveIcons from 'react-native-vector-icons/AntDesign';
import HomeIcons from 'react-native-vector-icons/AntDesign';

const BottomTab = createBottomTabNavigator();

const homeIcon = (focused: boolean) => {
  return (
    <HomeIcons color={focused ? '#E37C07' : 'black'} name="home" size={24} />
  );
};

const saveIcon = (focused: boolean) => {
  return (
    <SaveIcons color={focused ? '#E37C07' : 'black'} name="save" size={24} />
  );
};

const BottomNavigator = () => {
  return (
    <BottomTab.Navigator screenOptions={{headerShown: false}}>
      <BottomTab.Screen
        component={HomeScreen}
        name="Home"
        options={() => ({
          tabBarIcon: ({focused}) => homeIcon(focused),
          title: 'Home',
          headerShown: false,
          tabBarActiveTintColor: '#E37C07',
        })}
      />
      <BottomTab.Screen
        component={SavedScreen}
        name="SaveArticle"
        options={() => ({
          tabBarIcon: ({focused}) => saveIcon(focused),
          title: 'Save',
          headerShown: false,
          tabBarActiveTintColor: '#E37C07',
        })}
      />
    </BottomTab.Navigator>
  );
};
export default BottomNavigator;
