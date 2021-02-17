import React,{useState, useEffect} from 'react';
import { Text, View, Button,FlatList,TouchableOpacity,StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function home({navigation}) {

  
  const [todos,setTodos] =useState([
  
  ]
  )
  const updateItem = async (data) =>{
    console.log(data)

//spread operator (on free code camp)

try {
  const jsonValue = JSON.stringify([...todos,data])
  await AsyncStorage.setItem('@storage_Key', jsonValue)
} catch (e) {
  // saving error
}

    setTodos([...todos,data])
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      if(jsonValue !== null) {
        setTodos(JSON.parse(jsonValue))
        // value previously stored
      }
    } catch(e) {
      // error reading value
    }
  }
  useEffect(() =>{
    getData();
  },[])


    return (
      <View>
        <Text>My To Do List</Text> 
        
        <FlatList
        data={todos}
        renderItem={
          ({item})=>(
            <TouchableOpacity  style={styles.item}
            onLongPress={async () =>{
              let newTodos = todos.filter(val=>{
                return val !== item
              })
              try {
                const jsonValue = JSON.stringify([...todos,data])
                await AsyncStorage.setItem('@storage_Key', jsonValue)
              } catch (e) {
                // saving error
              }
        
              
              setTodos(newTodos)
            }
          }
              onPress={() => navigation.push('Detail',{'item':item})}>
            <View>
              <Text>{item.name}</Text>
            </View>
            </TouchableOpacity>
          )
        }
        />
        <Button title="Add a new Item" onPress={() => 
          navigation.push('Add',{
            onGoBack:updateItem
          })
          }/>

      </View>
    );
  }

  const styles = StyleSheet.create({

 item:{
   padding:20,
   marginVertical:8,
   marginHorizontal:16,
   backgroundColor:'yellow'
 }
   });