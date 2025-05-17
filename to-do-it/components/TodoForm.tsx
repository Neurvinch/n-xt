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
        <form onSubmit={handleSubmit}>
        <input
          type='submit'
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder=' Place a <>'
        />
        <button 
        type='submit'
        
        >
            Add
        </button>
        </form>
    </div>
  )
}

export default TodoForm