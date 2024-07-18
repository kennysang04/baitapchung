import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

function TodoItem({ todo, updateTodo, deleteTodo, toggleTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [content, setContent] = useState(todo.content);

  const handleUpdate = () => {
    updateTodo(todo.id, { ...todo, title, content });
    setIsEditing(false);
  };

  return (
    <View style={styles.todoItem}>
      {isEditing ? (
        <View>
          <TextInput 
            style={styles.input}
            value={title} 
            onChangeText={setTitle}
            autoFocus
          />
          <TextInput 
            style={styles.input}
            value={content} 
            onChangeText={setContent}
          />
          <Button title="Save" onPress={handleUpdate} />
        </View>
      ) : (
        <View>
          <Text style={{ textDecorationLine: todo.completed ? 'line-through' : 'none' }}>
            {todo.title}: {todo.content}
          </Text>
          <Button title="Edit" onPress={() => setIsEditing(true)} />
          <Button title="Delete" onPress={() => deleteTodo(todo.id)} />
          <Button
            title={todo.completed ? 'Undo' : 'Complete'}
            onPress={() => toggleTodo(todo.id)}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    padding: 10,
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
});

export default TodoItem;
