import React, {useState} from 'react';
import {KeyboardAvoidingView, ScrollView, Platform, StyleSheet, Keyboard, Text, View, TextInput, TouchableOpacity} from 'react-native';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import ToDo from "./components/ToDo";

export default function App() {
    const [toDo, setToDo] = useState();
    const [toDoList, setToDoList] = useState([]);

    const addToDo = () => {
        Keyboard.dismiss() // Keyboard goes down once toDo is added.
        setToDoList([...toDoList, toDo])
        setToDo(null)
    }

    const deleteToDo = (index) => {
        let duplicate = [...toDoList]
        duplicate.splice(index, 1)
        setToDoList(duplicate)
    }

    return (
        <View style={styles.layout}>
            <View style={styles.container}>
                <Text style={styles.title}>Today's tasks</Text>

                <ScrollView keyboardShouldPersistTaps='handled'>
                    <View style={styles.toDos}>
                        {
                            toDoList.map((toDo, index) => (
                                <TouchableOpacity key={index} onPress={() => deleteToDo(index)}>
                                    <ToDo todoTitle={toDo}/>
                                </TouchableOpacity>
                            ))
                        }
                    </View>
                </ScrollView>
            </View>

            <KeyboardAvoidingView
                behaviour={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.inputContainer}
            >
                <TextInput style={styles.input} placeholder={'Add a To-Do'} value={toDo} onChangeText={(val) => setToDo(val)}></TextInput>

                <TouchableOpacity onPress={() => addToDo()}>
                    <View style={styles.addButton}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    );
}

const styles = StyleSheet.create({
    layout: {
        backgroundColor: '#E8EAED',
    },
    container: {
        paddingVertical: 80,
        paddingHorizontal: 20,
        width: '100%',
        height: '100%'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    toDos: {
        marginVertical: 20
    },
    inputContainer: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    input: {
        backgroundColor: '#fff',
        padding: 15,
        width: 250,
        borderRadius: 25,
        borderColor: '#C0C0C0',
        borderWidth: 1
    },
    addButton: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1
    },
    addText: {
        fontSize: 48,
        fontWeight: '200'
    }
});
