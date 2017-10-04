import React from 'react';

import {Button, View, Image, StyleSheet} from 'react-native';
import {TabNavigator} from 'react-navigation';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions/navigation';

class AhaTabComponent extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Aha',
      // Note: By default the icon is only shown on iOS. Search the showIcon option below.
  };

  render() {
    console.log(this.props);
    const displayTilbods = bindActionCreators(actionCreators.ShowTilbods, this.props.navigation.dispatch)
    return (
      <View>
            <Button
              onPress= {()=>{this.props.navigation.dispatch(actionCreators.ShowTilbods('aha'))}}
              title="Go to aha"
            />
      </View>
    );
  }
}
  //
  //
  // class HopkaupTabComponent extends React.Component {
  //
  //   static navigationOptions = {
  //       tabBarLabel: 'Home',
  //       // Note: By default the icon is only shown on iOS. Search the showIcon option below.
  //       tabBarIcon: ({ tintColor }) => (
  //         <Image
  //           source={require('./chat-icon.png')}
  //           style={[styles.icon, {tintColor: tintColor}]}
  //         />
  //       ),
  //     };
  //   render() {
  //     return (
  //       <Button
  //       onPress={() => this.props.navigation.goBack()}
  //       title="Go back home"
  //     />
  //     );
  //     }
  //   }



    const styles = StyleSheet.create({
      icon: {
        width: 26,
        height: 26,
      },
    });


const MyNotificationsScreen = TabNavigator({
  Aha:{screen:AhaTabComponent},
},
{

    tabBarPosition: 'top',
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: {
    fontSize: 2,
  },
    },
});

const mapStateToProps=(state)=>{
  return({
    showtilbod:state.showtilbod,
  });
}
export default connect(mapStateToProps)(MyNotificationsScreen);
