import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "./component/Login"
import Main from "./component/Main"
import Chat from "./component/Chat"
const Stack = createNativeStackNavigator();

function App(){
const My_info = ["김재민",id=0]
const friends_list = [
  {name:"하현찬",id:1},
  {name:"박진용" ,id:2},
  
]
console.log(friends_list)
  return(
    <NavigationContainer>
      <Stack.Navigator initiolRoutename ="Login">
        <Stack.Screen name="Login" component={Login} options={{headerShown: false,}}>
        </Stack.Screen>
        <Stack.Screen name="Main" component={Main}options={{headerShown: false,}
      }>
        </Stack.Screen>
        <Stack.Screen name="Chat" component={Chat} options={{headerShown: false,}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;