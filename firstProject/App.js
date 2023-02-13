/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';

import CounterScreen from './src/screens/CounterScreen';

import {store} from './src/Redux/store';
import {Provider,useSelector}from 'react-redux'



// const App = () => {
//   const [customValueParentState, setCustomValueParentState] = useState(1)
//   return (
//     <View style={{ flex: 1 }}>
//       <CounterScreen customValueParentState={customValueParentState} />
//       <CounterCustomerSet SetCustomValueParentState={setCustomValueParentState} />
//     </View>
//   );
// }
const App =()=>{
  // const data = useSelector((state)=>{
  //     console.log(state)
  // })
  return(
    <Provider store={store}>
     <CounterScreen/>
    </Provider>
  )
}

export default App;
