import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground,Image, TouchableOpacity } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import {LinearGradient} from 'expo-linear-gradient';
const BscsScreen = ({ navigation, route }) => {
  const onPress = () => navigation.navigate('SMS2', { name: 'Semester 6' });
  const semesters = [
    {
      id: '1',
      name: 'Semester 2',
      title: 'Dr. Khwaja Tehsin',
    },
    {
      id: '2',
      name: 'Semester 4',
      title: 'Dr. Minhaj Ahmed',
    },
    {
      id: '3',
      name: 'Semester 6',
      title: 'Dr. Israr Ahmed',
    },
    {
      id: '4',
      name: 'Semester 8',
      title: 'Dr. Sajid Iqbal',
    },
  ];

  return (
    <ImageBackground
      source={require('../assets/h6.jpg')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.heading}>ON GOING SEMESTERS</Text>
        <ScrollView>
          {semesters.map((semester) => (
            <Card key={semester.id} containerStyle={styles.cardContainer}>
              <View style={styles.cardContentContainer}>
                <View>
                  <Text style={styles.professorName}>{semester.name}</Text>
                  <Text style={styles.professorTitle}>{semester.title}</Text>
                </View>
                <TouchableOpacity
                  style={styles.viewProfileButton}
                  onPress={onPress}>
                    <LinearGradient
      colors={['white', 'purple']}//'#4b6cb7', '#182848'
      start={{ x: 2, y: 2 }}
      end={{ x: 0, y: 0 }}
      style={styles.gradient}>
        <Icon name="arrow-right" type="font-awesome" color="#ffffff" />
                  <Text style={styles.viewProfileButtonText}>Timetable</Text>
                  </LinearGradient>
                  </TouchableOpacity>
              </View>
            </Card>
          ))}
        </ScrollView>
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
    color: 'black',
    fontFamily: 'serif',
    textShadowOffset: { width: 2, height: 2 }, // Text shadow offset
    textShadowRadius: 5, // Text shadow radius
    textShadowColor: 'white',
    marginTop: 40,
    marginBottom: 20,
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  cardContainer: {
    borderRadius: 10,
    margin: 10,
    padding: 16,
    backgroundColor: 'white',
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
    color: 'black',
  },
  professorTitle: {
    fontSize: 14,
    color: 'black',
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

export default BscsScreen;




/*import { StatusBar } from 'expo-status-bar';
import React,{useState} from "react";
import { StyleSheet, Text,View,TextInput,Button, TouchableOpacity} from 'react-native';


const BscsScreen = ({ navigation }) => {
  const [name,setText]=useState("");
  const onPress = () => navigation.navigate('SMS2', { name: 'Semester 2' });
  return (
    <View style={styles.container}>
      <View>
        <Text>BSCS </Text>
        <Text>On going Semesters are </Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Semester 2</Text>
      </TouchableOpacity>
      <Text/>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Semester 4</Text>
      </TouchableOpacity>
      <Text/>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Semester 6</Text>
      </TouchableOpacity>
      <Text/>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text>Semester 8</Text>
      </TouchableOpacity>
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
  button:{
    alignItems: 'center',
    backgroundColor: 'lightblue',
    padding: 10,
  }
});
export default BscsScreen;*/