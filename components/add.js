import React, {useState} from 'react';
import { TextInput, View, Button } from 'react-native';

export default function add({navigation}) {

    const [itemName,setItemName]= useState('')
    const [itemDesc,setItemDesc]= useState('')
    const [itemPlace,setItemPlace]= useState('')

    return (
        <View>
             <TextInput 
            placeholder="Add to do list Name"
            onChangeText={text => setItemName(text)}
            value={itemName} 
             /> 
             <TextInput 
            placeholder="Add to do list Description"
            onChangeText={text => setItemDesc(text)}
            value={itemDesc} 
             /> 
             <TextInput 
            placeholder="Add to do list Place"
            onChangeText={text => setItemPlace(text)}
            value={itemPlace} 
             />

             <Button
             title="Add"
             onPress={()=>{
                 let newItem ={"name":itemName,"description":itemDesc, "place":itemPlace}
                 navigation.state.params.onGoBack(newItem)
                 navigation.goBack();
             }}
             /> 

      </View>
    );
  }