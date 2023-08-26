import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground,Image, TouchableOpacity } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import {LinearGradient} from 'expo-linear-gradient';
const Selection = ({ navigation }) => {
  const onPress1 = () => navigation.navigate('Login1');
  const onPress2 = () => navigation.navigate('Login2');
  const onPress3 = () => navigation.navigate('Login3');
  return (
    <ImageBackground
      source={require('../assets/this1.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>Select Your Role</Text>
            <Card containerStyle={styles.cardContainer}>
              <View style={styles.cardContentContainer}>
                <View>
                  <Text style={styles.professorName}>I am an Admin!</Text>
                </View>
                <TouchableOpacity
                  style={styles.viewProfileButton}
                  onPress={onPress1}>
                    <LinearGradient
      colors={['white', 'purple']}//'#4b6cb7', '#182848'
      start={{ x: 2, y: 2 }}
      end={{ x: 0, y: 0 }}
      style={styles.gradient}>
        <Icon name="arrow-right" type="font-awesome" color="#ffffff" />
                  <Text style={styles.viewProfileButtonText}>Login</Text>
                  </LinearGradient>
                  </TouchableOpacity>
              </View>
            </Card>
            <Card containerStyle={styles.cardContainer}>
              <View style={styles.cardContentContainer}>
                <View>
                  <Text style={styles.professorName}>I am a Teacher!</Text>
                </View>
                <TouchableOpacity
                  style={styles.viewProfileButton}
                  onPress={onPress2}>
                    <LinearGradient
      colors={['white', 'purple']}//'#4b6cb7', '#182848'
      start={{ x: 2, y: 2 }}
      end={{ x: 0, y: 0 }}
      style={styles.gradient}>
        <Icon name="arrow-right" type="font-awesome" color="#ffffff" />
                  <Text style={styles.viewProfileButtonText}>Login</Text>
                  </LinearGradient>
                  </TouchableOpacity>
              </View>
            </Card>
            <Card containerStyle={styles.cardContainer}>
              <View style={styles.cardContentContainer}>
                <View>
                  <Text style={styles.professorName}>I am a Student!</Text>
                </View>
                <TouchableOpacity
                  style={styles.viewProfileButton}
                  onPress={onPress3}>
                    <LinearGradient
      colors={['white', 'purple']}//'#4b6cb7', '#182848'
      start={{ x: 2, y: 2 }}
      end={{ x: 0, y: 0 }}
      style={styles.gradient}>
        <Icon name="arrow-right" type="font-awesome" color="#ffffff" />
                  <Text style={styles.viewProfileButtonText}>Login</Text>
                  </LinearGradient>
                  </TouchableOpacity>
              </View>
            </Card>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 40,
    marginBottom: 20,
    fontFamily: 'serif',
    textShadowOffset: { width: 2, height: 2 }, // Text shadow offset
    textShadowRadius: 5, // Text shadow radius
    textShadowColor: 'black',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  cardContainer: {
    borderRadius: 10,
    margin: 10,
    padding: 20,
    backgroundColor: 'lightgray',
  },
  cardContentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  professorImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  professorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  professorTitle: {
    fontSize: 14,
    color: 'white',
  },
  gradient: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewProfileButton: {
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
    width:'50%',
  },
  viewProfileButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Selection;