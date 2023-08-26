import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity, Image } from 'react-native';

const ProfileScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [picture, setPicture] = useState(null);
  const [designation, setDesignation] = useState('');
  const [qualification, setQualification] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profilePictureContainer}>
          <Image style={styles.profilePicture} />
        </View>
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Dr. Khwaja Tehsin</Text>
          <Text style={styles.userDesignation}>Programming Instructor</Text>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Personal Information</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Email:</Text>
            <Text style={styles.infoValue}>ktehsin@gmail.com</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Gender:</Text>
            <Text style={styles.infoValue}>Male</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Phone:</Text>
            <Text style={styles.infoValue}>+1 123-456-7890</Text>
          </View>
        </View>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Information</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Designation:</Text>
            <Text style={styles.infoValue}>Programming Instructor</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Qualification:</Text>
            <Text style={styles.infoValue}>PHD Scholar</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#2874A6',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 30,
  },
  profilePictureContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#fff',
    overflow: 'hidden',
    marginRight: 20,
  },
  profilePicture: {
    width: '100%',
    height: '100%',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userDesignation: {
    color: '#fff',
    fontSize: 18,
  },
  body: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  infoLabel: {
    color: '#555',
    fontWeight: 'bold',
    marginRight: 10,
    width: 100,
  },
  infoValue: {
    color: '#333',
  },
});

export default ProfileScreen;

/*import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';
import {StatusBar} from 'expo-status-bar';

export default function SettingsPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const handleSave = () => {
    // Save user settings to backend or device storage
  };

  return (
    <LinearGradient
      colors={['white', 'teal']}//'#4b6cb7', '#182848'
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}>
      {/* Set status bar color }
      <StatusBar barStyle="light-content" />
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput style={styles.input} value={email} onChangeText={setEmail} />
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Notifications:</Text>
        <TouchableOpacity
          style={styles.switch}
          onPress={() => setNotificationsEnabled(!notificationsEnabled)}>
          <View style={[styles.switchInner, notificationsEnabled && styles.switchInnerActive]} />
        </TouchableOpacity>
      </View>
      <View style={styles.switchContainer}>
        <Text style={styles.label}>Dark mode:</Text>
        <TouchableOpacity
          style={styles.switch}
          onPress={() => setNotificationsEnabled(!notificationsEnabled)}>
          <View style={[styles.switchInner, notificationsEnabled && styles.switchInnerActive]} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
        <Text style={styles.saveButtonText}>Save</Text>
      </TouchableOpacity>
    </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    flex: 1,
    fontSize: 18,
    marginRight: 10,
  },
  input: {
    flex: 2,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    borderRadius: 5,
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  switch: {
    width: 50,
    height: 25,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#ccc',
    marginLeft: 10,
    backgroundColor: '#fff',
  },
  switchInner: {
    width: 23,
    height: 23,
    borderRadius: 23,
    backgroundColor: '#ccc',
    marginLeft: 1,
    marginTop: 1,
  },
  switchInnerActive: {
    backgroundColor: 'green',
  },
  saveButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  saveButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
*/