import React from 'react';
import 'react-native-devsettings';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import { RootNavigator } from './navigation/RootNavigator';
import { ApplicationProvider } from './context/ApplicationContext.tsx';
import { moviesHttpRepository } from './features/movies/infrastructure/repositories/movies-http-repository.ts';
import { SafeAreaView } from 'react-native';
enableScreens();


const App = () => {
  const createDependencies = () => ({
    moviesRepository: moviesHttpRepository,
  });

  return (
      <SafeAreaView style={{flex: 1}}>
          <ApplicationProvider dependencies={createDependencies()}>
              <RootNavigator />
          </ApplicationProvider>
      </SafeAreaView>


  );
};

export default App;
