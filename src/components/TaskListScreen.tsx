import React, {useContext} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {TaskContext} from '../contexts/TaskContext';

const TaskListScreen = () => {
  const {tasks} = useContext(TaskContext);

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <Text style={styles.task}>{item}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  task: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
});

export default TaskListScreen;
