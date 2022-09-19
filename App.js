import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import Input from './components/Input';

export default function App() {
  const name = 'UNmyWifi'
  const handleTextInput = (newText) => {
    console.log(newText)
  }
  return (
    <View style={styles.container}>
      <Header appName={name}/>
      <Input handleTextInput={handleTextInput}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
