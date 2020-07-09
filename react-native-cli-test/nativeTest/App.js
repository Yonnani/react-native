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
  Button
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

class App extends Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      address: ''
    }
  }

  writeAddress = () => {
    this.setState({
        address: '서울시 성북구'
    }, function () {
      alert('alert');
    })

  }

  resetAddress = () => {
    this.setState({
        address: ''
    })
  }
  
  render () {
      return (
          <View style={styles.container}>
              <Text style={styles.hello}>Hello World!</Text>
              <Flower type='one' />
              <Flower type='two' />

              <Text>{ this.state.address }</Text>
              <Button title={'나의 주소 출력'} onPress={this.writeAddress} />
              <Button title={'리셋'} onPress={this.resetAddress} />
          </View>
      );
  }
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
