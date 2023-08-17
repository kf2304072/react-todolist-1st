import React from "react";

export const Notimplemented = (props) =>{
    const {notimplemented, onClick, clickDelete} =props
    return (
<>
    <div>
        <p>未着手 List</p>
        <ul>
            {notimplemented.map((todo,index) => {
            return (
                
            <div className="todo-list" key={todo}>
                <li>{todo}</li>
                <button onClick={() =>onClick(index)}>完了</button>
                <button onClick={() =>clickDelete(index)}>削除</button>
            </div>
            
            )
            })}

        </ul>
    </div>


</>
    )
}