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
  Image,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

class Flower extends Component {
  render () {
    let flower = '';
    if (this.props.type === 'one') {
      flower = require('./assets/flower1.jpg');
    } else if (this.props.type === 'two') {
      flower = require('./assets/flower2.jpg');
    }

    return (
        <View>
          <Image source={flower} style={{width: 100, height: 100}} />
        </View>
    )
  }
}

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.hello}>Hello World!</Text>
      <Flower type='one' />
      <Flower type='two' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  hello: {
    color: 'red'
  }
});

export default App;
