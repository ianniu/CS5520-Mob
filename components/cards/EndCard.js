import { View, Text, StyleSheet, Image, Button } from 'react-native'
import React from 'react'
import { Color } from '../../styles/colors'


export default EndCard = (props) => {
  const { isWin, target, onRestart } = props
  const imageUri = `http://picsum.photos/id/${target}/100/100.jpg`
  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>Here's your picture</Text>
      <Image source={isWin ? {uri: imageUri} : require('../../assets/sadface.jpeg')} style={styles.image}/>
      <View style={styles.button}>
        <Button title='Start Again' color={Color.secTitle} onPress={onRestart}/>
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
    marginBottom: 12,
    marginTop: 12
  },
  button: {
    margin: 10,
    width: '30%'
  },
  image: {
    width: 150,
    height: 150
  }
})
