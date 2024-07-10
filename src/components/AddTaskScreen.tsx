import React, {useState, useContext} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import {TaskContext} from '../contexts/TaskContext';

const AddTaskScreen = ({navigation}) => {
  const [task, setTask] = useState('');
  const {addTask} = useContext(TaskContext);

  const handleAddTask = () => {
    addTask(task);
    setTask('');
    navigation.navigate('Tareas');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Añadir nueva tarea"
        value={task}
        onChangeText={setTask}
      />
      <Button title="Añadir tarea" onPress={handleAddTask} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    padding: 8,
  },
});

export default AddTaskScreen;
