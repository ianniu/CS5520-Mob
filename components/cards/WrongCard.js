import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { Color } from '../../styles/colors';


export default WinCard = (props) => {
  const { enteredValue, onGuessAgain, isLower, onCloseWrongModal } = props

  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={[styles.title, {marginTop: 12}]}>You have chosen {enteredValue}  </Text>
        <Text style={styles.title}>That's not my number!</Text>
        <Text style={[styles.title, {marginBottom: 12}]}>Guess {isLower ? 'higher' : 'lower'}!</Text>
        <View style={styles.button}>
          <Button title='I am done' onPress={onCloseWrongModal}/>
        </View>
        <View style={styles.button}>
          <Button title='Let Me Guess Again' color={Color.secTitle} onPress={onGuessAgain}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    backgroundColor: Color.cardBackground,
    // minWidth: 250,
    maxWidth: 300,
    alignItems: 'center',
    borderRadius: 8,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    shadowOpacity: 0.5,
    flexWrap: 'wrap'
  },
  title: {
    fontSize: 24,
    color: Color.secTitle,
    // marginBottom: 6,
    // marginTop: 12,
    marginHorizontal: 12
  },
  button: {
    marginBottom: 5,
    width: '50%'
  },
})