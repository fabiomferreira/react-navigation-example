import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Button } from 'native-base';

import { StackNavigator } from 'react-navigation';

export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('Chat', { user: 'Lucy' })}
          title="Chat with Lucy"
        />
      </View>
    );
  }
}