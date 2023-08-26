import React, { useMemo, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Alert,
  Modal, 
  Text,
  TextInput,
  TouchableOpacity
} from 'react-native';
import TimeTableView, { genTimeBlock } from 'react-native-timetable';
const events_data = [
  {
    title: "English",
    startTime: genTimeBlock("MON", 8 , 30),
    endTime: genTimeBlock("MON", 10),
    location: "CRDC Lab",
    extra_descriptions: ["Fatima", "Fahad"],
  },
  {
    title: "Compiler",
    startTime: genTimeBlock("MON", 10),
    endTime: genTimeBlock("MON", 11,30),
    location: "CRDC Lab",
    extra_descriptions: ["Qaiser", "Rasool"],
  },
  {
    title: "React",
    startTime: genTimeBlock("MON", 11,30),
    endTime: genTimeBlock("MON", 13),
    location: "CRDC Lab",
    extra_descriptions: ["Khawaja", "Tehsin"],
  },
  {
    title: "English",
    startTime: genTimeBlock("TUE", 8 , 30),
    endTime: genTimeBlock("TUE", 10),
    location: "CRDC Lab",
    extra_descriptions: ["Fatima", "Fahad"],
  },
  {
    title: "Compiler",
    startTime: genTimeBlock("TUE", 10),
    endTime: genTimeBlock("TUE", 11,30),
    location: "CRDC Lab",
    extra_descriptions: ["Qaiser", "Rasool"],
  },
  {
    title: "React",
    startTime: genTimeBlock("TUE", 11,30),
    endTime: genTimeBlock("TUE", 13),
    location: "CRDC Lab",
    extra_descriptions: ["Khawaja", "Tehsin"],
  },
  {
    title: "Maths",
    startTime: genTimeBlock("WED", 8 , 30),
    endTime: genTimeBlock("WED", 10),
    location: "Sun Lab",
    extra_descriptions: ["Sajida", "Azeem"],
  },
  {
    title: "AI",
    startTime: genTimeBlock("WED", 10),
    endTime: genTimeBlock("WED", 11,30),
    location: "CRDC Lab",
    extra_descriptions: ["Asif", "Raza"],
  },
  {
    title: "AI",
    startTime: genTimeBlock("WED", 11,30),
    endTime: genTimeBlock("WED", 13),
    location: "CRDC Lab",
    extra_descriptions: ["Asif", "Raza"],
  },
  {
    title: "Nazra",
    startTime: genTimeBlock("WED", 13),
    endTime: genTimeBlock("WED", 14, 30),
    location: "Telecom Room 2",
    extra_descriptions: ["Muhammad","Tayyab"],
  },
  {
    title: "Maths",
    startTime: genTimeBlock("THU", 8 , 30),
    endTime: genTimeBlock("THU", 10),
    location: "Sun Lab",
    extra_descriptions: ["Sajida", "Azeem"],
  },
  {
    title: "AI",
    startTime: genTimeBlock("THU", 10),
    endTime: genTimeBlock("THU", 11,30),
    location: "CRDC Lab",
    extra_descriptions: ["Asif", "Raza"],
  },
  {
    title: "AI",
    startTime: genTimeBlock("THU", 11,30),
    endTime: genTimeBlock("THU", 13),
    location: "CRDC Lab",
    extra_descriptions: ["Asif", "Raza"],
  },
  {
    title: "Extra Class",
    startTime: genTimeBlock("FRI", 8,30),
    endTime: genTimeBlock("FRI", 10),
    location: "CRDC Lab",
    extra_descriptions: ["Anyone"],
  },
];

const SMS6Screen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [extraDescriptions, setExtraDescriptions] = useState([]);

  const handleSaveChanges = () => {
    
    // Find the index of the selected event
    const index = events_data.findIndex(
      (event) => event.title === selectedEvent.title && event.startTime === selectedEvent.startTime
    );

    // Update the event data with the new title and location
    const updatedEvent = {
      ...selectedEvent,
      title,
      location,
      extraDescriptions
    };

    // Replace the old event with the updated event
    events_data.splice(index, 1, updatedEvent);

    // Hide the modal
    setIsModalVisible(false);
  };



    numOfDays = 5;
    const pivotDate = useMemo(() => genTimeBlock('mon'), []);
    scrollViewRef = (ref) => {
    timetableRef = ref;
  };

  const onEventPress = (evt) => {
    setSelectedEvent(evt);
    setTitle(evt.title);
    setLocation(evt.location);
    setExtraDescriptions(evt.extra_descriptions || []);
    setIsModalVisible(true);
  };
  /*onEventPress = (evt) => {
    Alert.alert("onEventPress", JSON.stringify(evt));
  };*/

    return (
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.container}>
            <TimeTableView
              scrollViewRef={scrollViewRef}
              events={events_data}
              //pivotTime={8}
              pivotEndTime={20}
              pivotDate={pivotDate}
              nDays={numOfDays}
              onEventPress={onEventPress}
              headerStyle={styles.headerStyle}
              formatDateHeader="dddd"
              locale="en"
            />
          </View>
          <Modal visible={isModalVisible} animationType="slide" onRequestClose={() => setIsModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit information:</Text>
            <TextInput
              value={title}
              onChangeText={(text) => setTitle(text)}
              placeholder="Subject"
              style={styles.modalInput}
            />
            <TextInput
              value={location}
              onChangeText={(text) => setLocation(text)}
                           placeholder="Location"
              style={styles.modalInput}
            />
            <TextInput
            value={extraDescriptions.join(', ')}
            onChangeText={text => setExtraDescriptions(text.split(',').map(str => str.trim()))}
            placeholder="Extra Descriptions (comma-separated)"
            style={styles.modalInput}
            />


            <TouchableOpacity onPress={handleSaveChanges} style={styles.modalButton}>
              <Text style={styles.modalButtonText}>Save Changes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#81E1B8'
  },
  container: {
    flex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: '80%',
    padding: 20,
  },
  modalTitle: {
    marginBottom: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    
  },
  modalInput: {
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  modalButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  modalButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
export default SMS6Screen;
