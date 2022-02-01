import React from "react";
import {View,Text, TouchableOpacity,StyleSheet, FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
function Chat({navigation}){
   const chat_member =[
       {name:"김재민", id:1},
       {name:"하현찬", id:2},
       
   ]
    return(
        <View style={styles.container}>
        <View style={styles.header}>
            <Text>
                Chat_List
            </Text>
        </View>
        <View style={styles.content}>
            <FlatList data={chat_member}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=>navigation.navigate("Chat_Room")}>
                    <Text> {item.name}</Text>
                    </TouchableOpacity>
            )}></FlatList>
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