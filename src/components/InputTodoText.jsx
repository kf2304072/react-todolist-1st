import React from "react";


export const InputTodoText = (props) =>{
    const {todoText, onChange,onClick} = props

    return (
    <>
        <h1>ToDo List</h1>
        <input type='' placeholder='タスクを入力して下さい' value={todoText} onChange={onChange}/>
        <button onClick={onClick}>追加</button>
    </>
    )
}