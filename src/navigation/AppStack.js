import React,{useEffect, useState, useContext} from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import SearchScreen from "../screens/SearchScreen";
import HomeScreen from "../screens/HomeScreen";
import ResultShowScreen from "../screens/ResultShowScreen";
import BookScreen from "../screens/BookScreen";
import {TouchableOpacity, Text, StyleSheet} from "react-native"
import {ThemeProvider} from "./ThemeContext";
import {ThemeContext, theme} from "./ThemeContext";
import { Ionicons } from '@expo/vector-icons'; 


const Stack = createStackNavigator();

const AppStack = () => {

	const {theme,toggleTheme} = useContext(ThemeContext);

	const titleColor = theme === 'Light' ? "#fff" : "#171718"

	return (
		<Stack.Navigator screenOptions={{
			title: "bookWorm",
			headerStyle: {
				backgroundColor: titleColor
			},
			headerTintColor:'#4A47A3',
			headerRight: () => {
				return 	<TouchableOpacity style={styles.themeButton} onPress={() => toggleTheme()}>
					{
						theme === "Light"? <Ionicons name="sunny" size={30} color="#4A47A3" />
						: <Ionicons name="ios-moon" size={24} color="#4A47A3" />
					}
				</TouchableOpacity>
			}
		}}>
			<Stack.Screen
				name="Home" 
			 	component={HomeScreen} 
			/>
			<Stack.Screen
				name="Search" 
			 	component={SearchScreen} 
			/>
			<Stack.Screen
				name="ResultShow" 
			 	component={ResultShowScreen} 
			/>
			<Stack.Screen
				name="Book" 
			 	component={BookScreen} 
			/>
		</Stack.Navigator>
	)
	
}

const styles = StyleSheet.create({
	themeButton: {
		marginRight: 11
	}
})

export default () => {
	return(
		<ThemeProvider>
			<AppStack />
		</ThemeProvider>
	)
};