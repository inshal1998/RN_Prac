import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { memo, useCallback, useState } from 'react';

const initialUserList = ['Alice', 'Rose', 'Marry', 'John', 'Carry', 'Alex'];

const CallBack = () => {
  const [users, setUsers] = useState(initialUserList);

  const shuffleArray = useCallback(() => {
    const shuffledArray = [...users];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    setUsers(shuffledArray); 
  }, [users]);

  const updateList = useCallback(
    (value: string) => {
      if (value === '') {
        setUsers(initialUserList); 
      } else {
        const filteredUsers = initialUserList.filter((data) =>
          data.toLowerCase().includes(value.toLowerCase()),
        );
        setUsers(filteredUsers); 
      }
    },
    [],
  );

  return (
    <View>
      <Search onChangeText={updateList} />
      {users.map((value) => (
        <Text key={value}>{value}</Text>
      ))}
      <TouchableOpacity
        style={styles.button}
        onPress={shuffleArray}>
        <Text style={styles.buttonText}>Shuffle</Text>
      </TouchableOpacity>
    </View>
  );
};

interface onChangeProps {
  onChangeText: (text: string) => void;
}

const Search = memo(function SearchUser({ onChangeText }: onChangeProps) {
  console.log('Search Rendered');
  return (
    <TextInput
      style={styles.input}
      placeholder="Enter user"
      onChangeText={onChangeText}
    />
  );
});

export default CallBack;

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'blue',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    padding: 5,
    marginBottom: 10,
    color: '#000',
  },
});
