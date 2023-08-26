import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

const TAScreen = () => {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [picture, setPicture] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [timings, setTimings] = useState([]);

  const handleSaveChanges = () => {
    // Add your logic to save changes here
  };

  const handleDeleteTeacher = () => {
    // Add your logic to delete the teacher here
  };

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={styles.title}>Teacher Information</Text>

      <View style={styles.formContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          value={name}
          onChangeText={text => setName(text)}
          style={styles.input}
          placeholder="Enter teacher's name"
        />

        <Text style={styles.label}>Designation:</Text>
        <TextInput
          value={designation}
          onChangeText={text => setDesignation(text)}
          style={styles.input}
          placeholder="Enter teacher's designation"
        />

        <Text style={styles.label}>Phone Number:</Text>
        <TextInput
          value={phoneNumber}
          onChangeText={text => setPhoneNumber(text)}
          style={styles.input}
          placeholder="Enter teacher's phone number"
        />

        <Text style={styles.label}>Picture:</Text>
        {picture && <Image source={picture} style={styles.picture} />}
        <TouchableOpacity
          onPress={() => {}}
          style={styles.uploadButton}
        >
          <Text style={styles.uploadButtonText}>Upload Picture</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Subjects:</Text>
        {/* Render subjects dynamically */}
        {subjects.map((subject, index) => (
          <TextInput
            key={index}
            value={subject}
            onChangeText={text => {
              const updatedSubjects = [...subjects];
              updatedSubjects[index] = text;
              setSubjects(updatedSubjects);
            }}
            style={styles.input}
            placeholder={`Enter subject for semester ${index + 1}`}
          />
        ))}
        <TouchableOpacity
          onPress={() => setSubjects([...subjects, ''])}
          style={styles.addButton}
        >
          <Text style={styles.addButtonLabel}>Add Subject</Text>
        </TouchableOpacity>

        <Text style={styles.label}>Timings:</Text>
        {/* Render timings dynamically */}
        {timings.map((timing, index) => (
          <TextInput
            key={index}
            value={timing}
            onChangeText={text => {
              const updatedTimings = [...timings];
              updatedTimings[index] = text;
              setTimings(updatedTimings);
            }}
            style={styles.input}
            placeholder={`Enter timing for semester ${index + 1}`}
          />
        ))}
        <TouchableOpacity
          onPress={() => setTimings([...timings, ''])}
          style={styles.addButton}
        >
          <Text style={styles.addButtonLabel}>Add Timing</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSaveChanges} style={styles.saveButton}>
          <Text style={styles.saveButtonText}>Save Changes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDeleteTeacher} style={styles.deleteButton}>
  <Text style={styles.deleteButtonText}>Delete Teacher</Text>
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
  picture: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
  uploadButton: {
    backgroundColor: '#CCCCCC',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  uploadButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#81E1B8',
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginBottom: 10,
  },
  addButtonLabel: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  saveButton: {
    backgroundColor: 'blue',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  deleteButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    paddingVertical: 12,
    paddingHorizontal: 16,
    marginBottom: 10,
  },
  deleteButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default TAScreen;

