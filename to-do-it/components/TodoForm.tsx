import React,{useState, FormEvent} from 'react'

interface TodoFormProps {
    onAdd: (text: string) => void;
}
const TodoForm = ({onAdd} : TodoFormProps) => {

    const [text, setText] = useState(" ");
    
    const handleSubmit = ( e: FormEvent) => {
         
        e.preventDefault();

        if(text.trim()) {
            onAdd(text);
            setText("");
        }
    };
  return (
    <div>
        <form onSubmit={handleSubmit} className="mb-4 flex gap-2">
        <input
          type='submit'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder=' Place a <>'
          className="flex-1 rounded border p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      
        />
        <button 
        type='submit'
        className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
        
        >
            Add
        </button>
        </form>
    </div>
  )
}

export default TodoForm