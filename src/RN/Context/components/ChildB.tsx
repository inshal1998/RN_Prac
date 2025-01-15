import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ChildC from './ChildC'

const ChildB = () => {
  return (
    <View>
        <ChildC/>
    </View>
  )
}

export default ChildB

const styles = StyleSheet.create({})