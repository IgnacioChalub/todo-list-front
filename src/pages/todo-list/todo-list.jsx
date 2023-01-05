import React from 'react';
import Todo from "../shared/todo/todo";
import "./home-page.css"
import Button from "../shared/button/button";

const HomePage = () => {
    return (
        <div className={"todo-container"}>
            <Todo text={"Some text"}/>
            <Button label={'Add todo'} onClick={() => console.log("add todo")} style={{background: "#667181", color: "#FFFFFF"}} />
        </div>
    );
};

export default HomePage;