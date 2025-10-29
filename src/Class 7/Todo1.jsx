import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const Todo1 = () => {
    const [todo, setTodo] = useState([])

    const{
        register,
        handleSubmit,
        reset
    }=useForm()

    function getTodo(data) {

        data.id=nanoid()
        data.isCompleted=false
        console.log(data)

        setTodo([...todo,data])

        reset()

        toast.success("Todo Created")
    }

    function toggleTask(id) {
        setTodo((prev) => (
            prev.map((el) => el.id === id ? { ...el, isCompleted: !el.isCompleted } : el)
        ))
        toast.success("Todo Completed")
    }

    function deleteTodo(id) {
        // filter
        let filteredTodo = todo.filter((el) => el.id !== id);
        setTodo(filteredTodo)
        toast.error("Todo Deleted")
    }

    console.log(todo)
    return (
        <div>
            <h1>Todo List</h1>
            <form action="" onSubmit={handleSubmit(getTodo)}>
                <input type="text" placeholder='Enter the TODO' {...register("title")} />
                <input type="submit" />
            </form>

            <ul>
                {
                    todo.map((el) => (
                        <>
                            <li className={(el.isCompleted) ? "line" : ""} onClick={() => { toggleTask(el.id) }} key={el.id}>{el.title}</li>
                            <button onClick={() => { deleteTodo(el.id) }}>Delete Todo</button>
                        </>
                    ))
                }
            </ul>
        </div>
    )
}

export default Todo1
