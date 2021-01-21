/**
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';

function App() {
  return (
    <View style={styles.screenContainer}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ alignSelf: "stretch", felx: 1, }}>
        <View style={styles.container}>
          <View style={styles.topShadow}>
            <View style={styles.bottomShadow}>
              <View style={[styles.inner , {width: 60, height: 60, borderRadius: 30}]}>
                <Text>1</Text>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1, 
    backgroundColor: "#DEE9FD",
    alignItems: 'center'
  },
  container: {
    marginTop: 32,
    marginHorizontal: 32,
  },
  inner: {
    backgroundColor:"#DEE9F7",
    borderColor: "#E2ECFD",
    borderWidth: 10,
    alignContent: 'center',
    justifyContent: 'center',
  },
  topShadow: {
    shadowOffset: {
      width: -6,
      height: -6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: "#FBFFFF",
  },
  bottomShadow:{
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowColor: "#B7C4DD",
  }

});

export default App;
