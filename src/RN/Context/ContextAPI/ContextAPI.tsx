


import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { ThemeContext } from '../Context';
const ContextAPI = () => {
  return (
    <ThemeContext.Consumer>
      {(value:any) => <Text>Current Selected Theme is {value}</Text>}
    </ThemeContext.Consumer>
  );
};

export default ContextAPI;

const styles = StyleSheet.create({});
