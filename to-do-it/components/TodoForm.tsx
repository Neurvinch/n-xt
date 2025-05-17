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
    }
  return (
    <div>TodoForm</div>
  )
}

export default TodoForm