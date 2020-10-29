import React, { useState } from 'react';
import {SafeAreaView, View, Text, FlatList, KeyboardAvoidingView, ImageBackground } from 'react-native';
import {main} from './styles';
import ToDoInput from './components/ToDoInput';
import TodoCard from './components/ToDoCard';

const App = () => {
  const [list, setList] = useState([]);

  function addTodo(text) {
    const element = {
      id: list.length,
      todo: text,
      isDone: false
    }

    const newArray = [element, ...list];
    // newArray.push(element);
    
    setList(newArray);
    
  };

  function doneTodo(todoId) {
    const newArray = [...list];
    const todoIndex = newArray.findIndex(item => item.id == todoId);

    newArray[todoIndex].isDone = !newArray[todoIndex].isDone;

    setList(newArray);
  }

  function removeTodo(todoId) {
    const newArray = [...list];
    const todoIndex = list.findIndex(t => t.id == todoId);
    newArray.splice(todoIndex, 1);
    setList(newArray);


  }
  const renderTodo = ({item}) => {
     return (
      <TodoCard 
        data={item}
        onDone={() => doneTodo(item.id)}
        onRemove={() => removeTodo(item.id)}
      />
      )
  };

  return (
    <SafeAreaView style={main.container}>
      
      <KeyboardAvoidingView style={main.container}>
        <ImageBackground source={require('./images/backimg.jpg')} style={main.backimg}>
        <View style={main.banner}>
        
          <Text style={main.todoText}>TODO List</Text>
          <Text style={main.todoCount}>{list.filter(t => t.isDone === false).length}</Text>
        </View>
        <FlatList
          data={list}
          renderItem={renderTodo}
          keyExtractor={(item, index) =>index.toString()}
          ListEmptyComponent= {() => <Text style={main.listempty}>Nothing to do... </Text>}
          
        />
        <ToDoInput
          ontodoEnter={todoText => addTodo(todoText)}
        />
        </ImageBackground>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default App;