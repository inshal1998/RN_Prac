import {StyleSheet, Text, View} from 'react-native';
import React, {createContext, useContext} from 'react';
import { ThemeContext } from '../Context';

const theme = useContext(ThemeContext);

const UseContext = () => {
  return (
    <View>
       <Text>Current Selected Theme is {theme} in UseContext</Text>
    </View>
  );
};

export default UseContext;

const styles = StyleSheet.create({});
