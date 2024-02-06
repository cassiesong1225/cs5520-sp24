import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from "react";
import Input from './Input';

export default function GoalItem() {
    const [goals, setGoals] = useState([]);
    function receiveInput(goalText) {
    console.log("Received Input", goalText);
    setGoals(currentGoals => [
      ...currentGoals, 
      { text: goalText, id: Math.random().toString() }
    ]);
    setIsModalVisible(false);
  }
    return (
     <View>
      {goals.map(goal => (
            <View key={goal.id} style={styles.listItem}>
              <Text>{goal.text}</Text>
            </View>
          ))}
    {/* // <View>
    //   <Text>GoalItem</Text> */}
    </View>
  )
}

const styles = StyleSheet.create({})