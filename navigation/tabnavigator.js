import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
//import { MainStackNavigator, ContactStackNavigator,SettingStackNavigator } from "./stacknavigator";
import MainStackNavigator from "./stacknavigator";
import Settings from "../screen/settings";
import Contact from "../screen/contact";
import WelcomeScreen from "../screen/WelcomeScreen";
const Tab= createBottomTabNavigator();
const BottomTabNavigator = () =>{
    return(
        <Tab.Navigator screenOptions={{headerShown:false}}>
            <Tab.Screen name="Welcome" component={WelcomeScreen} options={{tabBarIcon:({focused})=><Ionicons name="md-home" size={28} color = "purple"/>}} />
            <Tab.Screen name="Contact" component={Contact} options={{tabBarIcon:({focused})=><Ionicons name="md-call" size={28} color = "teal"/>}} />
            <Tab.Screen name="Settings" component={Settings} options={{tabBarIcon:({focused})=><Ionicons name="md-settings" size={28} color = "navy"/>}} />
        </Tab.Navigator>
    );
};
export default BottomTabNavigator;
//<Tab.screen