import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppScreen = () => {
    const [name, setname] = useState('')
    const [retrivedname, setretrivedname] = useState('')

    const save = async () => {
        try {
            await AsyncStorage.setItem('name', name)
        } catch (e) {
            console.log("error: ", e)
        }
        try {
            const value = await AsyncStorage.getItem('name')
            if (value !== null) {
                setretrivedname(value)
            }
        } catch (e) {
            console.log("error: ", e)
        }
    }

    return (
        <View style={styles.container}>
            <TextInput placeholder='Enter your name' style={styles.input} onChangeText={setname} />
            <Text style={styles.name}>{retrivedname}</Text>
            <Button title='Save' onPress={save} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    input: {
        borderColor: '#000',
        borderWidth: 1,
        marginVertical: 20,
        width: '70%',
        padding: 6
    },
    name: { marginBottom: 10 }
})

export default AppScreen
