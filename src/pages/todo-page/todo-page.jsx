import React, {useEffect, useState} from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import "./todo-page.css"
import Button from "../../components/button/button";

const TodoPage = () => {
    const [todoLists, setTodoLists] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        setTodoLists({
          lists: [
              {id: "1", title: "title 1"},
              {id: "2", title: "title 2"},
              {id: "3", title: "title 3"}
          ]
      })
    }, [])

    const selectList = (id) => {
        navigate("/todo/" + id + "")
    }

    const logOut = () => {
        window.localStorage.removeItem("token")
        navigate("/")
    }

    return (
        <div className={"todo-page-container"}>
            <div className={"side-column"}>
                <h2>Your todo's</h2>
                {todoLists.lists?.map((list) => <div className={"list-container"} onClick={() => selectList(list.id)}>{list.title}</div>)}
                <Button label={"Log out"} onClick={logOut} style={{ position: "absolute", bottom: "10px"}}/>
            </div>
            <Outlet/>
        </div>

    );
};

export default TodoPage;