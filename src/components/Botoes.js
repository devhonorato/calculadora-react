import React from 'react';
import {View, TouchableOpacity, Text, Dimensions, StyleSheet} from 'react-native';
// import { TouchableOpacity } from 'react-native-gesture-handler'


const styles = StyleSheet.create({
    button: {
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#888',
        paddingTop: 35,
    },
    operationButton: {
        color: '#fff',
        backgroundColor: '#FA8231'
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4) * 3,
    }
})

export default props => {

    const styleButtons = [styles.button]
    if(props.double) styleButtons.push(styles.buttonDouble)
    if(props.triple) styleButtons.push(styles.buttonTriple)
    if(props.operation) styleButtons.push(styles.operationButton)
    return (
        <>
            <TouchableOpacity onPress={() => props.onClick(props.label)}>
                <Text style={styleButtons}>{props.label}</Text>
            </TouchableOpacity>
        </>
    )
}