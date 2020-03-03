import React from 'react';
import { View, Text } from 'react-native';
import Routes from './routes';

if (__DEV__) {
  import('../ReactotronConfig').then(() =>
    console.log('Reactotron Configured')
  );
}

const App = () => {
  console.tron.log('Hello there!');
  return <Routes />;
};

export default App;
