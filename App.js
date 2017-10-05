import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Provider } from 'react-redux';

import * as actionCreators from './actions/tilbod';
import tilbod from './reducers/tilbod'
import HomeScreenContainer from './containers/HomeScreenContainer'

import {createStore} from 'redux'
const store = createStore(tilbod);

export default () => (
  <Provider store={store}>
    <HomeScreenContainer />
  </Provider>
);

const styles = StyleSheet.create({

  container: {
    flex: 1,
    // flexDirection:"row",
    backgroundColor: '#ECEFF1',
  },
  headerStyle: {
    flex: 1,
    paddingTop:10,
    fontWeight:'bold',
    fontSize: 18,
    // flexDirection:"row",
    // backgroundColor: '#E53935',
    height: 50,
  },
});
