import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {fetchHook} from '../hooks/fetchHook';

const UserList = () => {
  const {data, error, isLoading} = fetchHook(
    'https://reqres.in/api/users?per_page=40',
  );

  if (isLoading) return <ActivityIndicator />;
  if (error) return <Text>SomeThing went Wrong</Text>;
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        ItemSeparatorComponent={() => (
          <View
            style={{
              
              marginVertical: 10,
            }}
          />
        )}
        renderItem={({item, index}) => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image src={item.avatar} style={styles.avtar} />
            <Text style={styles.labelname}>{item.first_name}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  avtar: {
    height: 80,
    width: 80,
    borderRadius: 100,
    resizeMode: 'cover',
  },
  labelname: {
    marginLeft: 20,
    fontSize: 17,
    alignSelf: 'flex-start',
    marginTop: 10,
  },
});
