import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './components/Header';
import { useState } from 'react';

export default function App() {
  const appName = 'My First App';
  const [text, setText] = useState("");
  function changeTextHandler(changedText) {
    console.log("Text changed", changedText);
    setText(changedText);
  }
  return (
    <View style={styles.container}>
      <Text>Welcome to {appName}!</Text>
      <StatusBar style="auto" />
      <Header name={appName} version={2} />
      <TextInput
        placeholder='type here'
        style={styles.input}
        value={text}
        onChange={changeTextHandler} />
      <Text>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input:{
  borderBottomWidth: 2,
  borderBottomColor: 'purple',
  width: '50%',
},
});
