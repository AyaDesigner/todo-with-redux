import React from 'react';
import TodoItem from './TodoItem';
import {useSelector} from 'react-redux';
import {nanoid} from 'nanoid';

const TodoList = () => {
    let todos = useSelector (state => state);


    return (  
        <div>
           {todos.map((todo, index) => { 
               return <TodoItem key={nanoid()} todo={todo} numberTask={index}/>})}
            
        </div>
    );  
}
 
export default TodoList;