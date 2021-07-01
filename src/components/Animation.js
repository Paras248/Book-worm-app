import React from "react";
import {Text, StyleSheet, View} from "react-native";
import AnimatedLoader from 'react-native-animated-loader';
import LottieView from 'lottie-react-native';



export const HalfAnimationLoader = () => {
	return (
		<LottieView
			source={require("../../assets/lottie/rect.json")}
			style={styles.lottie}
			autoPlay
		/>
	)
}

export const NotFound = () => {
	return(
		<View>
			<AnimatedLoader 
				visible={true}
				source={require("../../assets/lottie/notfound.json")}
				animationStyle={styles.lottie}
				speed={1}
			/>
		</View>
	);
}

export const Circle = () => {
	return (
				<LottieView
					source={require("../../assets/lottie/circle.json")}
					style={styles.lottie}
					autoPlay
				/>
	)
}

const styles = StyleSheet.create({
	lottie: {
		height: 170,
		width: 170,
		marginLeft: -20,
		marginBottom: -25,
		marginTop: -10

	},
});

