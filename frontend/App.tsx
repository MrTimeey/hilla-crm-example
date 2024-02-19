import './styles.css'
import React, {useEffect, useState} from "react";
import TodoForm from "Frontend/components/TodoForm.tsx";
import TodoList from "Frontend/components/TodoList.tsx";
import {TodoService} from "Frontend/generated/endpoints.ts";
import TodoTO from "Frontend/generated/com/example/application/data/TodoTO.ts";

export default function App() {

  const [todos, setTodos] = useState<Array<TodoTO>>([])

  useEffect(() => {
    TodoService.findAllTodos().then(todos => {
      if (todos){
        setTodos(todos as TodoTO[])
      }
    });
  }, []);

  function addTodo(title: string) {
    setTodos(currentTodos => {
      TodoService.createTodo(title)
      return [
        ...currentTodos,
        { id: crypto.randomUUID(), title, completed: false}
      ]
    })
  }
  function toggleTodo(id: string, completed: boolean) {
    setTodos(currentTodos => {
      TodoService.toggleTodo(id)
      return currentTodos.map(todo => {
        if (todo?.id === id) {
          return { ...todo, completed}
        }
        return todo
      })
    })
  }
  function deleteTodo(id: string) {
    TodoService.deleteTodo(id)
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo?.id !== id)
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
