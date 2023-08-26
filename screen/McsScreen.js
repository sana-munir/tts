import React from 'react';
import { View, Text, StyleSheet, ScrollView, ImageBackground,Image, TouchableOpacity } from 'react-native';
import { Card, Button, Icon } from 'react-native-elements';
import {LinearGradient} from 'expo-linear-gradient';
const McsScreen = ({ navigation, route }) => {
  const onPress = () => navigation.navigate('SMS2', { name: 'Semester 2' });
  const semesters = [
    {
      id: '1',
      name: 'Semester 2',
      title: 'Dr. John Doe',
    },
    {
      id: '2',
      name: 'Semester 4',
      title: 'Dr. Minhaj Ahmed',
    },
  ];

  return (
    <ImageBackground
      source={require('../assets/teal2.jpg')}
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
    color: '#ffffff',
    marginTop: 40,
    marginBottom: 20,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  cardContainer: {
    borderRadius: 10,
    margin: 10,
    padding: 16,
    backgroundColor: 'lightseagreen',
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

export default McsScreen;