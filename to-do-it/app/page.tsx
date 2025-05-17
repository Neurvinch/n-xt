'use client'
import { useState, useEffect } from "react";
import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";

interface Todo {
  id: number;
  text : string;
}

export default function Home() {

   const [todos,setTodos] = useState<Todo[]>([]);

    useEffect( () => {
      const storedTodos =  localStorage.getItem("todos")

      if(storedTodos) {
        setTodos( JSON.parse(storedTodos))
      }
    },[])
           
    useEffect( () => {
      localStorage.setItem('todos',JSON.stringify(todos));
    },[todos]);

    const addTodo = (text: string) => {
      const newTodo : Todo = {
        id: Date.now(),
        text: text,
      };
      setTodos([newTodo, ...todos]);
    }

    const deletedTodo = (id: number) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    }



  return (
    <main className="mx-auto max-w-md p-4">
    <h1 className="mb-4 text-2xl font-bold">Todo List</h1>
      <TodoForm onAdd={addTodo} />
      <TodoList todos={todos} onDelete={deletedTodo} />
    </main>
  );
}
