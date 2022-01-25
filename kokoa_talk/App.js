import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {creacteNativeStackNavigator} from '@react-navigation/native-stack';
import Login from "./component/Login"

const Stack = creacteNativeStackNavigator();

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initiolRoutename ="Login">
        <Stack.Screen name="Login" component={Login}>

        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )

}

export default App;