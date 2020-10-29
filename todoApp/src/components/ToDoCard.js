import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import { todo_card } from "../styles";

const TodoCard = (props) => {
    return(
        <TouchableOpacity 
        style={[todo_card.container, {backgroundColor: props.data.isDone ? '#512da8' : '#a7b6bd' }]}
        onPress={() => props.onDone()}
        onLongPress= {() => props.onRemove()}
        >
            <Text style={[
                todo_card.text,
                {textDecorationLine: props.data.isDone ? "line-through"  : null,
                color: props.data.isDone ? "white" : 'black' ,
                }
                ]}>{props.data.todo}</Text>
        </TouchableOpacity>
    )
}

export default TodoCard;