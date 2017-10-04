import React, { Component } from 'react';
import { Alert, TouchableHighlight, StyleSheet,Linking, ActivityIndicator, ListView, Text, View, Image } from 'react-native';
import Hyperlink from 'react-native-hyperlink';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/tilbod';

class HopkaupTilbod extends Component {

    componentDidMount() {
      const fetchHopkaupTilbod = bindActionCreators(actionCreators.fetchHopkaupTilbod, this.props.dispatch);
      return fetch('http://10.11.44.101:3000/hopkaup')
        .then((response) => response.json())
        .then((responseJson) => {
          fetchHopkaupTilbod(responseJson);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    render() {

      if (this.props.isLoading) {
        return (
          <View style={{flex: 1, paddingTop: 20}}>
            <ActivityIndicator />
          </View>
        );
      }

        console.log(this.props)
    return (
      <View style={{flex: 1, flexDirection: 'column', paddingTop: 0}}>
          {
            this.props.hopkauptilbods.map((hopkauptilbod, i) => {
                if( !hopkauptilbod.price || !hopkauptilbod.link){
                  return null;
                }
              const Picture = 'https://www.hopkaup.is/' + hopkauptilbod.images.slice(25, -2);

              return(
                <View style={styles.showContainer} key={i}>
                  <TouchableHighlight onPress={() => { Linking.openURL(hopkauptilbod.link) }}>
                  <Image
                    style={{width: 400, height: 250}}
                    source={{uri:Picture}}>
                    <View style={{backgroundColor:'rgba(236, 239, 241, 0.8);' ,height:50, top: 150, marginTop: 50}}>
                        <Text style={styles.titleStyle}>
                          {hopkauptilbod.title}
                        </Text>

                    </View>
                    <View style={styles.priceStyle}>
                      <Text style={styles.priceFont}>
                        {hopkauptilbod.price}
                      </Text>
                    </View>
                  </Image>
                  </TouchableHighlight>
                </View>
              );
            })
          }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  showContainer: {
    flex: 1,
    flexDirection:"column",
    marginBottom:50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,

  },

  titleStyle: {
    fontWeight: 'bold',
    fontSize: 14,
    paddingTop:10,
    paddingLeft:10,
    paddingRight:10,
    color:'#000'
  },

priceStyle: {
  backgroundColor:'#cc181e',
  width: 120,
  height: 50,
  marginTop:-99.9,
  marginLeft:-10,
  paddingTop:10,
  paddingLeft:20,
  borderRadius:6,
},

priceFont: {
  fontWeight: 'bold',
  fontSize: 18,
  color:'#fff',

},

});
const mapStateToProps = (state) => {
  return {
    hopkauptilbods: state.tilbod.hopkauptilbods,
  }
}

export default connect(mapStateToProps)(HopkaupTilbod);
