import React,{useState} from "react";
import {View,Text, TouchableOpacity,StyleSheet, FlatList, TextInput} from 'react-native'

function Chat_Room({navigation}){
    const [text,Settext] = useState("")
    return(
    <View style={styles.container}>
        <View style={styles.content}>
        <Text>
            room
        </Text>
        </View>
        <View style={styles.footer}>
        <TextInput style={styles.input_st}></TextInput>
        </View>
        
        
    </View>
    )
}

const styles =StyleSheet.create({
    container:{
        flex:1
    },
    header:{
        flex:0.2,
        borderColor:'black',
        borderWidth:1
    },
    content:{
        flex:0.9,
        borderColor:'black',
        borderWidth:1
    },
    footer:{
        flex:0.1,
        borderColor:'black',
        borderWidth:1,
        flexDirection:'row'
    },
    input_st:{
        borderColor:'red',
        borderWidth:1,
        flex:1
    }
}
)

export default Chat_Room