import { useState, useReducer } from 'react';
import { AddTodoMenu } from './AddTodoMenu';
import './App.css';
import TodoList from './TodoList';
import { defaultTodos } from './initialTodos';

function App() {

  const [isEmpty, setIsEmpty] = useState(true);
  const [nextTodoContent, setNextTodoContent] = useState('');

  const [todos, dispatch] = useReducer(todosReducer, defaultTodos);

  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  function handleChange(e){
    setNextTodoContent(e.target.value);
    if(e.target.value.length > 0){
      setIsEmpty(false);
    } else{
      setIsEmpty(true);
    }
  }

  function handleAddClick(e){
    dispatch({
      type: 'added',
      payload: {
        content: nextTodoContent,
        isCompleted: false
      }
    });
    setNextTodoContent('');
    setIsEmpty(true);
}

  function handleEnterPress(e){
    if(nextTodoContent === ''){
      return;
    }
    if(e.key === 'Enter'){
      handleAddClick();
    }
  }

function handleEditClick(e, id){
  if(!isEditing){
    setIsEditing(true);
    setEditId(id);
  } else{
      dispatch({
        type: 'edited',
        payload: {
          id: id,
          content: e.target.parentElement.closest('.todo-item').querySelector('input').value
        }
      })
    setEditId(null);
    setIsEditing(false);
  }
}

function handleDeleteClick(id){
  dispatch({
    type: 'deleted',
    payload: {
      id: id
    }
  });
}

function handleSelect(id){
  dispatch({
    type: 'selected',
    payload: {
      id: id
    }
  });
}

  return (
    <>
      <div id='container'>
      <div id='todoContainer'>
      <h1>Todo Application</h1>
      <AddTodoMenu 
      isEmpty={isEmpty} 
      onChange={handleChange} 
      onAddClick={handleAddClick}
      onEnterPress={handleEnterPress}
      nextTodoContent={nextTodoContent}
      />
      <TodoList
        todos={todos}
        handleEditClick={handleEditClick}
        handleDeleteClick={handleDeleteClick}
        handleSelect={handleSelect}
        isEditing={isEditing}
        editId={editId}
        setEditId={setEditId}
      />
      </div>
      </div>
    </>
  )
}

function todosReducer(todos, action){
  switch (action.type){
    case 'added': {
      let lastId = todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) : 1;
      return [
        ...todos,
        {
          id: ++lastId,
          ...action.payload
        }
      ];
    };

    case 'edited': {
      const nextTodo = todos.find((todo) => {
        return todo.id === action.payload.id;
      });
      let index = todos.findIndex((todo) => todo.id === action.payload.id);
      nextTodo.content = action.payload.content;
      let nextTodos = todos.slice();
      nextTodos[index] = nextTodo;
      return nextTodos;
      };

    case 'deleted': {
      return [
        ...todos.filter((todo) => todo.id !== action.payload.id)
      ]
    }
    
    case 'selected': {
      const index = todos.findIndex((todo) => todo.id === action.payload.id);
      const nextTodos = todos.slice();
      nextTodos[index] = {
        ...nextTodos[index],
        isCompleted: !nextTodos[index].isCompleted
      }
      const sortedTodos = nextTodos.sort((a, b) => {
        if(a.isCompleted && !b.isCompleted) return 1;
        if(!a.isCompleted && b.isCompleted) return -1;
        return 0;
      })
      return sortedTodos;
    }
      
      default :{
        console.log("Default");
    }}
};

export default App;
