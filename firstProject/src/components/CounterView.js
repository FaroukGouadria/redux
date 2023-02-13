import { View, Text } from 'react-native'
import React from 'react'

const CounterView = ({counter}) => {
  return (
    <View style={{marginBottom:26}}>
      <Text style={{color:"black",fontSize:44,fontWeight:'bold'}}>{counter}</Text>
    </View>
  )
}

export default CounterView