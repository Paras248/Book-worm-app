import React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import {ThemeContext} from "../navigation/ThemeContext";

const SearchBar = ({ text, handleChangeText, handleTextSubmit }) => {

	const {theme} = React.useContext(ThemeContext) 

	return (
		<View style={[styles.containerStyle, styles[`container${theme}`]]}>
			<MaterialIcons name="search" style={styles.iconStyle}/>
			<TextInput
				value={text}
				onChangeText={handleChangeText}
				onEndEditing={handleTextSubmit}
				autoCapitalize="none"
				autoCorrect={false}
				placeholder="Search Books..."
				style={[styles.inputStyle, styles[`text${theme}`]]}
				placeholderTextColor={theme ==="light"? "#e5e5e5": "#e5e5e5"}
				blurOnSubmit={true}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	containerStyle: {
		flexDirection: "row",
		padding: 8,
		marginHorizontal: "3%",
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
	}
});

export default SearchBar;