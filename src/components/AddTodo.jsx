import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTodo } from "../features/todo/todoSlice";
function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')
     }

    return (
        <form action="" onSubmit={addTodoHandler}>
            <input type="text" placeholder="Enter todo" value={input} onChange={(e) => {
                setInput(e.target.value)
            }}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default AddTodo;