import React from 'react';
import { StyleSheet, Dimensions, View, Button, TouchableOpacity } from 'react-native';
import PDFReader from 'rn-pdf-reader-js';
import Clipboard from 'expo-clipboard';
import * as Speech from "expo-speech";
import { FontAwesome } from '@expo/vector-icons';
import {ThemeContext} from "../navigation/ThemeContext";

const BookScreen = ({route,navigation}) =>   {
    const {pdfURL} = route.params;
    const {theme} = React.useContext(ThemeContext);
    const [copiedText, setCopiedText] = React.useState('');


    const fetchCopiedText = async () => {
        const text = await Clipboard.getStringAsync();
        setCopiedText(text);
    };

    const onSpeak = () => {
        Speech.speak(copiedText,{
            language: 'en',
            pitch: 1,
            rate: 1
        });
    }

    return (
        <View style={[styles.container, styles[`container${theme}`]]}>
        <View style={styles.buttonContainer}>
            <Button title="Load Copy" onPress={() => fetchCopiedText()} style={styles.button}/>
            <TouchableOpacity onPress={() => onSpeak()} >
                <FontAwesome name="play" size={24} color="black" style={[styles.play,styles[`button${theme}`]]}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => Speech.stop()} >
                <FontAwesome name="stop" size={24} color="black" style={[styles.stop, styles[`button${theme}`]]} />
            </TouchableOpacity>

        </View>
        <PDFReader
            source={{
                uri: pdfURL,
            }}
        />
        </View>
    )
  }

export default BookScreen;

const styles = StyleSheet.create({
    container: {
        alignSelf: 'stretch',
        flex: 1,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginVertical: 10
    },
    play: {
        marginLeft: 70,
        marginTop: 5
    },
    stop: {
        marginTop: 5,
        marginLeft: 70
    },
    button: {
        borderRadius: 4,
    },
    buttonLight: {
        color: "black"
    },
    buttonDark: {
        color: "#4A47A3"
    },
    containerLight:{
        backgroundColor: '#fafafa'
    },
    containerDark: {
        backgroundColor: '#171718'
    }
});

