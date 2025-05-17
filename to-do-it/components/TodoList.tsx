import React from 'react'

interface Todo {
    id: Number;
    text: string;
}

interface TodoListProps {
    todos: Todo[];
    onDelete: (id:Number) => void;
}
const TodoList = ({todos, onDelete}:TodoListProps) => {
  return (
    <div>TodoList</div>
  )
}

export default TodoList