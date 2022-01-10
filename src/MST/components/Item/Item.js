import React from "react"
import { View, Text, StyleSheet, Pressable } from "react-native"
import { observer } from "mobx-react"

const Item = ({item}) => {
    return (
        <View style={styles.item}>
            <Text style={styles.text}>{item.name}  {item.price} * {item.quantity} = {item.total()}</Text>
            <View style={styles.btns}>
                <Pressable style={styles.btn} onPress={()=>item.decrement()}><Text style={styles.btntext}>-</Text></Pressable>
                <Pressable style={styles.btn} onPress={()=>item.increment()}><Text style={styles.btntext}>+</Text></Pressable>
                <Pressable style={styles.btn} onPress={()=>item.remove()}><Text style={styles.btntext}>x</Text></Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#eef',
        padding: 8,
        marginTop: 14,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    text:{
        fontSize: 18,
         color: '#000'
    },
    btns:{
        flexDirection: "row"
    },
    btn:{
        padding: 4,
        marginHorizontal: 4,
        backgroundColor: '#444',
        width: 30
    },
    btntext:{
        fontSize: 20,
        fontWeight: "bold",
        color: '#fff',
        textAlign: "center"
    }
})

export default observer(Item)