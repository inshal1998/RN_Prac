import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';

const UserList = ({data, error, isLoading , }) => {
  if (error) return <Text>Something Went Wrong</Text>;
  if (isLoading) return <ActivityIndicator />;
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

export default UserList;
