import React, {useState} from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';

import { Provider } from 'react-redux';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';

import store from './store';

import { increment } from './actions';
import { decrement } from './actions';
import { reset } from './actions';


const Counter = () => {
  const dispatch = useDispatch()

  const counter = useSelector(state => state.counter)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{counter}</Text>
      <View style={{ flexDirection: "row" }}>
        <TouchableHighlight style={{ ...styles.button, backgroundColor: "red" }} onPress={() => dispatch(decrement())}>
          <Text style={styles.btnText}>-</Text>
        </TouchableHighlight>
        <TouchableHighlight style={{ ...styles.button, backgroundColor: "grey" }} onPress={() => dispatch(reset())}>
          <Text style={styles.btnText}>Reset</Text>
        </TouchableHighlight>
        <TouchableHighlight style={{ ...styles.button, backgroundColor: "limegreen" }} onPress={() => dispatch(increment())}>
          <Text style={styles.btnText}>+</Text>
        </TouchableHighlight>
      </View>
    </View>
  )
}

export default function AppScreen() {
  return (
    <Provider store={store}>
        <Counter />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 100,
    fontWeight: "bold"
  },
  button: {
    width: 100,
    height: 50,
    margin: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "black",
    borderStyle: "solid",
    borderWidth: 2
  },
  btnText: {
      fontWeight: 'bold',
      color: '#fff',
      fontSize: 24
  }
});