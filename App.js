import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert, Modal } from 'react-native';
import GuessCard from './components/cards/GuessCard';
import WinCard from './components/cards/WinCard';
import EndCard from './components/cards/EndCard';
import WrongCard from './components/cards/WrongCard';
import { Color } from './styles/colors';
import { useState } from 'react';

export default function App() {
  const [enteredValue, setEnteredValue] = useState('')
  const [winFlag, setWinFlag] = useState(false)
  const [winModalVisible, setWinModalVisible] = useState(false)
  const [wrongModalVisible, setWrongModalVisible] = useState(false)
  const [isLower, setIsLower] = useState()
  const [isGameOver, setIsGameOver] = useState(false)

  // create a random integer in [1020, 1029]
  const getRandomNumber = () => Math.floor(Math.random() * 10) + 1020
  const [target, setTarget] = useState(getRandomNumber())

  // handle confirm
  const onConfirm = (newValue) => {
    if (!validateValue(newValue)) {
      createAlert()
      return
    }

    setEnteredValue(newValue)
    const numValue = parseInt(newValue)
    if (numValue === target) {
      // win
      setWinFlag(true)
      setWinModalVisible(true)
    } else if (numValue < target) {
      // input is lower
      setIsLower(true)
      setWrongModalVisible(true)
    } else {
      // input is higher
      setIsLower(false)
      setWrongModalVisible(true)
    }
  }

  // check the input to be a number between 1020 and 1029
  const validateValue = (newValue) => {
    if (isNaN(newValue)) return false
    const numValue = parseInt(newValue)
    if (numValue < 1020 || numValue > 1029)
      return false
    return true
  }

  // alert for invalid input
  // reset input after press 'Okay' button
  const createAlert = () => {
    Alert.alert(
      'Invalid number!',
      'Number has to be a number between 1020 and 1029.',
      [
        {
          text: 'Okay',
          onPress: () => {setEnteredValue('')},
          style: 'destructive'
        }
      ]
    )
  }

  const onCloseWinModal = () => {
    setWinModalVisible(false)
    setIsGameOver(true)
  }

  const onRestart = () => {
    setWinFlag(false)
    setIsGameOver(false)
    setEnteredValue('')
    // create a new random target
    setTarget(getRandomNumber())
  }

  const onGuessAgain = () => {
    setEnteredValue('')
    setWrongModalVisible(false)
  }

  const onCloseWrongModal = () => {
    setWrongModalVisible(false)
    setIsGameOver(true)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{isGameOver ? 'Game is over' : 'Guess My Number'}</Text>
      <StatusBar style="auto" />
      {!isGameOver &&
        <GuessCard
          enteredValue={enteredValue}
          setEnteredValue={setEnteredValue}
          onConfirm={onConfirm}
        />
      }
      {isGameOver &&
        <EndCard isWin={winFlag} target={target} onRestart={onRestart}/>
      }
      <Modal visible={winModalVisible}>
        <WinCard onCloseWinModal={onCloseWinModal} />
      </Modal>
      <Modal visible={wrongModalVisible}>
        <WrongCard
          enteredValue={enteredValue}
          onGuessAgain={onGuessAgain}
          isLower={isLower}
          onCloseWrongModal={onCloseWrongModal}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.background,
    alignItems: 'center',
  },
  title: {
    marginTop: 50,
    padding: 10,
    borderWidth: 2,
    color: Color.title,
    borderColor: Color.title,
    fontSize: 20,
    marginBottom: 50,
  }
});
