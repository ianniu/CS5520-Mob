import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native'
import React, {useState} from 'react'

export default function Input(props) {
  const { handleTextInput, modalVisible, setModalVisible } = props
  const [text, setText] = useState('')
  return (
    <Modal visible={modalVisible}>
      <View style={styles.container}>
        <Image source={require('../assets/images/arrow.png')}
        style={styles.image}
        />
        <TextInput
          value={text}
          placeholder='type something'
          onChangeText={setText}
          style={styles.textInput}
        />
        <View style={styles.buttonsWrapper}>
          <View style={styles.button}>
            <Button
              title='Cancel'
              onPress={() => {
                setModalVisible(false)
              }}
            />
          </View>
          <View style={styles.button}>
            <Button
              title='Confirm'
              onPress={() => {
                handleTextInput(text)
                setModalVisible(false)
              }}
              disabled={!text.length}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    marginTop: 10,
    marginBottom: 10,
    borderBottomColor: 'blue',
    borderBottomWidth: 2,
    fontSize: 18,
  },
  button: {
    margin: 5,
    width: '30%'
  },
  image: {
    width: 100,
    height: 100
  },
  buttonsWrapper: {
    flexDirection: 'row'
  },
});