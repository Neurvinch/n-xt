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
        <ul className="space-y-2">
            {todos.map( (todo) => (
                <li
                 className="flex items-center justify-between rounded border p-2"
                 key={todo.id}
                >
                    <span>{todo.text}</span>
                    <button
                      onClick={() => onDelete(todo.id)}
                      className="text-red-500 hover:text-red-700"
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