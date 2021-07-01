import React,{useEffect} from 'react';
import {View,Text,ScrollView, StyleSheet, FlatList, TouchableOpacity} from "react-native";
import ResultDetails from "./ResultDetails";
import { withNavigation } from "@react-navigation/compat";
import {ThemeContext} from "../navigation/ThemeContext";
import { HalfAnimationLoader, NotFound } from "./Animation";

const ResultsList = ({results,navigation}) => {

	const {theme} = React.useContext(ThemeContext) 

		while(!results.length){
			return(
				<ScrollView>
					<HalfAnimationLoader />
					<HalfAnimationLoader />
					<HalfAnimationLoader />
					<HalfAnimationLoader />
					<HalfAnimationLoader />
				</ScrollView>								
			)
		}

		
	return (
		<>
			<FlatList
				data={results}
				keyExtractor={(result) => result._id }
				renderItem={({ item }) => {
					return (
						<TouchableOpacity 
							onPress={() => navigation.navigate("ResultShow", {
								imageURL: `https://cdn.bookmeth.com/${item._source.coverurl}`,
								size: item._source.size,
								pdfURL: item._source.external_link,
								title: item._source.title,
								author: item._source.metadata.author,
								tags: item._source.tags
							})}
						>
							<ResultDetails result={item}/>
						</TouchableOpacity>
					)
				}}
			/>
		</>
	)
}


export default withNavigation(ResultsList);