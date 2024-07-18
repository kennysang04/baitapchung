import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, FlatList } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TodoItem from './ToDoItem';

const TodoList = ({ todos, addTodo, updateTodo, deleteTodo, toggleTodo }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
     
  const handleSubmit = () => {
    addTodo(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Content"
        value={content}
        onChangeText={setContent}
      />
      <Button title="Add Todo" onPress={handleSubmit} />
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TodoItem
            todo={item}
            updateTodo={updateTodo}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo}
          />
        )}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default TodoList;
