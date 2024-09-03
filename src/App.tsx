import React from 'react';
import RootNavigator from '@navigators/RootNavigator';
import {AppContextsProvider} from './AppContextsProvider';
import 'react-native-reanimated';

const App = () => {
  return (
    <AppContextsProvider>
      <RootNavigator />
    </AppContextsProvider>
  );
};

export default App;
