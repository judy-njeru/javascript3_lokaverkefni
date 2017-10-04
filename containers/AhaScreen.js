import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, Button } from 'react-native';
import AhaTilbod  from '../components/Aha'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default class AhaScreen extends Component {
  static navigationOptions = {
    title: 'Tilboð Dagsins',
    headerStyle:{ backgroundColor: '#cc181e'},
    headerTitleStyle:{ color: '#fff'},
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
        <Button
          onPress={() => navigate('Aha')}
          title="Aha Page"
        />

        <Button
          onPress={() => navigate('Hopkaup')}
          title="Hopkaup Page"
        />
      </View>
    );
  }
}
