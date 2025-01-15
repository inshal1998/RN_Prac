import {StyleSheet, Text, View} from 'react-native';
import React, {createContext} from 'react';
import ChildA from './components/ChildA';

export const ThemeContext = createContext('light');

const Context = () => {
  return (
    <ThemeContext.Provider value="dark">
      <ChildA />
    </ThemeContext.Provider>
  );
};

export default Context;

const styles = StyleSheet.create({});
