import WelcomeScreen from "../screen/WelcomeScreen";
import TWelcomeScreen from "../screen/teacher/TWelcome";
import CoursesScreen from "../screen/CoursesScreen";
import TeachersScreen from "../screen/teacher/TeacherScreen";
import BscsScreen from "../screen/BscsScreen";
import McsScreen from "../screen/McsScreen";
import PhdScreen from "../screen/PhdScreens";
import LoginScreen1 from "../screen/loginscreen1";
import LoginScreen2 from "../screen/loginscreen2";
import SMS2Screen from "../screen/semester2";
import SMS6Screen from "../screen/semester6";
import STScreen from "../screen/teacher/selectteacher";
import TAScreen from "../screen/teacher/tascreen";
import Selection from "../screen/selection";
import AboutUsScreen from "../screen/AboutUs";
import DayScreen from "../screen/Day";
import ProfileScreen from "../screen/teacher/profile";
import StartScreen from "../screen/startscreen";
import SWelcomeScreen from "../screen/student/swelcome";
import TeacherDetailScreen from "../screen/teacher/TeacherDetailScreen";
import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomTabNavigator from "./tabnavigator";
//import { NavigationContainer } from '@react-navigation/native';
import TeacherScheduleScreen from "../screen/teacher/Schedule";
import Timetable from "../screen/student/timetable";
import LoginScreen3 from "../screen/loginscreen3";

const Stack = createNativeStackNavigator();
const MainStackNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: 'purple',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerTitleAlign:"center",
    }}>
      <Stack.Screen
          name="Start"
          component={StartScreen}
          options={{ headerShown:false }}
        />
      <Stack.Screen
          name="Login1"
          component={LoginScreen1}
          options={{
            title: 'Admin Login',
            headerStyle: {
              backgroundColor: 'purple',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign:"center",
          }}
        />
        <Stack.Screen
          name="Login2"
          component={LoginScreen2}
          options={{
            title: 'Teacher Login',
            headerStyle: {
              backgroundColor: 'purple',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign:"center",
          }}
        />
        <Stack.Screen
          name="Login3"
          component={LoginScreen3}
          options={{
            title: 'Student Login',
            headerStyle: {
              backgroundColor: 'purple',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign:"center",
          }}
        />
        <Stack.Screen
          name="Welcome"
          component={BottomTabNavigator}
          /*options={{
            title: 'Welcome',
            headerStyle: {
              backgroundColor: 'indianred',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign:"center",
          }}*/
        />
        <Stack.Screen
        name="Selection"
        component={Selection}
        options={{title:'Select'}}
        />
        <Stack.Screen
        name="Courses"
        component={CoursesScreen}
        options={{ title: 'Courses' }}
        />
        <Stack.Screen
        name="Teachers"
        component={TeachersScreen} 
        />
        <Stack.Screen
        name="Day"
        component={DayScreen} 
        />
        <Stack.Screen
        name="Student"
        component={SWelcomeScreen} 
        />
        <Stack.Screen
        name="Profile"
        component={ProfileScreen} 
        />
        <Stack.Screen
        name="Teacheradd"
        component={TAScreen}
        options={{ title: 'Teacher' }} 
        />
        <Stack.Screen
        name="AboutUs"
        component={AboutUsScreen}
        options={{ title: 'About Us' }} 
        />
        <Stack.Screen
        name="STeacher"
        component={STScreen} 
        options={{ title: 'Teacher' }}
        />
        <Stack.Screen
        name="Timetable"
        component={Timetable} 
        />
        <Stack.Screen
        name="TWelcome"
        screenOptions={{headerBackTitleVisible:false}}
        component={TWelcomeScreen}
        options={{ title: 'Welcome'}}
        />
        <Stack.Screen
        name="Schedule"
        component={TeacherScheduleScreen}
        options={{ title: 'Schedule' }}
        />
        <Stack.Screen
        name="BSCS"
        component={BscsScreen}
        options={{ title: 'BSCS' }}
        />
        <Stack.Screen
        name="MCS"
        component={McsScreen}
        options={{ title: 'MCS' }}
        />
        <Stack.Screen
        name="PHD"
        component={PhdScreen}
        options={{ title: 'PHD' }}
        />
        <Stack.Screen
        name="SMS2"
        component={SMS2Screen}
        options={{ title: 'Semester 2' }}
        />
        <Stack.Screen
        name="SMS6"
        component={SMS6Screen}
        options={{ title: 'Semester 6' }}
        />
        <Stack.Screen 
        name="TeacherDetails" 
        component={TeacherDetailScreen} 
        />
      </Stack.Navigator>
  );
}
export default MainStackNavigator;
/*const logstacknavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: 'Timetable System' }}
        />
        </Stack.Navigator>
  );
}*/