import React, {useEffect, useState} from 'react';
import Todo from "../../components/todo/todo";
import "./todo-list.css"
import Button from "../../components/button/button";
import {useParams} from "react-router-dom";


const TodoList = () => {
    const [todoList, setTodoList] = useState([])

    let { id } = useParams()

    useEffect(() => {
        setTodoList({
                title: id,
                items: [
                    {title: "title 1", text: "text 1", isDone: false},
                    {title: "title 2", text: "text 3", isDone: false},
                    {title: "title 3", text: "text 3", isDone: false},
                ]
        })
    }, [id])

    return (
        <div className={"todo-container"}>
            <h3>{todoList.title}</h3>
            {todoList.items?.map((item) => <Todo title={item.title} text={item.text}/>)}
            <Button label={'Add todo'} onClick={() => console.log("add todo")} style={{background: "#667181", color: "#FFFFFF"}} />
        </div>
    );
};

export default TodoList;