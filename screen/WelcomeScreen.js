//import { StatusBar } from 'expo-status-bar';
import React, {useRef, useEffect, useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button, StatusBar, Animated} from 'react-native';
import {LinearGradient} from 'expo-linear-gradient';

const FadeInView = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim, // Bind opacity to animated value
      }}>
      {props.children}
    </Animated.View>
  );
};


const WelcomeScreen = ({ navigation }) => {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const goToCourses = () => {
    // Navigation logic to navigate to the Courses screen
    // You can use a navigation library, such as React Navigation, for this
    navigation.navigate('Courses',{name:'Course'});
  };

  const goToTeachers = () => {
    // Navigation logic to navigate to the Teachers screen
    // You can use a navigation library, such as React Navigation, for this
    navigation.navigate('STeacher',{name:'Teacher'});
  };

    return (
      <LinearGradient
      colors={['white', 'lightblue']}//'#4b6cb7', '#182848'
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}>
      {/* Set status bar color */}
      <StatusBar barStyle="light-content" />

      {/* Render the digital clock */}
      <View style={styles.clockContainer}>
        <Text style={styles.clockText}>{currentTime}</Text>
      </View>

      {/* Render the Title and Subtitle */}
      <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <FadeInView>
            <Text style={styles.title}>
            Welcome!
          </Text>
          <Text style={styles.subtitle}>Plan Your Classes with Ease</Text>
          </FadeInView>
    </View>
      

      {/* Render the Buttons */}
      <TouchableOpacity style={styles.button} onPress={goToCourses}>
      <LinearGradient
      colors={['white', 'purple']}//'#4b6cb7', '#182848'
      start={{ x: 2, y: 2 }}
      end={{ x: 0, y: 0 }}
      style={styles.gradient}>
        <Text style={styles.buttonText}>Courses</Text>
        </LinearGradient>
      </TouchableOpacity>
      <Text/>
      <TouchableOpacity style={styles.button} onPress={goToTeachers}>
      <LinearGradient
      colors={['white', 'purple']}//'#4b6cb7', '#182848'
      start={{ x: 2, y: 2 }}
      end={{ x: 0, y: 0 }}
      style={styles.gradient}
      >
        <Text style={styles.buttonText}>Teachers</Text>
        </LinearGradient>
      </TouchableOpacity>
      <Text/>
      <TouchableOpacity style={styles.button} onPress={goToTeachers}>
      <LinearGradient
      colors={['white', 'purple']}//'#4b6cb7', '#182848'
      start={{ x: 2, y: 2 }}
      end={{ x: 0, y: 0 }}
      style={styles.gradient}
      >
        <Text style={styles.buttonText}>New Announcement?</Text>
        </LinearGradient>
      </TouchableOpacity>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#007bff',
  },
  clockContainer: {
    position: 'absolute',
    top: 24,
    borderColor:'purple',
    borderWidth:5,
    borderRightColor:'white',
    borderBottomColor:'white',
  },
  clockText: {
    fontSize: 40,
    color: 'black',
  },
  title: {
    color:'white',
    fontSize: 50,
    textAlign: 'center',
    padding:25,
    fontWeight: 'bold',
    includeFontPadding:true,
    marginBottom: 16,
    textAlign: 'center',
    justifyContent:"space-evenly",
    borderBottomColor:'white',
    fontFamily: 'serif',
    textShadowOffset: { width: 2, height: 2 }, // Text shadow offset
    textShadowRadius: 5, // Text shadow radius
    textShadowColor: 'black', // Text shadow color
  },
  subtitle: {
    fontSize: 20,
    marginBottom: 32,
    textAlign: 'center',
    color: 'black',
    fontWeight:'bold',
    textShadowOffset: { width: 2, height: 2 }, // Text shadow offset
    textShadowRadius: 5, // Text shadow radius
    textShadowColor: 'white', // Text shadow color
  },
  button: {
    width: '70%',
    height:70,
    opacity: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  // Styles for touchable buttons
 buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    animationDuration: '1s',
    animationName: 'blink',
    animationIterationCount: 'infinite',
  },
  buttonLeft: {
    marginRight: 16,
  },
  buttonRight: {
    marginLeft: 16,
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
  // Blinking animation
  '@keyframes blink': {
    '0%': { opacity: 1 },
    '50%': { opacity: 0 },
    '100%': { opacity: 1 },
  },
  // Applying blinking animation to touchable buttons
  buttonLeft: {
    marginRight: 16,
    animationDuration: '1s',
    animationName: 'blink',
    animationIterationCount: 'infinite',
  },
  buttonRight: {
    marginLeft: 16,
    animationDuration: '1s',
    animationName: 'blink',
    animationIterationCount: 'infinite',
  },
  
});


    /*  <View style={styles.container}>
      <Text>CS Department</Text>
      <Text>Welcome Admin!</Text>
      <Button
        title="Go to Courses"
        onPress={() => navigation.navigate('Courses', { name: 'Course' })}
      />
      <Text/>
      <Button
        title="Go to Teachers"
        onPress={() => navigation.navigate('Teachers', { name: 'Teacher' })}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});*/
export default WelcomeScreen;