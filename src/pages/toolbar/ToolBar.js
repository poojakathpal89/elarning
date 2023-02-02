import React from 'react';
import { Text, View, TouchableOpacity, StatusBar } from 'react-native';
import CustomToolbar from './components/CustomToolbar';   //<---- Import CustomToolbar here
export default class DetailsScreen extends React.Component {
  static navigationOptions = {
    header: null,
    };
  render() {
    return (
      <View style={{ flex: 1, }}>
       <StatusBar backgroundColor="#FFFFFF" barStyle="dark-content" />
       <CustomToolbar title="Header" backgroundColor="#FFFFFF"/>   
      </View>
    );
  }
}