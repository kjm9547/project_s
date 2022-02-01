import React from "react";
import { View,Button,StyleSheet, TextInput,Image } from 'react-native'

function Login({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={require('../image/logo.png')} style={styles.Logo_st} resizeMode="center"></Image>
            </View>
            <View style={styles.contents}>
                <TextInput placeholder="id" style={styles.Input_box}>

                </TextInput>
                <TextInput placeholder="logout" style={styles.Input_box}>
                    
                </TextInput>
            <Button title="login" onPress={() => navigation.push("Main",)} color={"#260e04"}></Button>
            </View>
            <View style={styles.footer}>

            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#ffeb3b",
       
    },
    header:{
        flex:0.3,
        alignItems:'center',
        paddingTop:50

    },
    Logo_st:{
        width:200,
        height:150
    },
    contents:{
        flex:0.5,
        paddingHorizontal:25

    },
    Input_box:{
        width:'100%',
        backgroundColor:"white",
        marginBottom:20,
        paddingLeft:10
    },
    Login_bt:{
        backgroundColor:"#260e04"
    },
    footer:{
        flex:0.2
    }
})
export default Login
