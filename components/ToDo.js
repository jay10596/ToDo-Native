import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

// const ToDo = () => {
export default function ToDo(props) {
    return (
        <View style={styles.toDo}>
            <View style={styles.leftPortion}>
                <View style={styles.square}></View>
                <Text style={styles.toDoTitle}>{props.todoTitle}</Text>
            </View>
            <TouchableOpacity>
                <View style={styles.circle}></View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    toDo: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 10,
    },
    leftPortion: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    toDoTitle: {
        flexShrink: 1
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15
    },
    circle: {
        width: 12,
        height: 12,
        backgroundColor: this.bgColor,
        borderRadius: 50,
        borderColor: '#55BCF6',
        borderStyle: 'solid',
        borderWidth: 1,
    }
});