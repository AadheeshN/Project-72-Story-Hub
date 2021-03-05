import * as React from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

export default class ReadStoryScreen extends React.Component {
  render() {
    return(
      <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Read Story</Text>
      </View>
    );
  }
}