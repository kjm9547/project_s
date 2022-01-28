import React from "react";
import {View,Text, TouchableOpacity,StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
function Chat({navigation,route}){
   
    return(
        <View style={styles.container}>
        <View style={styles.header}>
            <Text>
                Chat_List
            </Text>
        </View>
        <View style={styles.content}>
            <Text>{route.params.setList}</Text>
        </View>
        <View style={styles.footer}>
            <TouchableOpacity onPress={()=>navigation.navigate("Main")} style={styles.bt_box}>
                <Icon name="user" size={50} color="red"/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("Chat")}style={styles.bt_box}>
                <Icon name="user" size={50} color="red"/>
            </TouchableOpacity>
            <TouchableOpacity title='Search' onPress={() => navigation.push("Chat")}style={styles.bt_box}>
                <Icon name="user" size={50} color="red"/>
            </TouchableOpacity>
            <TouchableOpacity title='...' onPress={() => navigation.push("Chat")}style={styles.bt_box}>
                <Icon name="user" size={50} color="red"/>
            </TouchableOpacity>
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
    flex:0.7,
    borderColor:'black',
    borderWidth:1
},
footer:{
    flex:0.1,
    borderColor:'black',
    borderWidth:1,
    flexDirection:'row'
},
bt_box:{
    flex:1,
    borderWidth:1,
    borderColor:"black",
    paddingHorizontal:28
}
})

export default Chat