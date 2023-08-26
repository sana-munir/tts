import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import TeacherCard from './TeacherCard';
import TeacherDetailScreen from './TeacherDetailScreen';

const teachers = [
  {
    id: 1,
    name: 'Dr.Khwaja Tehsin Ahmad',
    phone: '+1-202-555-0195',
    image: 'https://img.uxwing.com/wp-content/themes/uxwing/download/peoples-avatars-thoughts/no-profile-picture-icon.png',
    designation: 'PHD',
    timetable: 'Mon: 9am-11am, Tue: 2pm-4pm, Wed: 11am-1pm',
  },
  {
    id: 2,
    name: 'Dr.Minhaj Ahmad Khan',
    phone: '+1-202-555-0128',
    image: 'https://img.uxwing.com/wp-content/themes/uxwing/download/peoples-avatars-thoughts/no-profile-picture-icon.png',
    designation: 'PHD',
    timetable: 'Mon: 10am-12pm, Wed: 9am-11am, Thu: 1pm-3pm',
  },
  {
    id: 3,
    name: 'Dr.Muhammad Sanaullah',
    phone: '+1-202-555-0198',
    image: 'https://img.uxwing.com/wp-content/themes/uxwing/download/peoples-avatars-thoughts/no-profile-picture-icon.png',
    designation: 'PHD',
    timetable: 'Tue: 9am-11am, Wed: 2pm-4pm, Fri: 11am-1pm',
  },
  {
    id: 4,
    name: 'Dr. Humaira Afzal',
    phone: '+1-202-556-0398',
    image: 'https://simg.nicepng.com/png/small/52-521023_download-free-icon-female-vectors-blank-facebook-profile.png',
    designation: 'PHD',
    timetable: 'Tue: 9am-11am, Wed: 2pm-4pm, Fri: 11am-1pm',
  },
  {
    id: 5,
    name: 'Dr. Israr Ahmed',
    phone: '+1-234-785-0198',
    image: 'https://img.uxwing.com/wp-content/themes/uxwing/download/peoples-avatars-thoughts/no-profile-picture-icon.png',
    designation: 'PHD',
    timetable: 'Tue: 9am-11am, Wed: 2pm-4pm, Fri: 11am-1pm',
  },
  {
    id: 6,
    name: 'Dr. Asif Raza',
    phone: '+1-234-785-0198',
    image: 'https://img.uxwing.com/wp-content/themes/uxwing/download/peoples-avatars-thoughts/no-profile-picture-icon.png',
    designation: 'PHD',
    timetable: 'Tue: 9am-11am, Wed: 2pm-4pm, Fri: 11am-1pm',
  },
  {
    id: 7,
    name: 'Dr. Nabeel Qureshi',
    phone: '+1-234-785-0198',
    image: 'https://img.uxwing.com/wp-content/themes/uxwing/download/peoples-avatars-thoughts/no-profile-picture-icon.png',
    designation: 'PHD',
    timetable: 'Tue: 9am-11am, Wed: 2pm-4pm, Fri: 11am-1pm',
  },{
    id: 8,
    name: 'Dr. Qaisar Rasool',
    phone: '+1-234-785-0198',
    image: 'https://img.uxwing.com/wp-content/themes/uxwing/download/peoples-avatars-thoughts/no-profile-picture-icon.png',
    designation: 'PHD',
    timetable: 'Tue: 9am-11am, Wed: 2pm-4pm, Fri: 11am-1pm',
  },
  {
    id: 13,
    name: 'Dr. Sajid Iqbal',
    phone: '+1-234-785-0198',
    image: 'https://img.uxwing.com/wp-content/themes/uxwing/download/peoples-avatars-thoughts/no-profile-picture-icon.png',
    designation: 'PHD',
    timetable: 'Tue: 9am-11am, Wed: 2pm-4pm, Fri: 11am-1pm',
  },
  {
    id: 9,
    name: 'Dr. Ghulam Muhammad',
    phone: '+1-234-785-0198',
    image: 'https://img.uxwing.com/wp-content/themes/uxwing/download/peoples-avatars-thoughts/no-profile-picture-icon.png',
    designation: 'PHD',
    timetable: 'Tue: 9am-11am, Wed: 2pm-4pm, Fri: 11am-1pm',
  },{
    id: 10,
    name: 'Mam Sajida Azeem',
    phone: '+1-234-785-0198',
    image: 'https://simg.nicepng.com/png/small/52-521023_download-free-icon-female-vectors-blank-facebook-profile.png',
    designation: 'PHD',
    timetable: 'Tue: 9am-11am, Wed: 2pm-4pm, Fri: 11am-1pm',
  },{
    id: 11,
    name: 'Mam Fatima Fahad',
    phone: '+1-234-785-0198',
    image: 'https://simg.nicepng.com/png/small/52-521023_download-free-icon-female-vectors-blank-facebook-profile.png',
    designation: 'PHD',
    timetable: 'Tue: 9am-11am, Wed: 2pm-4pm, Fri: 11am-1pm',
  },
  {
    id: 12,
    name: 'Dr. Zulfiquar Chushti',
    phone: '+1-234-785-0198',
    image: 'https://img.uxwing.com/wp-content/themes/uxwing/download/peoples-avatars-thoughts/no-profile-picture-icon.png',
    designation: 'PHD',
    timetable: 'Tue: 9am-11am, Wed: 2pm-4pm, Fri: 11am-1pm',
  },
];

const TeachersScreen = ({ navigation }) => {
  const handleTeacherPress = (teacher) => {
    navigation.navigate('TeacherDetails', { teacher });
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleTeacherPress(item)}>
      <TeacherCard teacher={item} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={teachers}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
});

export default TeachersScreen;
