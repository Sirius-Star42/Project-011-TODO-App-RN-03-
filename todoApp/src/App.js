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

  function doneTodo(todoId) {
    const newArray = [...list];
    const todoIndex = newArray.findIndex(item => item.id ==todoId);

    newArray[todoIndex].isDone = !newArray[todoIndex].isDone;

    setList(newArray);
  }
  const renderTodo = ({item}) => {
     return (
     <TodoCard 
     data={item}
     onDone={() => doneTodo(item.id)}

      />
      )
  }

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
        ListEmptyComponent= {() => <Text style={main.listempty}>Nothing to do... </Text>}
        
        />
        <ToDoInput
          ontodoEnter={todoText => addTodo(todoText)}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default App;