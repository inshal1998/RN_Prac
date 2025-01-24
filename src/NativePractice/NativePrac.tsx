import {StyleSheet, Text, View, NativeModules, Button} from 'react-native';
import React, {useEffect, useState} from 'react';

const NativePrac = () => {
  const {BatteryLevel , NetworkInfo} = NativeModules;

  const [displayedLevel, setDisplayedLevel] = useState('');

  const getChargingPercentage = async () => {
    try {
      const level = await BatteryLevel.getBatteryLevel();
      setDisplayedLevel((Math.floor(level)).toString());
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const interval: any = setInterval(() => {
      getChargingPercentage();
    }, 100);
    return () => {
      clearInterval(interval);
    };
  }, [displayedLevel]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>
        Battery Level{' '}
        {displayedLevel !== "" ? `${displayedLevel}%` : 'Loading....'}
      </Text>
    </View>
  );
};

export default NativePrac;

const styles = StyleSheet.create({});
