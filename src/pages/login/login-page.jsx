import React, {useState} from 'react';
import Button from "../../components/button/button";
import Input from '../../components/input/input'
import './login-page.css'
import {useNavigate} from "react-router-dom";
import {loginRequest} from "../../utils/session-service";


const LoginPage = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const logIn = () => {
        loginRequest(username, password,
            (res) => {
                console.log(res)
                window.localStorage.setItem("token", res.data.token)
                navigate("/todo")
            },
            (err) => {
                alert(err.response.data.message)
            }
        )
        setUsername("")
        setPassword("")
    }

    return (
        <div className={"main-login-container"}>
            <div className={"login-container"}>
                <h2>Log in!</h2>
                <Input value={username} onChange={(e) => setUsername(e.target.value)} placeHolder={"Username"}/>
                <Input value={password} onChange={(e) => setPassword(e.target.value)} placeHolder={"Password"} isPassword/>
                <Button label={"Log in"} onClick={logIn} style={{background: "#70bdc0"}}/>
                <h5 className={"register-navigation"} onClick={() => navigate("/register")}>You don't have an account, register <span className={"here"}>here!</span> </h5>
            </div>
        </div>
    );
};

export default LoginPage;