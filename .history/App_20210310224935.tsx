import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';

const App = (props: any) => (
  <>
    <StatusBar barStyle="dark-content" />
    <SafeAreaView>
      <Text>Hello World</Text>
    </SafeAreaView>
  </>
);

export default App;
