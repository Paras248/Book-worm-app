import React,{useEffect, useState} from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createStackNavigator();

const AuthStack = () => {

	const [ isFirstLaunch, setIsFirstLaunch ] = useState(null);
	let routeName;

	useEffect(() => {
		AsyncStorage.getItem("alreadyLaunched").then((value) => {
			if(value === null){
				AsyncStorage.setItem("alreadyLaunched", "true");
				setIsFirstLaunch(true);				
			}else{
				setIsFirstLaunch(false);		
			}
		})
	},[])

	if( isFirstLaunch === null){
		return null;
	}else if( isFirstLaunch === true){
		routeName = "Onboarding";
	}else{
		routeName = "Login";
	}

	return (
			<Stack.Navigator initialRouteName={routeName}>
				<Stack.Screen
				 	name="Onboarding" 
			 		component={OnboardingScreen} 
			 	 	options={{
				 		headerShown: false
				 	}}
				/>
				<Stack.Screen 
					name="Login" 
					component={LoginScreen}
					options={{
				 		headerShown: false
				 	}}
				/>
				<Stack.Screen 
					name="SignUp" 
					component={SignUpScreen}
					options={{
						title: "",
						headerStyle: {
							backgroundColor: '#f9fafd',
							elevation: 0
						}
					}}
				/>
			</Stack.Navigator>
		)	
	
}

export default AuthStack;