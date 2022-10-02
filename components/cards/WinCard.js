import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'
import { Color } from '../../styles/colors';


export default WinCard = (props) => {
  const { onCloseWinModal } = props
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <Text style={styles.title}>Congrats! You Won!</Text>
        <View style={styles.button}>
          <Button title='Thank you!' onPress={() => onCloseWinModal()}/>
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
    minWidth: 250,
    alignItems: 'center',
    borderRadius: 8,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 5,
    shadowOpacity: 0.5
  },
  title: {
    fontSize: 24,
    color: Color.secTitle,
    marginBottom: 6,
    marginTop: 12
  },
  button: {
    margin: 10,
    width: '30%'
  },
})