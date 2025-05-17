import React from 'react'

interface Todo {
    id: number;
    text: string;
}

interface TodoListProps {
    todos: Todo[];
    onDelete: (id:number) => void;
}
const TodoList = ({todos, onDelete}:TodoListProps) => {
  return (
    <div>
        <ul>
            {todos.map( (todo) => (
                <li>
                    <span>{todo.text}</span>
                    <button
                      onClick={() => onDelete(todo.id)}
                    >
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList