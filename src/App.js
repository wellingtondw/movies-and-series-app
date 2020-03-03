import React from 'react';
import { View, Text } from 'react-native';

if (__DEV__) {
  import('../ReactotronConfig').then(() =>
    console.log('Reactotron Configured')
  );
}

const App = () => {
  console.tron.log('Hello there!');
  return (
    <View>
      <Text>Hello T</Text>
    </View>
  );
};

export default App;
