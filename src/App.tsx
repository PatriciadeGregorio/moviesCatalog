import React from 'react';
import 'react-native-devsettings';
import 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
import { RootNavigator } from './navigation/RootNavigator';
import { ApplicationProvider } from './context/ApplicationContext.tsx';
import { moviesHttpRepository } from './features/movies/infrastructure/repositories/movies-http-repository.ts';
enableScreens();


const App = () => {
  const createDependencies = () => ({
    moviesRepository: moviesHttpRepository,
  });

  return (
      <ApplicationProvider dependencies={createDependencies()}>
        <RootNavigator />
      </ApplicationProvider>

  );
};

export default App;
