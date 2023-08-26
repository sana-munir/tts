import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  Pressable, 
  Alert
} from "react-native";
import styles from "../components/styles";
import Svg, { Image, Ellipse, ClipPath } from "react-native-svg";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
  withDelay,
  runOnJS,
  withSequence,
  withSpring
} from "react-native-reanimated";
import LottieView from "lottie-react-native";

import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, doc, getDoc, query, where } from 'firebase/firestore';
import { db } from '../firebase1';

const LoginScreen2 = ({ navigation }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [id, setId] = useState('');

  const handleLogin = async () => {
    getDoc(doc(db, 'Teachers', id))
    .then((docData) => {
      if (docData.exists()) {
        if (email === docData.data().email && password === docData.data().password && id === docData.data().ID){
          Alert.alert("Message","Successfully logged in");
          navigation.navigate('TWelcome',{tid:id})
        }
        else{
          Alert.alert("Message","Invalid email or password");
        }
      } else {
        Alert.alert("Message","Invalid credentials");
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }


    /*signInWithEmailAndPassword(auth,email,password)
      .then((userCredential) => {
        Alert.alert("Message","Successfully logged in");
        navigation.navigate('TWelcome')// add navigation here, for example using React Navigation
      })
      .catch((error) => {
         Alert.alert("Error", error.message);
         //console.log(error.message);
      });*/


    //const source={require('../asset')}
  const { height, width } = Dimensions.get("window");
  const imagePosition = useSharedValue(1);
  const formButtonScale = useSharedValue(1);
  
  const imageAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(
      imagePosition.value,
      [0, 1],
      [-height / 2, 0]
    );
    return {
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });

  const buttonsAnimatedStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [250, 0]);
    return {
      opacity: withTiming(imagePosition.value, { duration: 500 }),
      transform: [
        { translateY: withTiming(interpolation, { duration: 1000 }) },
      ],
    };
  });

  const closeButtonContainerStyle = useAnimatedStyle(() => {
    const interpolation = interpolate(imagePosition.value, [0, 1], [180, 360]);
    return {
      opacity: withTiming(imagePosition.value === 1 ? 0 : 1, { duration: 800 }),
      transform: [
        { rotate: withTiming(interpolation + "deg", { duration: 1000 }) },
      ],
    };
  });

  const formAnimatedStyle = useAnimatedStyle(() => {
    return {
      opacity:
        imagePosition.value === 0
          ? withDelay(400, withTiming(1, { duration: 800 }))
          : withTiming(0, { duration: 300 }),
    };
  });

  const formButtonAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: formButtonScale.value}]
    }
  })

  const loginHandler = () => {
    imagePosition.value = 0;
  };

  const handleSearch = () => {
    if (!email || !password || !id) {
      Alert.alert("Error","Enter all fields");
    } else {
      handleLogin();
    }
  };

  return (
    <Animated.View style={styles.container}>
      <Animated.View style={[StyleSheet.absoluteFill, imageAnimatedStyle]}>
        <Svg height={height + 0} width={width}>
          <ClipPath id="clipPathId">
            <Ellipse cx={width / 2} rx={height} ry={height + 0} />
          </ClipPath>
          
          <Image
            href={require("../assets/p1.jpg")}
            width={width + 30}
            height={height + 30}
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#clipPathId)"
          />
        </Svg>
        
        <LottieView
          key="animation"
          autoPlay
          loop
          source={require("../assets/t1.json")}
        />
        <Animated.View
          style={[styles.closeButtonContainer, closeButtonContainerStyle]}
        >
          <Text onPress={() => (imagePosition.value = 1)}>X</Text>
        </Animated.View>
      </Animated.View>
      <View style={styles.bottomContainer}>
        <Animated.View style={buttonsAnimatedStyle}>
          <Pressable style={styles.button} onPress={loginHandler}>
            <Text style={styles.buttonText}>LOG IN</Text>
          </Pressable>
        </Animated.View>
        <Animated.View style={[styles.formInputContainer, formAnimatedStyle]}>
          <TextInput
            style={styles.textInput}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <TextInput
            style={styles.textInput}
            placeholder="Your ID"
            value={id}
            onChangeText={(text) => setId(text)}
          />

          <Animated.View style={[styles.formButton, formButtonAnimatedStyle]}>
            <Pressable onPress={handleSearch}>
              <Text style={styles.buttonText}>
                LOG IN
              </Text>
            </Pressable>
          </Animated.View>
        </Animated.View>
      </View>
    </Animated.View>
  );
}
export default LoginScreen2;
