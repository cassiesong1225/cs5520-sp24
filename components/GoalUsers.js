import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React, { useEffect,useState } from 'react'
import { getAllDocs, writeToDB } from "../firebase-files/firestoreHelper";

export default function GoalUsers(id) {

  const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUsers() {
          try {
            const usersFromDB = await getAllDocs(`goals/${id}/users`);
             console.log(usersFromDB);
              const response = await fetch("https://jsonplaceholder.typicode.com/users");
              if(!response.ok) {
                throw new Error('Network response was not ok');
              }
              const data = await response.json();
              console.log('data',data);
              data.forEach((element) => {
                console.log('element', element);
                writeToDB(element, 'goals', element.id, 'user');
              });
              setUsers(data);
              console.log('user',data);
            } catch (error) {
                console.error('fetch error',error);
            }
        }
       fetchUsers();
    }, []);
   
  return (
    <View>
      <FlatList
        data={users}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>;
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})