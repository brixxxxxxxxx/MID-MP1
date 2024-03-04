import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const App = () => {
  const [goal, setGoal] = useState('');
  const [goals, setGoals] = useState([]);
  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const colors = ['blue', 'red', 'green', 'pink', 'violet'];

  const addGoalHandler = () => {
    if (goal.trim() === '') {
      return; 
    }

    const color = colors[currentColorIndex % colors.length];
    setCurrentColorIndex(currentColorIndex + 1);

    setGoals((prevGoals) => [...prevGoals, { id: Math.random().toString(), text: goal, color }]);
    setGoal('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="ENTER YOUR GOAL"
          style={styles.textinput}
          value={goal}
          onChangeText={(text) => setGoal(text)}
        />
        <Button title="MY GOAL" onPress={addGoalHandler} />
      </View>
      <FlatList
        data={goals}
        keyExtractor={(item) => item.id}
        renderItem={(itemData) => (
          <View style={[styles.listItem, { backgroundColor: itemData.item.color }]}>
            <Text>{itemData.item.text}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#CCCC',
    
  },
  textinput: {
    borderWidth: 1,
    width: '90%',
    marginRight: 10,
    padding: 10,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderColor: '#CCCC',
    borderWidth: 1,
    marginBottom: 20,
  },
});

export default App;