import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import Input from "../../components/input/input";
import Button from "../../components/button/button";
import "./register.css"
import {registerRequest} from "../../utils/session-service";

const Register = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    const register = () => {
        registerRequest(username, password,
            (res) => {
                alert("User created successfully, please go back to login!")
                navigate("/")
            },
            (err) => {
                alert(err.response.data.message)
            }
        )
        setUsername("")
        setPassword("")
    }

    return (
        <div className={"main-register-container"}>
            <div className={"register-container"}>
                <h2>Register!</h2>
                <Input value={username} onChange={(e) => setUsername(e.target.value)} placeHolder={"Username"}/>
                <Input value={password} onChange={(e) => setPassword(e.target.value)} placeHolder={"Password"} isPassword/>
                <Button label={"Register"} onClick={register} style={{background: "#70bdc0"}}/>
                <h5 className={"login-navigation"} onClick={() => navigate("/")}>You already have an account, login <span className={"here"}>here!</span> </h5>
            </div>
        </div>
    );
};

export default Register