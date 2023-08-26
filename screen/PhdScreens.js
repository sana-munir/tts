import { StatusBar } from 'expo-status-bar';
import React,{useState} from "react";
import { StyleSheet, View ,Text,TextInput,Button} from 'react-native';

const PhdScreen = () => {
  const [name,setText]=useState("");
  return (
    <View style={styles.container}>
      <View>
        <Text>PHD </Text>
        <Text>On going Semesters are </Text>
        <Text>Semesters 2</Text>
        <Text>Semesters 4</Text>
        </View>
        <View>
          <Text>Enter Semesters </Text>
          <TextInput 
            placeholder="semesters"
            style={{borderWidth:1,}}
            onChangeText={newtext=>setText(newtext)}
          />
          <Text>{name}</Text>
          </View>
          <View  style={styles.buttonstyle} >
          <Button
            title='Add'/>
            <Text> </Text>
          <Button
            title='Delete'/>
          </View>
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
  buttonstyle:
  {
    flexDirection:"row",
    justifyContent:"space-between",
  },
});
export default PhdScreen;