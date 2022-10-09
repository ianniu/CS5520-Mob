import { StyleSheet, View, Text, TextInput, Button } from 'react-native'
import React from 'react'
import { Color } from '../../styles/colors'

export default GuessCard = (props) => {
  const { enteredValue, setEnteredValue, onConfirm } = props
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>Enter a Number</Text>
      <TextInput
        style={styles.textInput}
        maxLength={4}
        keyboardType={'number-pad'}
        onChangeText={setEnteredValue}
        value={enteredValue}
      />
      <View style={styles.buttonsWrapper}>
        <View style={styles.reset}>
          <Button
            title='Reset'
            onPress={() => setEnteredValue('')}
          />
        </View>
        <View style={styles.confirm}>
          <Button
            title='Confirm'
            color={Color.secTitle}
            onPress={() => onConfirm(enteredValue)}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: Color.cardBackground,
    minWidth: 300,
    alignItems: 'center',
    borderRadius: 8,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    shadowOpacity: 0.5
  },
  title: {
    fontSize: 24,
    color: Color.secTitle,
    marginBottom: 32,
    marginTop: 12
  },
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: Color.secTitle,
    minWidth: 55,
    alignItems: 'center',
    color: Color.secTitle,
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 22
  },
  reset: {
    margin: 10,
    width: '30%'
  },
  confirm: {
    margin: 10,
    width: '30%'
  },
  buttonsWrapper: {
    flexDirection: 'row'
  }
})