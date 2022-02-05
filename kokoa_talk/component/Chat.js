import React from "react";
import {View,Text, TouchableOpacity,StyleSheet, FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
function Chat({navigation}){
    const user_list=[
        {id:0,name:"김재민"},
        {id:1,name:"박진용"},
        {id:2,name:"하호찬"},
        {id:3,name:"이재준"},
    ]
    return(
        <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.title_name}>
                채팅
            </Text>
        </View>
        <View style={styles.content}>
            <FlatList style={styles.list}
            ItemSeparatorComponent={()=><View style={styles.separate_line}/>} 
            data={user_list}
            renderItem={({item})=>(
                <TouchableOpacity style ={styles.list_st}
                onPress={()=>navigation.navigate("Chat_Room")}>
                    <View style={styles.user_img}/>
                    <Text style={styles.user_txt}>{item.name}</Text>
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
},
list:{
    borderWidth:1,
    
    },
separate_line:{
    height:1,
    backgroundColor:'#e0e0e0',
    width:'90%',
    alignSelf:"center"
    
    
},
user_txt:{
    fontSize:16,
    paddingHorizontal:10,
    alignSelf:"center"
},
user_img:{
    width:50,
    height:50,
    borderRadius:20,
    borderWidth:1,
    borderColor:'#e0e0e0'
},
list_st:{
    flexDirection:"row",
    marginTop:5,
    marginBottom:14,
    
},
title_name:{
    fontSize:40,
    fontWeight:"bold"
},
})

export default Chat