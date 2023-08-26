import React,{useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { View, StyleSheet, Text, Button } from "react-native";


const Contact = ({ navigation}) => {
    const [count, setCount] = useState(0);
    return( 
    <View style={styles.container}>
      <Text>This is Contact</Text>
        <Text style={styles.text3}>You pressed the button {count} times!</Text>
        <Button style={styles.text2}
          onPress={() => {
            setCount(count+1);
          }}
          title={'Press Me'}
        />
        <Text/>
      <Button style={styles.text1}
               onPress={() => {setCount(0)}} title="Reset" />
        <StatusBar style="auto" />
      </View>
    );
  };
//This is {route.params.name}'s Contact
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ff7f50',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: "center",
    },
    text1:{
      fontWeight:'bold',
      fontColor:'white',
      color:'red',
    },
    text2:{
      fontWeight:'bold',
      fontColor:'white',
    },
    text3:{
      fontWeight:'bold',
      color:'black',
    },
  });

export default Contact;