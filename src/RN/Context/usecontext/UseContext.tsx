import {StyleSheet, Text, View} from 'react-native';
import React, { useContext} from 'react';
import { ThemeContext } from '../Context';


const UseContext = () => {
  const theme = useContext(ThemeContext);
  return (
    <View>
       <Text>Current Selected Theme is {theme} in UseContext</Text>
    </View>
  );
};

export default UseContext;

const styles = StyleSheet.create({});
