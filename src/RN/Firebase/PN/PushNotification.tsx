// For Implementing PushNotification we simply need to generate FCM token Line no 29 and then
// send that token to BE who will then store the FCM token and can hit a notification if u want 
// to open app onclick just ask BE expert to add screen name aslo and then add navigation in App.tsx

import {
  Alert,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import messaging from '@react-native-firebase/messaging';
import notifee from '@notifee/react-native';
const PushNotification = () => {

  useEffect(() => {
    requestUserPermission();
  }, []);

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      onDisplayNotification(remoteMessage)
    });
    return unsubscribe;
  }, []);

  const onDisplayNotification = async(remoteMessage:any)=> {
    await notifee.requestPermission()

    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: remoteMessage.notification.title,
      body: remoteMessage.notification.body,
      android: {
        channelId,
        smallIcon: 'name-of-a-small-icon',
        pressAction: {
          id: 'default',
        },
      },
    });
  }

  const getToken = async () => {
    try {
      await messaging().registerDeviceForRemoteMessages();
      const token = await messaging().getToken();
    } catch (error) {
      console.error('Error getting FCM token:', error);
    }
  };

  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      getToken();
    } else {
      Alert.alert('Please enable notifications in settings.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Push Notifications</Text>
    </View>
  );
};

export default PushNotification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
