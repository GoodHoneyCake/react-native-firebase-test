import * as React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import auth from '@react-native-firebase/auth';

function App() {
  const user = auth().currentUser;

  if (!user) {
    return <Text>Please login</Text>;
  }

  return (
    <React.Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text>Welcome {user.email}</Text>
      </SafeAreaView>
    </React.Fragment>
  );
}

export default App;
