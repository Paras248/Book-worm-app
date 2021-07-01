import React,{ useState, useEffect } from "react";
import {StyleSheet, Text, View} from "react-native";
import bookmeth from "../api/bookmeth";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import {ThemeContext} from "../navigation/ThemeContext";



const SearchScreen = ({route,navigation}) => {
	
	const [term, setTerm] = useState("");
	const [results, setResults] = useState([]);


	const {text} = route.params;

	const searchApi = async(searchTerm) => {
		try{
			const response = await bookmeth.get("/",{
				params: {
					q: searchTerm
				}
			})
			setResults(response.data);
		}catch(err){
			setErrorMessage("Something went wrong");
		}
	} 

	useEffect(() => {
    	searchApi(text);
  	}, []);

	const {theme} = React.useContext(ThemeContext) 

	return (
		<View style={[styles.containerStyle, styles[`container${theme}`]]}>
			<SearchBar
			 text={term}
			 handleChangeText={(text) => setTerm(text)}
			 handleTextSubmit={() => term === '' ? alert("Warning!!! Please enter book to search") : searchApi(term)}
			/>
			
			<ResultsList results={results}/>
		</View>
	);

}

const styles = StyleSheet.create({
	containerStyle: {
		flex: 1,
	},
	containerLight:{
		backgroundColor: '#fafafa'
	},
	containerDark: {
		backgroundColor: '#171718'
	}
});

export default SearchScreen;