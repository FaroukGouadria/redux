import { View, Text, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';
import { decrementValue, incrementDecrementValue, incrementValue } from '../Redux/Actions/Counter';

const CounterController = ({ setCounterValue, customValueParentState }) => {

  const dispatch = useDispatch();
  const incrementValueAction = () => {
    //************************without redux***************************************//
    // setCounterValue(value =>{
    //   return parseInt(value) + parseInt(customValueParentState) ;
    // });
    //************************without redux***************************************//

    //************************with redux***************************************//
    dispatch(incrementDecrementValue('increment'))
    //************************with redux***************************************//

  };

  const decrementValueAction = () => {
    //************************without redux***************************************//
    // setCounterValue(value=>{
    //   return parseInt(value) - parseInt(customValueParentState);
    // });
    //************************without redux***************************************//

    //************************with redux***************************************//
    dispatch(incrementDecrementValue('decrement'))
    //************************with redux***************************************//
  };
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', width: '70%' }}>
      <Button title='Decrement' style={{ backgroundColor: '#EE5D5D', borderColor: 'black' }} onPress={() => decrementValueAction()} />
      <Button style={{ backgroundColor: '#EE5D5D', borderColor: 'black' }} onPress={() => incrementValueAction()} title='Increment' />
    </View>
  )
}

export default CounterController