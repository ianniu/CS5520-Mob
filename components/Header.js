import { View, Text } from 'react-native'
import React from 'react'

export default function Header(props) {
  const { appName } = props
  return (
    <View>
      <Text>{appName}</Text>
    </View>
  )
}

