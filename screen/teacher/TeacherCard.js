import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const TeacherCard = ({ teacher }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardContentContainer}>
        <Image style={styles.teacherImage} source={{ uri: teacher.image }} />
        <View style={styles.teacherInfoContainer}>
          <Text style={styles.teacherName}>{teacher.name}</Text>
          <Text style={styles.teacherDesignation}>{teacher.designation}</Text>
          <Text style={styles.teacherTimetable}>{teacher.timetable}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    margin: 10,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  cardContentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  teacherImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  teacherInfoContainer: {
    flex: 1,
  },
  teacherName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  teacherDesignation: {
    fontSize: 16,
    color: '#555',
  },
  teacherTimetable: {
    fontSize: 14,
    color: '#777',
  },
});

export default TeacherCard;
