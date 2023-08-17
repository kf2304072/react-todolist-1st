import React from "react";



export const Completion = (props) =>{
    const {completion,completionDelete} = props;
    return (
    <div>
        <p>完了 List</p>
        <ul>
            {completion.map((todo,index) =>{
            return(
            <div className="todo-list" key={todo}>
                <li>{todo}</li>
                <button onClick={() =>{completionDelete(index)}}>削除</button>
            </div>

                )
            })}

        </ul>
    </div>
        
    )
}