import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, Platform, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Card } from 'react-native-paper';
import { Icon } from 'react-native-elements';
import {LinearGradient} from 'expo-linear-gradient';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const SWelcomeScreen = ({navigation}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const onPress2 = () => navigation.navigate('Timetable');
  const profile = () => navigation.navigate('Profile');

  const [noteText, setNoteText] = useState(
    '1. Do homework\n2. Make assignment\n3. Attend seminar\n4. See Video lecturee\n5. Prepare Test'
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
      scheduledTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 9, 15, 0);
    } else if (today.getDay() === 4) { // Thursday
      scheduledTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 22, 34, 0);
    } else if (today.getDay() === 2) { // Wednesday
      scheduledTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 8, 0, 0);
    }

    if (scheduledTime) {
      if (scheduledTime < today) {
        scheduledTime.setDate(scheduledTime.getDate() + 7); // schedule for next week
      }

      const schedulingOptions = {
        content: {
          title: "You've got mail! 📬",
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
            <Text style={styles.title}>Today's next class at:</Text>
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
      </View>

      {/* Button to open the menu */}
      <TouchableOpacity style={styles.menuButton} onPress={toggleMenu}>
        <Feather name="menu" size={15} color="black" styles={{alignItems:'left'}} />
      </TouchableOpacity>
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
    position: 'absolute',
    zIndex: 2,
    padding: 20,
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
card: {
  position:'absolute',
  marginTop:70,
  left: 16,
  right: 16,
  padding: 16,
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
  marginTop:250,
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
  marginTop: 500,
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
});
export default SWelcomeScreen;