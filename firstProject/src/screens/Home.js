import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const data = useSelector(state=>state)
    console.log(data)
  return (
    <View>
      <Text>Home</Text>
    </View>
  )
}

export default Home