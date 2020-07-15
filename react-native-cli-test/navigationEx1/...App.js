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

import Hook from './components/Hook';

const Stack = createStackNavigator();

function HomeScreen({navigation}) {
  return (
      <View>
        <Text>Home Screen 입니다.</Text>
        <Button title="프로필 페이지로 이동"
                onPress={
                    () => navigation.navigate('Profile', {
                        itemId: 86,
                        otherParam: 'anything you want here'
                    })
                } />

        <Button title="Hook을 이용하는 방법"
              onPress={
                  () => navigation.navigate('Hook')
              } />
      </View>
  );
}

function ProfileScreen({route, navigation}) {

    const { itemId } = route.params;
    const { otherParam } = route.params;

    return (
        <View>
            <Text>Profile Screen 입니다.</Text>

            <Text>itemId: {itemId}</Text>
            <Text>otherParam: {otherParam}</Text>

            <Button title="프로필 페이지로 이동" onPress={() => navigation.push('Profile')} />
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Button title="Pop To Top" onPress={() => navigation.popToTop()} />
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
                      options={{ title: 'Welcome' }} />
                  <Stack.Screen
                      name="Profile"
                      component={ProfileScreen}
                      initialParams={{ itemId: 42, otherParam: 'test' }} />
                  <Stack.Screen
                      name="Hook"
                      component={Hook} />
              </Stack.Navigator>
          </NavigationContainer>
      );
  }
};

const styles = StyleSheet.create({
});

export default App;
