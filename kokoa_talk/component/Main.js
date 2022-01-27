import React from "react";
import {View,Text, TouchableOpacity,StyleSheet, FlatList} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

function Main({navigation,friends_list}){
    console.log(friends_list)
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Text>
                    user_info
                </Text>
            </View>
            <View style={styles.content}>
                <FlatList data={friends_list}
                renderItem={({item}) =>(
                    <Text>{item.name}</Text>
                )}
                keyExtractor={item =>item.id.toString()}/>
                
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
export default Main