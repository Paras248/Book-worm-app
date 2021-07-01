import React from 'react'
import {Text,View, StyleSheet, Image, Button} from "react-native";
import {withNavigation} from "@react-navigation/compat";
import {ThemeContext} from "../navigation/ThemeContext";


const ResultShowScreen = ({route,navigation}) => {
	const {imageURL,size,pdfURL, title, author, tags} = route.params;
	const pdfSize = Math.floor(size/1024/1024);
	const {theme} = React.useContext(ThemeContext)

	return (
		<View style={[styles.topContainer, styles[`topcontainer${theme}`]]}>
			<View style={[styles.container,styles[`container${theme}`]]}>
				
				<View style={styles.content}>
				
					<Image style={styles.imageStyle} source={{uri: imageURL}}/>
				
					<View style={styles.textContainer}>
				
						<Text style={[styles.textHeader, styles[`text${theme}`]]}>{title} </Text>
				
						{ author? <Text style={styles[`text${theme}`]}>by {author}</Text>: null}
				
					</View>
				
				</View>
				<View style={{marginBottom: 10}}>
					<Button title="Read Book" onPress={() => navigation.navigate("Book",{pdfURL})}/>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	topContainer: {
		flex: 1,
	},
	topcontainerLight:{
		backgroundColor: '#fafafa'
	},
	topcontainerDark: {
		backgroundColor: '#171718'
	},
	container: {
		marginHorizontal: 10,
		marginVertical: 15,
		backgroundColor: '#fff',
		padding: 10,
		paddingRight: 5,
		borderRadius: 4
	},
	containerLight:{
		backgroundColor: '#fff'
	},
	containerDark: {
		backgroundColor: '#2d2f30'
	},

	imageStyle: {
		height: 140,
		width: 100,
		borderRadius: 4
	},
	content: {
		flexDirection: 'row' ,
		marginBottom: 10,
	},
	textContainer: {
		flexDirection: 'column', 
		marginLeft: 10,
		marginRight: 110,
	},
	textHeader: {
		fontSize: 18,
		fontWeight: 'bold'
	},
	textLight: {
		color: "#000"
	},
	textDark: {
		color: "#fff"
	},
})

export default withNavigation(ResultShowScreen);