import React from 'react';
import {Text, View, StyleSheet, Image} from "react-native";
import {ThemeContext} from "../navigation/ThemeContext";

const ResultDetails = ({result}) => {
	const imageURL = `https://cdn.bookmeth.com/${result._source.coverurl}`;
	const title = result._source.title;
	const {theme} = React.useContext(ThemeContext) 

	return (
		<View style={[styles.container, styles[`container${theme}`]]}>
			<Image style={styles.imageStyle} source={{uri: imageURL}}/>
			<View style={styles.textContainer}>
				<Text style={[styles.textHeader, styles[`text${theme}`]]}>{title}</Text>
				{result._source.metadata.author ? <Text style={styles[`text${theme}`]}>By {result._source.metadata.author}</Text> : null}
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		marginBottom: 10,
		backgroundColor: '#fff',
		marginHorizontal: 12,
		borderRadius: 3,
		flexDirection: 'row',
		padding: 7
	},
	textContainer: {
		flexDirection: "column",
		marginLeft: 10,
		marginRight: 100
	},
	imageStyle: {
		height: 120,
		width: 80,
		borderRadius: 2
	},
	textHeader: {
		fontSize: 18,
		fontWeight: 'bold',
		marginBottom: 6
	},
	containerLight:{
		backgroundColor: '#fff'
	},
	containerDark: {
		backgroundColor: '#2d2f30',
	},
	textLight:{
		color: '#000',
	},
	textDark: {
		color: "#fff"
	}
});

export default ResultDetails;