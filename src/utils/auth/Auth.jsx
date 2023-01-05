import {Outlet, useNavigate} from "react-router-dom";
import React, {useEffect} from "react";

const Auth = () => {
    const navigate = useNavigate()

    useEffect(() => {
        if(!isAuth()) {
            navigate("/")
        }
    }, [])

    const isAuth = () => {
        const token = window.localStorage.getItem("token")
        return !!token
    }

    return (
        <Outlet />
    );
};

export default Auth