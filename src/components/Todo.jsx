import React from 'react'
import calendar_minus from '../assets/calendar_minus.png'
import Todoitems from './todoitems'
import { useEffect, useRef, useState} from 'react'
const Todo = () => {
    const [todolist, settodolist] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);
    const inputref = useRef();
    const add = () => {
          const inputtext = inputref.current.value.trim();
          if (inputtext === ""){
            return null;
        }
          const newtodo = {
            id: Date.now(), 
            text: inputtext,
            isComplete: false,
          }
          settodolist((prev) => [...prev, newtodo]);
          inputref.current.value="";
    };
    const deletetodo = (id) => {
        settodolist((prevTodos)=> {
            return prevTodos.filter((todo) => todo.id !== id);
    })
    };
    const toggle = (id) => {
        settodolist((prevTodos) => {
            return prevTodos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        isComplete: !todo.isComplete,
                    };
                }
                return todo;
            }
        )}) 
    }

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todolist));
    }, [todolist]);
return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
            <div className="flex items-center mt-7 gap-2"> 
                    <img src={calendar_minus} />
                    <h1 className='text-3xl font-semibold pl-3'> To Do List  </h1>
            </div>
            <div className='flex items-center my-6 bg-gray-300 rounded-full'>
                    <input ref={inputref} className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-500" type="text" placeholder='Add Your Task'/>
                    <button onClick={add} className="border-none rounded-full bg-[#FE7005] w-32 h-14 text-lg text-white font-medium cursor-pointer"> ADD + </button>
            </div>
            <div>
                    {todolist.map((item, index) => (
                            <Todoitems key={item.id} text={item.text} id={item.id} isComplete={item.isComplete} deletetodo={deletetodo} toggle={toggle} />
                    ))}
            </div>
    </div>
)
}

export default Todo