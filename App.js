import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { TouchableOpacity, StyleSheet, Text, Image, SafeAreaView, Button, Alert } from 'react-native';

export default function App() {
  const handlePress = () => console.log('text pressed');
  return (
    <SafeAreaView style={styles.container}>
      <Text numberOfLines={1} onPress={handlePress}>Open up App.js to start working on your app!!!!!!!!!!! jbfze zejfbze kjzbef kjbezfo jbzeofdb kzbefoz</Text>
      <StatusBar style="auto" />
      <Image source={require("./assets/favicon.png")} />
      <Button title="Click me" color="orange"
        onPress={() => Alert.alert("Title", "message", [
          { text: "YES", onPress: () => console.log('yess') },
          { text: "NO", onPress: () => console.log('noo') }
        ])} />
      <TouchableOpacity onPress={() => console.log('image clicked')}>
        <Image blurRadius={5} source={{
          height: 200,
          width: 300,
          uri: "https://picsum.photos/200/300"
        }} />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fee',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
