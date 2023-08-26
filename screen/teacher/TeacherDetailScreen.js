import React, { useEffect, useState } from 'react';
import {  View, Text, TextInput, TouchableOpacity, StyleSheet, Selection } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {LinearGradient} from 'expo-linear-gradient';
//import { useRoute } from '@react-navigation/native';

const TeacherDetailScreen = ({route}) => {

  const { teacher } = route.params;
  const [name, setName] = useState(teacher.name);
  const [phone, setPhone] = useState(teacher.phone);
  const [designation, setDesignation] = useState(teacher.designation);
  const [timetable, setTimetable] = useState(teacher.timetable);
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);
    const options = ['BS', 'MCS', 'MPhil','PHD'];
  
    const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
    };
  
    const handleOptionPress = (option) => {
      setSelectedValue(option);
      setDropdownVisible(false);
    };
  const handleSaveChanges = () => {
    // Save changes logic
    // ...
  };
  /*useEffect(() => {
    // Fetch teacher information from database using teacherId
    // ...
    // Set teacher state
    setTeacher({ id: teacherId, name: 'John Doe', phone: '123-456-7890', image: 'https://example.com/teacher1.jpg', timetable: [{ day: 'Monday', classes: ['Class A', 'Class B'] }, { day: 'Tuesday', classes: ['Class C', 'Class D'] }] });
  }, [teacherId]);

  if (!teacher) {
    return null;
  }*/

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Teacher Details</Text>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          style={styles.input}
          placeholder="Enter name"
        />

        <Text style={styles.label}>Phone:</Text>
        <TextInput
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
          placeholder="Enter phone number"
        />

        <Text style={styles.label}>Qualification:</Text>
        <TextInput
          value={designation}
          onChangeText={setDesignation}
          style={styles.input}
          placeholder="Enter designation"
        />
        <View style={styles.container1}>
      <TouchableOpacity onPress={toggleDropdown} style={styles.dropdownButton}>
        <Text style={styles.dropdownButtonText}>
          {selectedValue ? selectedValue : 'Select an option'}
        </Text>
      </TouchableOpacity>
      {dropdownVisible && (
        <View style={styles.dropdownOptions}>
          {options.map((option) => (
            <TouchableOpacity
              key={option}
              onPress={() => handleOptionPress(option)}
              style={styles.optionButton}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
    <Text></Text>
    <Text></Text>
    <Text></Text>
    <Text></Text>
    <Text></Text><Text></Text><Text></Text><Text></Text>
        <Text style={styles.label}>Timetable:</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("BSCS")}>
      <LinearGradient
      colors={['white', 'purple']}//'#4b6cb7', '#182848'
      start={{ x: 2, y: 2 }}
      end={{ x: 0, y: 0 }}
      style={styles.gradient}>
        <Text style={styles.buttonText}>See Timetable</Text>
        </LinearGradient>
      </TouchableOpacity>
    

        <TouchableOpacity onPress={handleSaveChanges} style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: '#81E1B8',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginTop: 100,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  container1: {
    position: 'relative',
    alignItems: 'center',
  },
  dropdownButton: {
    width: 200,
    height: 40,
    backgroundColor: '#ccc',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dropdownButtonText: {
    fontSize: 16,
  },
  dropdownOptions: {
    position: 'absolute',
    top: 40,
    width: 200,
    backgroundColor: '#f9f9f9',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  optionButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
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
  optionText: {
    fontSize: 16,
  },
});

export default TeacherDetailScreen;

/*import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const TeacherDetailScreen = ({ name, phone, image, designation, timetable, onEditTimetable }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.phone}>{phone}</Text>
      <Text style={styles.designation}>{designation}</Text>
      <Text style={styles.timetable}>{timetable}</Text>
      <TouchableOpacity onPress={onEditTimetable} style={styles.editButton}>
        <Text style={styles.editButtonText}>Edit Timetable</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  phone: {
    fontSize: 16,
    marginBottom: 8,
  },
  designation: {
    fontSize: 16,
    marginBottom: 16,
  },
  timetable: {
    fontSize: 16,
    marginBottom: 16,
  },
  editButton: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TeacherDetailScreen;*/
