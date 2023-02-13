import { View, Text, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import CounterView from '../components/CounterView';
import CounterController from '../components/CounterController';
import { useDispatch, useSelector } from 'react-redux';
import { setCustomValue } from '../Redux/Actions/Counter';

const CounterScreen = ({ customValueParentState }) => {
    const counter = useSelector(state => state.counter);
    const dispatch=useDispatch()
    console.log(counter)

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <CounterView counter={counter.count} />
            <CounterController />
            <TextInput value={counter.changeValue} style={{ borderWidth: 2, borderRadius: 20, width: '80%', marginTop: 30,textDecorationColor:'blue',fontSize:20 }}
            onChangeText={text=>dispatch(setCustomValue(text))}
            />

        </View>
    );
}

export default CounterScreen