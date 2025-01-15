import {StyleSheet, View} from 'react-native';
import React from 'react';
const ThemeHOC = WrapperComponent => {
  let themeStyle = 'light';
  let darkStyle = {backgroundColor: '#000', color: '#fff'};
  let lightStyle = {backgroundColor: '#fff', color: '#000'};
  let themeMode = themeStyle === 'dark' ? darkStyle : lightStyle;
  return props => {
    return (
      <View style={[style.container, {backgroundColor: themeMode}]}>
        <WrapperComponent {...props} themeMode={themeMode} />
      </View>
    );
  };
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ThemeHOC;
