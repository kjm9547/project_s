import React from "react";
import { View,Button } from 'react-native'

function Login({navigation}){
    return(
        <View>
            <Button title="login" onPress={() => navigation.push("Main")}></Button>
        </View>
    )
}

export default Login
