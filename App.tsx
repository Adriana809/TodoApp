import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import TaskListScreen from './src/components/TaskListScreen';
import AddTaskScreen from './src/components/AddTaskScreen';
import {TaskProvider} from './src/contexts/TaskContext';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tareas" component={TaskListScreen} />
      <Tab.Screen name="Añadir Tarea" component={AddTaskScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <TaskProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Bienvenido" component={HomeTabs} />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskProvider>
  );
}
