import React, { Component } from 'react';
import { Alert, TouchableHighlight, StyleSheet,Linking, ActivityIndicator, ListView, Text, View, Image } from 'react-native';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/tilbod';

class AhaTilbod extends Component {

  componentDidMount() {
    const fetchAhaTilbod = bindActionCreators(actionCreators.fetchAhaTilbod, this.props.dispatch);
      return fetch('http://10.11.44.101:3000/aha')
      .then((response) => response.json())
      .then((responseJson) => {
        fetchAhaTilbod(responseJson);
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

    return (
        this.props.showtilbod ==="aha" ?(
          <View style={{flex: 1, flexDirection: 'column', paddingTop: 0}}>
              {
                this.props.ahatilbods.map((tilbod, i) => {
                  return(
                    <View style={styles.showContainer} key={i}>
                      <TouchableHighlight onPress={() => { Linking.openURL(tilbod.link) }}>
                      <Image
                        style={{width: 400, height: 250}}
                        source={{uri:tilbod.image}}>
                        <View style={{backgroundColor:'rgba(236, 239, 241, 0.8);' ,height:80, top: 120, marginTop: 50}}>
                            <Text style={styles.titleStyle}>
                              {tilbod.title}
                            </Text>

                        </View>
                        <View style={styles.priceStyle}>
                          <Text style={styles.priceFont}>
                            {tilbod.price}
                          </Text>
                        </View>
                      </Image>
                      </TouchableHighlight>
                    </View>
                  );
                })
            }
          </View>
          )
          :null
    );
  }
}


const styles = StyleSheet.create({
  showContainer: {
    flex: 1,
    flexDirection:"column",
    marginBottom:50,
    marginTop:10,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,

  },

  titleStyle: {
    fontWeight: 'bold',
    textAlign:'right',
    fontSize: 14,
    paddingTop:10,
    paddingLeft:22,
    paddingRight:40,
    color:'#000'
  },

priceStyle: {
  backgroundColor:'#cc181e',
  width: 120,
  height: 50,
  marginTop:-129.9,
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
    ahatilbods: state.ahatilbods,
    showtilbod: state.showtilbod,
  }
}

export default connect(mapStateToProps)(AhaTilbod);
