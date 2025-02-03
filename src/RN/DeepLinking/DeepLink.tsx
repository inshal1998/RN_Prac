// For DeepLink we need to add some changes in AndroidManifest File and linking obj as prefix which would be passed to NavContainer

import React, { useEffect } from 'react'
import { Linking, StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

 const linking = {
  prefixes: ['myapp://open'],
  config: {
    screens: {
      Home: 'home',
      Profile: 'profile/:id',  // Example deep link with a parameter
    },
  },
};

 function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile Screen</Text>
    </View>
  );
}
const DeeplLink = () => {
  const handleDeepLink = (event: { url: string }) => {
    console.log('Deep Link Opened:', event.url);
    // You can navigate or perform actions based on the URL
  };
  
  useEffect(() => {
    // Subscribe to deep link events
    const subscription = Linking.addEventListener('url', handleDeepLink);
  
    // Check if the app was opened from a deep link (cold start)
    Linking.getInitialURL().then((url) => {
      if (url) handleDeepLink({ url });
    });
  
    // Clean up the event listener when component unmounts
    return () => {
      subscription.remove();
    };
  }, []);
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
   </NavigationContainer>
  )
}

export default DeeplLink