import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const CoursesScreen = ({ navigation, route }) => {
  return (
    <LinearGradient
      colors={['white', 'lightblue']}//'#4b6cb7', '#182848'
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={{flex:1}}>
      {/* Set status bar color */}
      <StatusBar barStyle="light-content" />
    <View style={styles.container}>
      <Text style={styles.heading}>See Details</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("BSCS")}>
      <LinearGradient
      colors={['white', 'purple']}//'#4b6cb7', '#182848'
      start={{ x: 2, y: 2 }}
      end={{ x: 0, y: 0 }}
      style={styles.gradient}>
        <Text style={styles.buttonText}>BSCS</Text>
        </LinearGradient>
      </TouchableOpacity>
      
      <Text/>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("MCS")}>
      <LinearGradient
      colors={['white', 'purple']}//'#4b6cb7', '#182848'
      start={{ x: 2, y: 2 }}
      end={{ x: 0, y: 0 }}
      style={styles.gradient}>
        <Text style={styles.buttonText}>MS/MCS</Text>
        </LinearGradient>
      </TouchableOpacity>
      <Text/>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("PHD")}>
      <LinearGradient
      colors={['white', 'purple']}//'#4b6cb7', '#182848'
      start={{ x: 2, y: 2 }}
      end={{ x: 0, y: 0 }}
      style={styles.gradient}>
        <Text style={styles.buttonText}>PHD</Text>
        </LinearGradient>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop:150,
  },
  button: {
    width: '70%',
    height:70,
    opacity: 1,
    marginLeft:50
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    opacity: 1,
    animationDuration: '1s',
    animationName: 'blink',
    animationIterationCount: 'infinite',
  },
});

export default CoursesScreen;
