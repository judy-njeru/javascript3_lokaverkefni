import React from 'react';

import {Button, View} from 'react-native';
import {StackNavigator} from 'react-navigation';

class HomeScreenComponent extends React.Component {


  static navigationOptions={
    title: 'tilbod-dagsins',
    headerStyle:{ backgroundColor: '#cc181e'},
    headerTitleStyle:{ color: '#fff'},
  };
  render() {
    return (
      <Button
        title="Aha"
      />
    );
    }
}


const HomeScreen = StackNavigator({
  Home:{screen:HomeScreenComponent}
});

export default HomeScreen;
