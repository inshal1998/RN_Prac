/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { HomeScreen, ThemeHOC, UserContainer, UserList } from './src';


function App(): React.JSX.Element {
  const HomeTheme = ThemeHOC(HomeScreen)
  return (
    <View style={{
      flex:1,
      backgroundColor:"#fff",
      padding:20
    }}>
      {/*       
        Design Patterns
          <HomeTheme />
          <UserList/>
          <UserContainer/> 
      */}
    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
