import React, { useState } from 'react';
import {SafeAreaView, View, Text, FlatList, KeyboardAvoidingView} from 'react-native';
import {main} from './styles';
import ToDoInput from './components/ToDoInput';
import TodoCard from './components/ToDoCard';

const App = () => {
  const [list, setList] = useState("");

  function addTodo(text) {
    const element = {
      id: list.length,
      todo: text,
      isDone: false
    }
    const newArray = [...list]
    newArray.push(element);
    
    setList(newArray);
    console.log(newArray);
  }

  const renderTodo = ({item}) => <TodoCard data={item}/>

  return (
    <SafeAreaView style={main.container}>
      <KeyboardAvoidingView style={main.container}>
        
        <View style={main.banner}>
          <Text style={main.todoText}>TODO</Text>
  <Text style={main.todoCount}>{list.length}</Text>
        </View>
        <FlatList
        data={list}
        renderItem={renderTodo}
        keyExtractor={(item, index) =>index.toString()}
        
        />
        <ToDoInput
          ontodoEnter={todoText => addTodo(todoText)}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default App;