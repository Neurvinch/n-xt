'use client'
import { useState, useEffect } from "react";


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

    
  return (
    <>
    </>
  );
}
