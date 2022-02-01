import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "./component/Login"
import Main from "./component/Main"
import Chat from "./component/Chat"
import Chat_Room from "./component/Chat_Room";

const Stack = createNativeStackNavigator();


function App(){
  

  return(
    <>
    <NavigationContainer>
      <Stack.Navigator initiolRoutename ="Login">
        <Stack.Screen name="Login" component={Login} options={{headerShown: false,}}>
        </Stack.Screen>
        <Stack.Screen name="Main" component={Main}  options={{headerShown: false,}}
         initialParams={}={[
           {name:'김재민'},
           {name:'ㅂㅈㄴ'},
           {name:'ㅇㅁㄴ'}
          ]}>
        </Stack.Screen>
        <Stack.Screen name="Chat" component={Chat} options={{headerShown: false,}}></Stack.Screen>
        <Stack.Screen name="Chat_Room" component={Chat_Room} options={{headerShown: false,}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
   
    </>
  )
}

export default App;