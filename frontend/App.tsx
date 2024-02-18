import './styles.css'
import React, {useState} from "react";
import TodoForm from "Frontend/components/TodoForm.tsx";
import TodoList from "Frontend/components/TodoList.tsx";
import {ToDo} from "Frontend/types.ts";

export default function App() {

  const [todos, setTodos] = useState<Array<ToDo>>([])

  function addTodo(title: string) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false}
      ]
    })
  }
  function toggleTodo(id: string, completed: boolean) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed}
        }
        return todo
      })
    })
  }
  function deleteTodo(id: string) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }
  return (
      <>
        <TodoForm onSubmit={addTodo}/>
        <h1 className="header">Todo List</h1>
        <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
      </>
  );
}
