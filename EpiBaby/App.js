import React from 'react';
import { StyleSheet, View} from 'react-native';
import Home from "./src/Home/Home";
import {Tabs} from "./src/router";

export default class App extends React.Component {
  render() {
    return <Tabs/> ;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   },
});
