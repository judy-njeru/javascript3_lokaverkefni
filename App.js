import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Provider } from 'react-redux';

import * as actionCreators from './actions/tilbod';
import configureStore from './store/configureStore';
import AppWithNavigationState from './AppWithNavigationState'


export const store  = configureStore()

export default () => (
  <Provider store={store}>
    <AppWithNavigationState />
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
