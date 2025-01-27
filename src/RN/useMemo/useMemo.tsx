import React, {useState, memo, useMemo, useCallback} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

function MemoExample() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(100);

  const updateCount = () => {
    setCount(prev => prev + 1);
  };

  const updateCount2 = () => {
    setCount2(prev => prev - 1);
  };

  const someOperation = useMemo(() => {
    console.log('This is called');
    return count * 20;
  }, [count]);

  return (
    <View style={styles.app}>
      <Text>
        {count} / {someOperation}
      </Text>
      <TouchableOpacity onPress={updateCount}>
        <Text>Update Count</Text>
      </TouchableOpacity>
      <Text>{count2}</Text>
      <TouchableOpacity onPress={updateCount2}>
        <Text>Minus Count</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: 'brown',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 33,
  },
});

export default MemoExample;
