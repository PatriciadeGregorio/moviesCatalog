import React from 'react';
import { enableScreens } from 'react-native-screens';
import { RootNavigator } from "./navigation/RootNavigator";
enableScreens();


const App = () => {
  return <RootNavigator />;
};

export default App;
