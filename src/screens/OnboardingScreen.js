import React,{ useState } from "react";
import {StyleSheet, Text, View, Image, TouchableOpacity} from "react-native";
import Onboarding from 'react-native-onboarding-swiper';

const Done = ({...props}) => {
	return (
		<TouchableOpacity {...props} style={{marginHorizontal: 10, padding: 10}}>
			<Text>Done</Text>
		</TouchableOpacity>
	);
}

const OnboardingScreen = ({navigation}) => {
	
	return (
			<Onboarding
				onSkip={() => navigation.replace("Login")}
				onDone={() => navigation.replace("Login")}
				DoneButtonComponent={Done}
				bottomBarColor="#fff"
				pages={[
				    {
				      backgroundColor: '#fff',
				      image: <Image style={{width: 300, height: 200}} source={require('../../assets/6263.jpg')} />,
				      title: 'Large & Amazing Content',
				      subtitle: 'Access over 1000s of books',
				    },
				     {
				      backgroundColor: '#fff',
				      image: <Image style={{width: 300, height: 200}} source={require('../../assets/journey.jpg')} />,
				      title: 'Reading is a journey',
				      subtitle: 'Start your reading journey by one click.',
				    },
			    ]}
			/>
	);

}

const styles = StyleSheet.create({});

export default OnboardingScreen;