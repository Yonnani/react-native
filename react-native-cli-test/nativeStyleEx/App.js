/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text
} from 'react-native';


class App extends Component {

  render () {
      return (
          <View>
            <View style={styles.container}>
                <Image source={require('./assets/drink1.jpg')} style={{width: 100, height: 100}}/>

                <View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.title}>활동연대</Text>
                        <Text style={styles.detail}>2000, 2010</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={[styles.title, styles.point]}>출생</Text>
                        <Text style={styles.detail}>1993</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.title}>활동유형</Text>
                        <Text style={styles.detail}>여성, 솔로</Text>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.title}>데뷔</Text>
                        <Text style={styles.detail}>2008</Text>
                    </View>
                </View>
            </View>
          </View>
      );
  }
};

const styles = StyleSheet.create({
    container: {
      marginTop: 50,
      marginLeft: 20,
      flexDirection: 'row'
    },
    title: {
      marginLeft: 10,
        fontWeight: 'bold',
        color: 'grey',
        fontSize: 15
    },
    point: {
      color: 'red'
    },
    detail: {
      marginLeft: 10,
    }
});

export default App;
