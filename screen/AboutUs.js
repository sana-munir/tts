import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
const AboutUsScreen = () => {
  return (
    <ScrollView>
<View style={styles.container}>
      <View>
        <Text style={styles.sectionHeading1}>SmartPlanner</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionHeading}>Developers</Text>
        <Text style={styles.sectionText}>
          This app is created by Sana Munir, Misbah Ahmed, and Fiza Ashfaq, who are computer science students at Bahauddin Zakariya University. We have utilized our expertise in React Native and Firebase to develop a feature-rich timetable app that caters to the needs of teachers, students, and administrators.
        </Text>
        <Text style={styles.sectionHeading}>Key Features</Text>
        <Text style={styles.sectionText}>
          - Timetable view for teachers, students, and administrators.
          {'\n'}
          - Message notifications for teachers 15 minutes before their class.
          {'\n'}
          - Leave application feature for teachers.
          {'\n'}
          - News updates and announcements.
          {'\n'}
          - Integration with Firebase for real-time data management.
          {'\n'}
          - Eye-catching and intuitive user interface.
        </Text>
      </View>
      </View>
    </ScrollView>
  );
};
/*<View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="ios-information-circle-outline" size={34} color="#4287f5" />
        <Text style={styles.greeting}>About Us!</Text>
      </View>*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  greeting: {
    fontSize: 32,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#4287f5',
    textTransform: 'uppercase',
  },
  section: {
    marginBottom: 20,
    backgroundColor: 'transparent',
    borderRadius: 8,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  sectionHeading1: {
    color:'plum',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    includeFontPadding:true,
    marginBottom: 16,
    textAlign: 'center',
    justifyContent:"space-evenly",
    borderBottomColor:'white',
    fontFamily: 'serif',
    textShadowOffset: { width: 4, height: 2 }, // Text shadow offset
    textShadowRadius: 3, // Text shadow radius
    textShadowColor: 'black', // Te
  },
  sectionHeading: {
    color:'white',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    includeFontPadding:true,
    marginBottom: 16,
    textAlign: 'center',
    justifyContent:"space-evenly",
    borderBottomColor:'white',
    fontFamily: 'serif',
    textShadowOffset: { width: 4, height: 3 }, // Text shadow offset
    textShadowRadius: 2, // Text shadow radius
    textShadowColor: 'black', // Te
  },
  sectionText: {
    fontSize: 14,
    lineHeight: 24,
    color: 'black',
    fontFamily: 'serif',
    alignItems:'center',
    justifyContent:'center'
  },
});
export default AboutUsScreen;