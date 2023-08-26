import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Platform, TextInput,Modal } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Card } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import {LinearGradient} from 'expo-linear-gradient';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import * as SMS from 'expo-sms';
import { Directions } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const TWelcomeScreen = ({navigation, route}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [latestNews, setLatestNews] = useState('');
  const [oldNews, setOldNews] = useState('');
  const [upcomingEvent, setUpcomingEvent] = useState('');
  const [isBlinking, setIsBlinking] = useState(false);

  const sendSMS = async () => {
    const isAvailable = await SMS.isAvailableAsync();
    if (isAvailable) {
      const { result } = await SMS.sendSMSAsync(
        ['0334-6034243'],
        'Leave application from Asif Raza for 2 days dated 20-05-2023 and 21-05-2023!'
      );
      console.log(result);
      setModalVisible(false);
    } else {
      console.log('SMS is not available on this device.');
    }
  };



  useEffect(() => {
    // Simulating data fetch or updates
    // Replace this with your actual data retrieval logic

    // Fetch latest news
    setTimeout(() => {
      setLatestNews('Latest News: Blood Donation Drive Tomorrow!');
    }, 2000);

    // Fetch old news
    setTimeout(() => {
      setOldNews('Yesterday\'s News: Conference Highlights');
    }, 4000);

    // Fetch upcoming event
    setTimeout(() => {
      setUpcomingEvent('Upcoming Event: Tech Expo 2023');
    }, 6000);
  }, []);

  useEffect(() => {
    // Blinking effect for latest news
    const blinkInterval = setInterval(() => {
      setIsBlinking((prevIsBlinking) => !prevIsBlinking);
    }, 500);

    return () => clearInterval(blinkInterval);
  }, []);





  const { id } = route.params;
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const onPress2 = () => navigation.navigate('Schedule',{tid: route.params.tid});
  const profile = () => navigation.navigate('Profile');
  const About = () => navigation.navigate('AboutUs');
  const Leave = () => {
    setModalVisible(true);
  }

  const [noteText, setNoteText] = useState(
    '1. Assign a homework\n2. Check papers\n3. Attend seminar\n4. See Video Conference\n5. Prepare Next Lecture'
  );

  const handleNoteTextChange = text => {
    setNoteText(text);
  };


  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const [notificationTime, setNotificationTime] = useState(null);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  useEffect(() => {
    const today = new Date();
    let scheduledTime = null;

    if (today.getDay() === 1) { // Monday
      scheduledTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8, 15, 0);
    } else if (today.getDay() === 4) { // Thursday
      scheduledTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 11, 15, 0);
    } else if (today.getDay() === 2) { // Wednesday
      scheduledTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 14, 0, 0);
    }

    if (scheduledTime) {
      if (scheduledTime < today) {
        scheduledTime.setDate(scheduledTime.getDate() + 7); // schedule for next week
      }

      const schedulingOptions = {
        content: {
          title: "ALERT! 📬",
          body: "Your class is in 15 minutes",
          data: { data: 'goes here' },
        },
        trigger: {
          type: 'calendar',
          repeats: true,
          date: scheduledTime,
        },
      };

      Notifications.scheduleNotificationAsync(schedulingOptions).then(id => {
        console.log(`Notification scheduled (${id})`);
        setNotificationTime(scheduledTime.toLocaleString());
      });
    }

    return () => {
      Notifications.cancelAllScheduledNotificationsAsync().then(() =>
        console.log('Canceled all scheduled notifications')
      );
    };
  }, []);


  return (
    <View style={styles.container}>
      {/* Main content */}
      <Card style={styles.card}>
      <Text style={styles.title}>Upcoming Lecture</Text>
      <Card.Content>
      <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>
        <Text>Today's date: {new Date().toLocaleDateString()}</Text>
        <Text>Today's day: {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()]} </Text>
        {notificationTime ? (
          <>
            <Text style={styles.title}>{['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date().getDay()]}'s next class at:</Text>
            <Text>{notificationTime}</Text>
            <Text style={styles.location}>Room 101</Text>
          </>
        ) : (
          <Text>No notification scheduled for today</Text>
        )}
      </View>
    </View>
      </Card.Content>
    </Card>

    
                  <Card style={styles.stickyNote}>
      <Text style={styles.title}>Sticky Note</Text>
      <Card.Content>
        <TextInput
          style={styles.noteText}
          multiline={true}
          value={noteText}
          onChangeText={handleNoteTextChange}
        />
      </Card.Content>
    </Card>

    <TouchableOpacity
                  style={styles.button}
                  onPress={onPress2}>
                    <LinearGradient
      colors={['white', 'purple']}//'#4b6cb7', '#182848'
      start={{ x: 2, y: 2 }}
      end={{ x: 0, y: 0 }}
      style={styles.gradient}>
        <Icon name="arrow-right" type="font-awesome" color="#ffffff" />
                  <Text style={styles.buttonLabel}>    View Schedule    </Text>
                  </LinearGradient>
                  </TouchableOpacity>

      {/* Side menu */}
      <View style={[styles.menu, isMenuOpen ? styles.menuOpen : null]}>
        <TouchableOpacity style={styles.closeButton} onPress={toggleMenu}>
          <Feather name="x" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Feather name="home" size={24} color="black" />
          <Text style={styles.menuItemText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Feather name="user" size={24} color="black" />
          <Text style={styles.menuItemText} onPress={profile}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Feather name="settings" size={24} color="black" />
          <Text style={styles.menuItemText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Feather name="send" size={24} color="black" />
          <Text style={styles.menuItemText} onPress={() => setModalVisible(true)}>Leave</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Feather name="smile" size={24} color="black" />
          <Text style={styles.menuItemText} onPress={About}>About-Us</Text>
        </TouchableOpacity>
      </View>

      {/* Button to open the menu */}
      <View style={styles.menuContainer}>
      <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
        <Feather name="menu" size={15} color="black" styles={{alignItems:'left'}} />
  </TouchableOpacity>
  <View style={styles.helloText}>
        <Text style={[styles.newsText, isBlinking && styles.blinkingText]}>{latestNews}</Text></View></View>


      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Modal
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
          animationType="slide"
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, marginBottom: 20 }}>Apply for Leave</Text>
            <Button title="Send SMS" onPress={sendSMS} />
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </Modal>
      </View>
    </View>
  );
};


async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === 'android') {
    await Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert('Must use physical device for Push Notifications');
  }

  return token;
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F7F7F7',
  },
  main:{
    flex: 1,
  },
  menu: {
    width: 200,
    height: '100%',
    backgroundColor: '#fff',
    position: 'absolute',
    top: 0,
    left: -200,
    zIndex: 1,
    padding: 20,
  },
  menuOpen: {
    left: 0,
  },
  menuButton: {
    flexDirection:'column',
    position: 'absolute',
    zIndex: 2,
    padding: 10,
    backgroundColor: 'gray',
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
 menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:10,
    paddingVertical: 14,
  },
  menuItemText: {
    marginLeft: 10,
    fontSize: 18,
    color: '#333',
  },
  helloText: {
    marginLeft: 50,
    fontSize: 16,
  },
card: {
  position:'absolute',
  marginTop:70,
  left: 16,
  right: 16,
  padding: 16,
},
menuContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
},
title: {
  fontSize: 20,
  fontWeight: 'bold',
  color: 'black',
},
gradient: {
  justifyContent: 'center',
  alignItems: 'center',
},
time: {
  fontSize: 16,
},
location: {
  fontSize: 16,
},
stickyNote: {
  position: 'absolute',
  left: 16,
  right: 16,
  padding: 16,
  marginTop:285,
  backgroundColor: '#FFFAF0',
},
noteText: {
  fontSize: 16,
},
noteText: {
  fontSize: 16,
  lineHeight: 24,
},
button: {
  position: 'absolute',
  marginTop: 540,
  color: 'purple',
  borderRadius: 8,
  alignItems:'center',
  justifyContent: 'center',
  left: 20,
  right: 20,
  borderRadius:8,
  paddingHorizontal:16,
  paddingVertical:8
},
buttonLabel: {
  color: 'white',
  fontWeight: 'bold',
},
container1: {
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
  padding: 20,
},
sectionTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 10,
},
newsContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 20,
},
newsText: {
  fontSize: 16,
},
blinkingText: {
  color: 'red',
},
});
export default TWelcomeScreen;