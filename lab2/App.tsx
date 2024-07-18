import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TodoList from './ToDOList';
import AsyncStorage from '@react-native-async-storage/async-storage';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const storedTodos = await AsyncStorage.getItem('todos');
        if (storedTodos !== null) {
          setTodos(JSON.parse(storedTodos));
        }
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
    fetchTodos();
  }, []);

  const saveTodos = async (newTodos) => {
    try {
      await AsyncStorage.setItem('todos', JSON.stringify(newTodos));
    } catch (error) {
      console.error('Error saving todos:', error);
    }
  };

  const addTodo = (title, content) => {
    const newTodos = [...todos, { id: Date.now(), title, content, completed: false }];
    setTodos(newTodos);
    saveTodos(newTodos);
  };

  const updateTodo = (id, updatedTodo) => {
    const updatedTodos = todos.map(todo => todo.id === id ? updatedTodo : todo);
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  const deleteTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  const toggleTodo = id => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
    saveTodos(updatedTodos);
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const uncompletedCount = todos.length - completedCount;

  return (
    <View style={styles.container}>
      <Text style={styles.header}>To-Do App</Text>
      <Text style={styles.info}>Hoàn thành: {completedCount} | Chưa hoàn thành: {uncompletedCount}</Text>
      <TodoList
        todos={todos}
        addTodo={addTodo}
        updateTodo={updateTodo}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  info: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default App;
