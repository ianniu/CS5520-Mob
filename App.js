import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button, Text, SafeAreaView } from 'react-native';
import Header from './components/Header';
import Input from './components/Input';
import {useState} from 'react'

export default function App() {
  const name = 'UNmyWifi'
  const handleTextInput = (newText) => {
    console.log(newText)
  }
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Header appName={name}/>
        <Button title='Add a goal' onPress={() => setModalVisible(true)}/>
      </View>
      <View style={styles.mainContainer}>
        <View style={styles.mainTextContainer}>
          <Text style={styles.mainText}>You typed...</Text>
        </View>
      </View>
      <Input
        handleTextInput={handleTextInput}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', 
    justifyContent: 'center',
  },
  topContainer: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContainer: {
    flex: 4,
    backgroundColor: '#CEE3EF',
    alignItems: 'center'
  },
  mainTextContainer: {
    borderWidth: 1,
    backgroundColor: '#39AFF1',
    padding: 5,
    borderRadius: 10,
  },
  mainText: {
    color: '#fff'
  }
});
