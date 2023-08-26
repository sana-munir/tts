import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Import the icons from @expo/vector-icons

const DayScreen = () => {
  // Initial timetable data
  const [timetable, setTimetable] = useState([
    { id: 1, subject: 'Math', time: '9:00 AM - 10:00 AM', teacher: 'John Doe' },
    { id: 2, subject: 'Science', time: '10:30 AM - 11:30 AM', teacher: 'Jane Smith' },
    { id: 3, subject: 'History', time: '1:00 PM - 2:00 PM', teacher: 'Michael Johnson' },
    { id: 4, subject: 'English', time: '1:00 PM - 2:00 PM', teacher: 'Stewart Gates' },
    { id: 5, subject: 'History', time: '1:00 PM - 2:00 PM', teacher: 'Michael Johnson' },
    // Add more timetable entries as needed
  ]);

  // Render a single timetable item
  const renderTimetableItem = ({ item }) => (
    <View style={styles.timetableItem}>
      <Text style={styles.subject}>{item.subject}</Text>
      <Text style={styles.time}>{item.time}</Text>
      <Text style={styles.teacher}>{item.teacher}</Text>
      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => updateClass(item.id)}>
          <FontAwesome name="pencil" size={24} color="blue" style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => deleteClass(item.id)}>
          <FontAwesome name="trash" size={24} color="red" style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );

  // Handle class update
  const updateClass = (id) => {
    // Implement your logic to update the class here
    console.log('Update class with ID:', id);
  };

  // Handle class deletion
  const deleteClass = (id) => {
    // Implement your logic to delete the class here
    console.log('Delete class with ID:', id);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={timetable}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderTimetableItem}
      />
      <TouchableOpacity onPress={() => console.log('Add new class')}>
        <FontAwesome name="plus-circle" size={48} color="green" style={styles.addButton} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:'silver',
  },
  timetableItem: {
    marginBottom: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
  },
  subject: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  time: {
    fontSize: 16,
    marginBottom: 4,
  },
  teacher: {
  fontSize: 16,
  marginBottom: 4,
  },
  iconContainer: {
  flexDirection: 'row',
  justifyContent: 'flex-end',
  marginTop: 8,
  },
  icon: {
  marginLeft: 8,
  },
  addButton: {
    position: 'absolute',
    bottom: 14,
    right: 140,
    justifyContent: 'center',
    alignItems: 'center',
    width: 42,
    height: 45,
    borderRadius: 28,
},
  });

  export default DayScreen;