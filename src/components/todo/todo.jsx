import React from 'react';
import "./todo.css"

const Todo = ({title, text}) => {
    return (
        <div className={"todo"}>
           <h3>{title}</h3>
           <p>{text}</p>
        </div>
    );
};

export default Todo;