import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import "./todo.css"
import { toast } from 'react-toastify'

const Todo = () => {
    const [todo,setTodo]=useState([])
    const [title,setTitle]=useState("");

    function handleSubmit(e){
        e.preventDefault()
        let copyTodo=[...todo] // shallow copy 

        let newTodo={
            id:nanoid(),
            title:title,
            isCompleted:false
        }

        copyTodo.push(newTodo)
        setTodo(copyTodo)

        setTitle("")

        toast.success("Todo Created")
    }

    function inputChange(e){
        setTitle(e.target.value);
    }

    function toggleTask(id){
        setTodo((prev)=>(
            prev.map((el)=> el.id===id ? {...el , isCompleted:!el.isCompleted}:el)
        ))
        toast.success("Todo Completed")
    }

    function deleteTodo(id){
        // filter
        let filteredTodo=todo.filter((el)=> el.id!==id);
        setTodo(filteredTodo)
        toast.error("Todo Deleted")
    }

    console.log(todo)
  return (
    <div>
        {/* 
            todo creation
            todo deletion
            todo cut 
        */}
        <h1>Todo List</h1>
        <form action="" onSubmit={handleSubmit}>
            <input type="text"  value={title} onChange={inputChange} placeholder='Enter the TODO' />
            <input type="submit" />
        </form>

        <ul>
            {
                todo.map((el)=>(
                    <>
                    <li className={(el.isCompleted)?"line":""} onClick={()=>{toggleTask(el.id)}} key={el.id}>{el.title}</li>
                    <button onClick={()=>{deleteTodo(el.id)}}>Delete Todo</button>
                    </>
                ))
            }
        </ul>
    </div>
  )
}

export default Todo
