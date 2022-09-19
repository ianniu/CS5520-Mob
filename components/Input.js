import { View, TextInput, Button } from 'react-native'
import React, {useState} from 'react'

export default function Input(props) {
  const { handleTextInput } = props
  const [text, setText] = useState('')
  return (
    <View>
      <TextInput
        value={text}
        placeholder='type something'
        onChangeText={setText}
      />
      <Button title='Confirm' onPress={() => handleTextInput(text)}/>
    </View>
  )
}