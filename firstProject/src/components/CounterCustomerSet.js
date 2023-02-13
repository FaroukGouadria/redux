import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'

const CounterCustomerSet = ({ SetCustomValueParentState }) => {

    const [customValue,setCustomValue]=useState('1');

    const changeState=(text)=>{
            console.log(text)
            setCustomValue(text)
            SetCustomValueParentState(text)
    }
  return (
    <View style={{flex:1, alignItems:'center'}}>
     <TextInput value={customValue} style={{width:'80%',borderWidth:2}} onChangeText={(text)=>changeState(text)}/>
    </View>
  )
}

export default CounterCustomerSet