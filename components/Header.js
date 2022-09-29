import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function Header(props) {
  const { appName } = props
  return (
    <View>
      <Text style={styles.title}>{appName}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    borderWidth: 2,
    borderColor: 'orange',
    padding: 6
  }
});


