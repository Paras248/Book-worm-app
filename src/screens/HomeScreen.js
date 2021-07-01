import React from "react";
import { Text, StyleSheet, View, TextInput, Image} from "react-native";
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import {ThemeContext} from "../navigation/ThemeContext";
import {withNavigation} from "@react-navigation/compat"

const HomeScreen = ({navigation}) => {

	const {theme} = React.useContext(ThemeContext) 
	const [term, setTerm] = React.useState("");

	return (
		<View style={[styles.containerBody, styles[`container${theme}`]]}>
			<Image source={require("../../assets/download.jpg")} style={styles.imageStyle}/>
		
			<Text style={styles.textStyle}>bookWorm</Text>
			<View style={[styles.containerStyle, styles[`container${theme}`]]}>
				<MaterialIcons name="search" style={styles.iconStyle}/>
				<TextInput
					value={term}
					onChangeText={setTerm}
					onEndEditing={() => term === ''? alert("Warning!!! Please enter book name to search") : navigation.navigate("Search", {text: term}) }
					autoCapitalize="none"
					autoCorrect={false}
					placeholder="Search Books..."
					style={[styles.inputStyle, styles[`text${theme}`]]}
					placeholderTextColor={theme ==="light"? "#e5e5e5": "#e5e5e5"}
					blurOnSubmit={true}
				/>
			</View>

			<Text style={[styles.bottomText, styles[`text${theme}`]]}>Made with <AntDesign name="heart" size={15} color="red" /> in India.</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	containerStyle: {
		flexDirection: "row",
		padding: 8,
		marginHorizontal: "5%",
		marginTop: 8,
		borderColor: '#ced4da',
		borderWidth: 1,
		marginBottom: 10
	},
	inputStyle: {
		flex: 1,
		fontSize: 20,
	},
	iconStyle: {
		fontSize: 30,
		color: "gray",
		marginRight: 8,
		marginTop: 2
	},
	textStyle: {
		fontSize: 25,
		fontWeight: 'bold',
		alignSelf:'center',
		color: '#4A47A3',
		marginBottom: 30
	},
	containerLight:{
		backgroundColor: '#fff'
	},
	containerDark: {
		backgroundColor: '#171718',
	},
	textLight:{
		color: '#000',
	},
	textDark: {
		color: "#fff"
	},
	containerBody: {
		flex: 1
	},
	imageStyle: {
		marginTop: 100,
		height: 100,
		width: 100,
		alignSelf: 'center',
		borderRadius: 10,
		marginBottom: 10
	},
	bottomText: {
		marginTop: 10,
		alignSelf: 'center',
		fontSize: 18
	}
});

export default withNavigation(HomeScreen);