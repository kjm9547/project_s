import React,{useState} from "react";
import {View,Text, TouchableOpacity,StyleSheet, FlatList, TextInput, Keyboard} from 'react-native'
import Chat from "./Chat";
import Icon from 'react-native-vector-icons/Ionicons'
import Search from 'react-native-vector-icons/FontAwesome'

function Chat_Room({navigation}){
    const date = new Date()
    const hours = date.getHours();
    const min= date.getMinutes();
    const [text,Settext] = useState("")

    const onpress = () =>{
        onInsert(text)
        Settext('')
        Keyboard.dismiss();
        console.log(Chat_Contents)
    }
    const onInsert = text =>{
        const nextid= (Math.max(...Chat_Contents.map(Chat_Contents=> Chat_Contents.id))+1)
        const chat_ct = {
            id:nextid,
            text,
        }
        SetContents(Chat_Contents.concat(chat_ct))
    }
    const [Chat_Contents,SetContents] = useState(
        [
            {id:1,name:"김재민",text:"채팅 입력"}
        ]
    )
    return(
    <View style={styles.container}>
        <View style={styles.header}>
            
            <TouchableOpacity onPress={()=>navigation.pop()}>
                <Icon name="chevron-back-outline" size={50}></Icon>
            </TouchableOpacity>
            <Icon name ={'search'}></Icon>
        </View>
        <View style={styles.content}>
        <View style={styles.Chat_content} >
        
            <FlatList 
            style={styles.qwe}
            data={Chat_Contents}
            renderItem={({item})=>(
                <View style={styles.content_align}>
                <Text>{hours}:{min}</Text>
                <Text style={styles.chat}>{item.text}</Text>
                </View>
            )}>
            </FlatList>
        </View>
        </View>
        <View style={styles.footer}>
        
        <TextInput style={styles.input_st}
                   value={text}
                   onChangeText={Settext}
                   returnKeyType="done"
                   onSubmitEditing={onpress}
                   placeholder="메시지를 작성"
                   
>
        </TextInput>
        <TouchableOpacity style={styles.onpress_st}
        onPress={onpress}>
                <Text>전송</Text>
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
        flex:0.1,
        borderColor:'black',
        borderWidth:1,
        backgroundColor:'#8aacc8',
        flexDirection:'row'
    },
    content:{
        flex:0.8,
        borderColor:'black',
        borderWidth:1,
        backgroundColor:'#bbdefb'
       
    },
    footer:{
        flex:0.1,
        borderColor:'black',
        borderWidth:1,
        flexDirection:'row'
    },
    input_st:{
        
        borderWidth:1,
        flex:1
    },
    Chat_content:{
        alignItems:'flex-end',
        borderColor:'black',
        
    },
    content_align:{
        flexDirection:'row',
         
        borderColor:'black',
        alignItems:'center',
        alignSelf:'flex-end'
    },
    chat:{
        backgroundColor:'#ffeb3b',
        borderBottomLeftRadius:25,
        borderBottomRightRadius:25,
        borderTopLeftRadius:25,
        paddingHorizontal:10,
        paddingTop:15,
        marginBottom:10,
        marginRight:10,
        fontSize:15

    },
    onpress_st:{
        width:65,
        height:35,
        borderWidth:1,
        backgroundColor:'#ffeb3b',
        alignItems:'center'
    }
 
}
)

export default Chat_Room