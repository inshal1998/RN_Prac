import {StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import UserList from '../containers/UserList';

const UserContainer = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [isLoading, setisLoading] = useState(true);
  
  const fetchData = async () => {
    try {
      const response = await (
        await fetch('https://reqres.in/api/users?per_page=40')
      ).json();
      if (response.data) {
        setData(response.data);
        setisLoading(false);
      }
    } catch (error) {
      setError(true);
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
      <UserList data={data} error={error} isLoading={isLoading} />
  );
};

export default UserContainer;

const styles = StyleSheet.create({});
