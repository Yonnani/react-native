/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';

const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  return (
      <View>
        <Text>Home Screen 입니다.</Text>
        <Button title="프로필 페이지로 이동" onPress={() => navigation.navigate('Profile')} />
      </View>
  );
}

function ProfileScreen({navigation}) {
    return (
        <View>
            <Text>Profile Screen 입니다.</Text>
        </View>
    );
}

class App extends Component {
  render() {
      return (
          <NavigationContainer>
              <Stack.Navigator>
                  <Stack.Screen
                      name="Home"
                      component={HomeScreen}
                      options={{ title: 'Welcome' }}
                  />
                  <Stack.Screen name="Profile" component={ProfileScreen} />
              </Stack.Navigator>
          </NavigationContainer>
      );
  }
};

const styles = StyleSheet.create({
});

export default App;
