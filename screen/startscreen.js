import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';
import Typewriter from 'react-native-typewriter';

const BACKGROUND = 'white';
const WHITE = 'black';
const PINK = '#c2185b';
export default function StartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.animationContainer}>
        <LottieView
          source={require('../assets/welcome.json')}
          autoPlay
          loop
        />
      </View>
      <View>
      <Typewriter
        style={styles.typeWriterText}
        cursorStyle={styles.typeWriterCursorText}
        onTypingEnd={() => navigation.navigate('Selection')}
        typing={1}
      >
        Bahauddin Zakariya University{'\n'}Department of Computer Science
      </Typewriter>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BACKGROUND,
    alignItems: 'center',
    justifyContent: 'center',
  },
  animationContainer: {
    width: 500, 
    height: 400, 
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  typeWriterText: {
    color: WHITE,
    fontSize: 24,
    textAlign:'center',
  },
  typeWriterCursorText: {
    color: PINK,
    fontSize: 24,
  },
});


/*import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StartScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    // Set a timeout to navigate to another screen after 5 seconds (5000 milliseconds)
    const timeoutId = setTimeout(() => {
      // Replace 'ScreenName' with the name of the screen you want to navigate to
      navigation.replace('Login');
    }, 5000);

    // Clean up the timeout when the component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  }, []); //The empty array [] as the second argument makes sure the effect runs only once, similar to componentDidMount

  return (
    <View>
      <Text>Start Screen</Text>
    </View>
  );
};
// Set headerShown to false to hide the header
StartScreen.options = ({ navigation }) => ({
  headerShown: false
});

export default StartScreen;*/
