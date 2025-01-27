import React, { useState, memo, useCallback } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

function useCallBack() {
  const [count, setCount] = useState(0);
  const [childCount, setchildCount] = useState(0);

  const childfunc = useCallback(() => {
    setchildCount((prev) => prev + 1);
  }, [childCount]);

  return (
    <View style={styles.app}>
      <Text>{count}</Text>
      <TouchableOpacity onPress={() => setCount((prev) => prev + 1)}>
        <Text>Update Count</Text>
      </TouchableOpacity>
      <Child childCount={childCount} setchildCount={childfunc} />
    </View>
  );
}

const Child = memo(function Child({ childCount, setchildCount }:{childCount:number, setchildCount:()=>void}) {
  console.log("Child Rendered");
  return (
    <View>
      <Text>{childCount}</Text>
      <TouchableOpacity onPress={setchildCount}>
        <Text>Update Child Count</Text>
      </TouchableOpacity>
    </View>
  );
});

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "brown",
  },
  text: {
    textAlign: "center",
    fontSize: 33,
  },
});

export default useCallBack;
