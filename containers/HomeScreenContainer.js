import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet, Button, TouchableHighlight } from 'react-native';
import AhaTilbod  from '../components/Aha'
import HopkaupTilbod  from '../components/Hopkaup'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actions from '../actions/navigation';


class HomeScreenContainer extends Component {
  static navigationOptions = {
    title: 'Tilboð Dagsins',
    headerStyle:{ backgroundColor: '#cc181e'},
    headerTitleStyle:{ color: '#fff'},
  }


  render() {
    const ShowTilbods = bindActionCreators(actions.ShowTilbods, this.props.dispatch);
    return (

      <View>
        <View style = {styles.topNavBar}>
          <Text style= {styles.topNavBarText} >Tilbod Dagsins</Text>
        </View>
        <View style={styles.navigation}>
          <TouchableHighlight onPress={() => ShowTilbods('aha')}>
            <Text style={this.props.showtilbod==='aha'? styles.underline:styles.navText}> Aha</Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={() => ShowTilbods('hopkaup')}>
            <Text style={this.props.showtilbod==='hopkaup'? styles.underline:styles.navText}>Hopkaup</Text>
          </TouchableHighlight>
        </View>
        <ScrollView style={styles.container}>
            <HopkaupTilbod />
            <AhaTilbod />
          <Text style={styles.headerStyle}></Text>
        </ScrollView>
      </View>
    );
  }
}
const generalStyle={
  color:'#fff',
  fontFamily:'Verdana-Bold',
  paddingTop:2
}

const styles = StyleSheet.create({

  topNavBar:{
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height:70,
    backgroundColor: "#cc181e",
  },

  topNavBarText:{
    color:'#fff',
    fontFamily:'Verdana',
    fontWeight:'bold',
    fontSize:18,
    marginTop: 20,
  },

  navText:{ //inactive
    ...generalStyle,
  },

  navigation:{
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    height:35,
    backgroundColor: "#cc181e",
  },

  showContainer: {
    flex: 1,
    flexDirection:"column",
    marginBottom:50,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,

  },
  underline: {//active
      ...generalStyle,

    
    textDecorationLine: "underline",
    textDecorationStyle: "solid",
    textDecorationColor: "#fff",

  },
})


const mapStateToProps = (state) => {
  return {
    showtilbod:state.showtilbod
  }
}

export default connect(mapStateToProps)(HomeScreenContainer);
