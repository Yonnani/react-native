/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

class App extends Component {
  render() {
      return (
          <SafeAreaView style={styles.container}>
            {/*<View style={{width: 100, height: 100, backgroundColor: 'red'}} />*/}
            {/*<View style={{flex: 1, backgroundColor: 'red'}} />*/}
            {/*<View style={{flex: 2, backgroundColor: 'orange'}} />*/}
            {/*<View style={{flex: 3, backgroundColor: 'yellow'}} />*/}

              <View style={{width: 50, height: 50, backgroundColor: 'red'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'orange'}} />
              <View style={{width: 50, height: 50, backgroundColor: 'yellow'}} />
          </SafeAreaView>
      );
  }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center'
    }
});

export default App;
