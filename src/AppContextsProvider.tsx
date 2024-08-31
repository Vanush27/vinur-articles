import React, {ReactNode, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {getInitialSafeAreaMetrics} from '@utils/getInitialSafeAreaMetrics';
import {useAsyncStorage} from '@hooks';
import {Provider} from 'react-redux';
import {persist, store} from '@redux/store';
import {PersistGate} from 'redux-persist/integration/react';

export const AppContextsProvider = ({children}: IAppContextsProviderProps) => {
  const {getItem, setItem} = useAsyncStorage();

  return (
    <SafeAreaProvider initialMetrics={getInitialSafeAreaMetrics}>
      <GestureHandlerRootView style={{flex: 1}}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persist}>
            <NavigationContainer>{children}</NavigationContainer>
          </PersistGate>
        </Provider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
};

interface IAppContextsProviderProps {
  children: ReactNode;
}
