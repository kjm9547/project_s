import React from "react";
import {} from 'react-native'
import Main from "./Main";


function User_List(){
    const list=
    
  [
      {id:1,name:"김재민"},
      {id:1,name:"하호찬"},
      {id:1,name:"박진용"},
  ]


    return(
    <Main list ={list}/>
    
    )
}

export default User_List