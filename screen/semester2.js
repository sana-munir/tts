import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const SMS2Screen = ({ navigation, route }) => {
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

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Day")}>
      <LinearGradient
      colors={['white', 'purple']}//'#4b6cb7', '#182848'
      start={{ x: 2, y: 2 }}
      end={{ x: 0, y: 0 }}
      style={styles.gradient}>
        <Text style={styles.buttonText}>MONDAY</Text>
        </LinearGradient>
      </TouchableOpacity>
      
      <Text/>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("MCS")}>
      <LinearGradient
      colors={['white', 'purple']}//'#4b6cb7', '#182848'
      start={{ x: 2, y: 2 }}
      end={{ x: 0, y: 0 }}
      style={styles.gradient}>
        <Text style={styles.buttonText}>TUESDAY</Text>
        </LinearGradient>
      </TouchableOpacity>
      <Text/>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("PHD")}>
      <LinearGradient
      colors={['white', 'purple']}//'#4b6cb7', '#182848'
      start={{ x: 2, y: 2 }}
      end={{ x: 0, y: 0 }}
      style={styles.gradient}>
        <Text style={styles.buttonText}>WEDNESDAY</Text>
        </LinearGradient>
      </TouchableOpacity>
      <Text/>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("PHD")}>
      <LinearGradient
      colors={['white', 'purple']}//'#4b6cb7', '#182848'
      start={{ x: 2, y: 2 }}
      end={{ x: 0, y: 0 }}
      style={styles.gradient}>
        <Text style={styles.buttonText}>THURSDAY</Text>
        </LinearGradient>
      </TouchableOpacity>
      <Text/>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("PHD")}>
      <LinearGradient
      colors={['white', 'purple']}//'#4b6cb7', '#182848'
      start={{ x: 2, y: 2 }}
      end={{ x: 0, y: 0 }}
      style={styles.gradient}>
        <Text style={styles.buttonText}>FRIDAY</Text>
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
    fontSize: 32,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'serif',
    textShadowOffset: { width: 2, height: 2 }, // Text shadow offset
    textShadowRadius: 5, // Text shadow radius
    textShadowColor: 'white',
    marginTop: 70,
    marginBottom: 20,
    textAlign: 'center',
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

export default SMS2Screen;
